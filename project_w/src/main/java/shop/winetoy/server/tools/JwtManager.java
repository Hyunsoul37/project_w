package shop.winetoy.server.tools;

import java.time.Duration;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import jakarta.servlet.http.HttpServletRequest;
import shop.winetoy.server.member.entity.MemberDto;

@Component
public class JwtManager {
	// TODO 민감정보는 따로 분리하는 것이 좋다
	private final String securityKey = "helloworld";
	// 유효시간 3분
	private final Long expiredTime = Duration.ofMinutes(10).toMillis();
	// 리프레쉬 토큰 유효시간 1시간
	private final Long refreshExpiredTime = Duration.ofHours(1).toMillis();
	private final String BEARER = "bearer";

	// 유효시간 1시간
//	private final Long expiredTime = 1000 * 60L * 60L * 1L;
	// 리프레쉬 토큰 유효시간 30일
//	private final Long refreshExpiredTime = Duration.ofDays(30).toMillis();

	/**
	 * Member 정보를 담은 JWT 토큰을 생성한다.
	 *
	 * @param member Member 정보를 담은 객체
	 * @return String JWT 토큰
	 */
	public String generateJwtToken(MemberDto member) {
		Date now = new Date();
		
		System.out.println("generateJwtToken : " + member.toString());
		
		return Jwts.builder().setSubject(member.getName()) // 보통 username
				.setHeader(createHeader()).setClaims(createClaims(member)) // 클레임, 토큰에 포함될 정보
				.setExpiration(new Date(now.getTime() + expiredTime)) // 만료일
				.signWith(SignatureAlgorithm.HS256, securityKey).compact();
	}

	public String generateRefreshToken(MemberDto member) {
		Date now = new Date();
		return Jwts.builder().setSubject(member.getName()) // 보통 username
				.setHeader(createHeader()).setClaims(createClaims(member)) // 클레임, 토큰에 포함될 정보
				.setExpiration(new Date(now.getTime() + refreshExpiredTime)) // 만료일
				.signWith(SignatureAlgorithm.HS256, securityKey).compact();
	}

	private Map<String, Object> createHeader() {
		Map<String, Object> header = new HashMap<>();
		header.put("typ", "JWT");
		header.put("alg", "HS256"); // 해시 256 사용하여 암호화
		header.put("regDate", System.currentTimeMillis());
		return header;
	}

	/**
	 * 클레임(Claim)을 생성한다.
	 *
	 * @param member 토큰을 생성하기 위한 계정 정보를 담은 객체
	 * @return Map<String, Object> 클레임(Claim)
	 */
	private Map<String, Object> createClaims(MemberDto member) {
		Map<String, Object> claims = new HashMap<>();
		claims.put("pid", member.getPid()); // member의 pid
		claims.put("id", member.getId()); // member의 id
		claims.put("name", member.getName()); // member의 name
		claims.put("email", member.getEmail()); // email
		claims.put("address", member.getAddress()); // address
		claims.put("phone", member.getPhone()); // address
		claims.put("regiDate", member.getRegiDate()); // 가입일
		claims.put("role", member.getRole()); // 역할
		
		System.out.println("createClaims : " + claims.toString());
		return claims;
	}

	/**
	 * Token 에서 Claim 을 가져온다.
	 *
	 * @param token JWT 토큰
	 * @return Claims 클레임
	 */
	Claims getClaims(String token) {
		return Jwts.parser().setSigningKey(securityKey).parseClaimsJws(token).getBody();
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
			System.out.println("signature does not match" + e.getMessage());
			request.setAttribute("exception", ExceptionCode.SIGNATURE_DOES_NOT_MATCH);
//			throw new JwtException("signature does not match");
		} catch (ExpiredJwtException e) {
			// JWT의 유효기간이 초과되었을 경우 EXPIRED_TOKEN
			System.out.println("JWT expired" + e.getMessage());
			request.setAttribute("exception", ExceptionCode.EXPIRED_TOKEN);
//			throw new JwtException("JWT expired");
		} catch (MalformedJwtException e) {
			// JWT의 구성이 올바르지 않을 경우 UNSUPPORTED_TOKEN
			System.out.println("Incorrectly formed token" + e.getMessage());
			request.setAttribute("exception", ExceptionCode.UNSUPPORTED_TOKEN);
//			throw new JwtException("Incorrectly formed token");
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
			System.out.println("invalid token");
			request.setAttribute("exception", ExceptionCode.INVALID_TOKEN);
			return false;
//			throw new IllegalArgumentException("invalid token");
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

	/**
	 * 토큰으로 부터 name 을 가져온다.
	 *
	 * @param token JWT 토큰
	 * @return String Member 의 name
	 */
	
	public String getIdFromToken(String token) {
		return (String) getClaims(token).get("id");
	}
	
	public String getNameFromToken(String token) {
		return (String) getClaims(token).get("name");
	}

	public String getPidFromToken(String token) {
		return (String) getClaims(token).get("pid");
	}

	public String getEmailFromToken(String token) {
		return (String) getClaims(token).get("email");
	}

	public String getAddressFromToken(String token) {
		return (String) getClaims(token).get("address");
	}

	public String getPhoneFromToken(String token) {
		return (String) getClaims(token).get("phone");
	}

	public String getRegiDateFromToken(String token) {
		return (String) getClaims(token).get("regiDate");
	}

	public String geValueFromToken(String token, String key) {
		return (String) getClaims(token).get(key);
	}
	
//	public String getIdFromClaims(Claims claims) {
//		
//		return (String) claims.get("id");
//	}
}
