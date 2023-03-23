package shop.winetoy.server.tools;

import java.time.Duration;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import jakarta.annotation.PostConstruct;
import jakarta.servlet.http.HttpServletRequest;
import shop.winetoy.server.member.entity.MemberDto;

@Component
public class JwtManager {
	// 민감정보는 따로 분리하는 것이 좋다
	@Value("${custom.access-key}")
	private String secretAccessKey;
	@Value("${custom.refresh-key}")
	private String secretRefreshKey;
	
	// 유효시간 3분
	private final Long expiredTime = Duration.ofMinutes(30).toMillis();
	// 리프레쉬 토큰 유효시간 1시간
	private final Long refreshExpiredTime = Duration.ofHours(6).toMillis();
	
	private final String BEARER = "bearer";

	@PostConstruct
    protected void init() {
		secretAccessKey = Base64.getEncoder().encodeToString(secretAccessKey.getBytes());
		secretRefreshKey = Base64.getEncoder().encodeToString(secretRefreshKey.getBytes());
    }
	
	/**
	 * Member 정보를 담은 JWT 토큰을 생성한다.
	 *
	 * @param member Member 정보를 담은 객체
	 * @return String JWT 토큰
	 */
	public String generateAccessToken(MemberDto member) {
		Date now = new Date();
		return Jwts.builder().setSubject(member.getName()) // 보통 username
				.setHeader(createHeader()).setClaims(createAccessClaims(member)) // 클레임, 토큰에 포함될 정보
				.setExpiration(new Date(now.getTime() + expiredTime)) // 만료일
				.signWith(SignatureAlgorithm.HS256, secretAccessKey).compact();
	}

	public String generateRefreshToken(MemberDto member) {
		Date now = new Date();
		return Jwts.builder().setSubject(member.getName()) // 보통 username
				.setHeader(createHeader()).setClaims(createRefreshClaims(member)) // 클레임, 토큰에 포함될 정보
				.setExpiration(new Date(now.getTime() + refreshExpiredTime)) // 만료일
				.signWith(SignatureAlgorithm.HS256, secretRefreshKey).compact();
	}

	private Map<String, Object> createHeader() {
		Map<String, Object> header = new HashMap<>();
		header.put("typ", "JWT");
		header.put("alg", "HS256"); // 해시 256 사용하여 암호화
		header.put("regDate", System.currentTimeMillis());
		return header;
	}

	/**
	 * AccessToken 클레임(Claim)을 생성한다.
	 *
	 * @param member 토큰을 생성하기 위한 계정 정보를 담은 객체
	 * @return Map<String, Object> 클레임(Claim)
	 */
	private Map<String, Object> createAccessClaims(MemberDto member) {
		Map<String, Object> claims = new HashMap<>();
		claims.put("pid", member.getPid()); // member의 pid
		claims.put("id", member.getId()); // member의 id
		claims.put("name", member.getName()); // member의 name
		claims.put("email", member.getEmail()); // email
		claims.put("address", member.getAddress()); // address
		claims.put("phone", member.getPhone()); // address
		claims.put("regiDate", member.getRegiDate()); // 가입일
		claims.put("role", member.getRole()); // 역할
		
		return claims;
	}
	
	/**
	 * RefreshToken 클레임(Claim)을 생성한다.
	 *
	 * @param member 토큰을 생성하기 위한 계정 정보를 담은 객체
	 * @return Map<String, Object> 클레임(Claim)
	 */
	private Map<String, Object> createRefreshClaims(MemberDto member) {
		Map<String, Object> claims = new HashMap<>();
		claims.put("pid", member.getPid()); // member의 pid
		claims.put("email", member.getEmail()); // email
		claims.put("role", member.getRole()); // 역할
		
		return claims;
	}

	/**
	 * Token 에서 Claim 을 가져온다.
	 *
	 * @param token JWT 토큰
	 * @return Claims 클레임
	 */
	Claims getClaims(String token) {
		return Jwts.parser().setSigningKey(secretAccessKey).parseClaimsJws(token).getBody();
	}

	public Claims parseJwtToken(String authorizationHeader, HttpServletRequest request) {
		
		Claims claims = null;
				
		if(!validationAuthorizationHeader(authorizationHeader, request)) {
			return claims;
		}
		
		String token = extractionToken(authorizationHeader);

		try {
			claims = getClaims(token);
		} catch (SignatureException e) {
			// JWT의 securityKey가 맞지 않는 경우
			request.setAttribute("exception", ExceptionCode.SIGNATURE_DOES_NOT_MATCH);
		} catch (ExpiredJwtException e) {
			// JWT의 유효기간이 초과되었을 경우 EXPIRED_TOKEN
			request.setAttribute("exception", ExceptionCode.EXPIRED_TOKEN);
		} catch (MalformedJwtException e) {
			// JWT의 구성이 올바르지 않을 경우 UNSUPPORTED_TOKEN
			request.setAttribute("exception", ExceptionCode.UNSUPPORTED_TOKEN);
		}

		return claims;
	}

	/**
	 * Authorization Header에 실려온 토큰 검증
	 * 
	 * @param accessToken
	 */
	private boolean validationAuthorizationHeader(String accessToken, HttpServletRequest request) {
		if (accessToken == null || !accessToken.startsWith(BEARER)) {
			// 헤더가 bearer로 시작하지 않는 경우 INVALID_TOKEN
			request.setAttribute("exception", ExceptionCode.INVALID_TOKEN);
			return false;
		}
		
		return true;
	}

	/**
	 * Authorization Header에서 token 추출
	 * 
	 * @param authorizationHeader
	 * @return
	 */
	private String extractionToken(String authorizationHeader) {
		String[] parts = authorizationHeader.split(" ");
		return parts[1];
	}

	public boolean validationRefreshToken(String refreshToken) {
		try {
			Jws<Claims> claims = Jwts.parser().setSigningKey(secretRefreshKey).parseClaimsJws(refreshToken);
			return !claims.getBody().getExpiration().before(new Date());
		} catch (Exception e) {
			return false;
		}
	}
	
	public boolean validationAccessToken(String accessToken) {
		try {
			String[] split = accessToken.split(" ");
			
			Jws<Claims> claims = Jwts.parser().setSigningKey(secretAccessKey).parseClaimsJws(split[1]);
			return !claims.getBody().getExpiration().before(new Date());
		} catch (Exception e) {
			return false;
		}
	}
	
	public int extractPidFromAccessToken(String accessToken) {
		String[] split = accessToken.split(" ");
		
		Jws<Claims> claims = Jwts.parser().setSigningKey(secretAccessKey).parseClaimsJws(split[1]);
		return (int) claims.getBody().get("pid");
	}

}
