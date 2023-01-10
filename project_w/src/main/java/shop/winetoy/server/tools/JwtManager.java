package shop.winetoy.server.tools;

import java.time.Duration;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import shop.winetoy.server.member.entity.MemberInfoDto;

@Component
public class JwtManager {
	// TODO 민감정보는 따로 분리하는 것이 좋다
	private final String securityKey = "helloworld";
	// 유효시간 1시간
//	private final Long expiredTime = 1000 * 60L * 60L * 1L;
	// 유효시간 3분
	private final Long expiredTime = Duration.ofMinutes(3).toMillis();
	private final String BEARER = "bearer";

	/**
	 * Member 정보를 담은 JWT 토큰을 생성한다.
	 *
	 * @param member Member 정보를 담은 객체
	 * @return String JWT 토큰
	 */
	public String generateJwtToken(MemberInfoDto member) {
		Date now = new Date();
		return Jwts.builder().setSubject(member.getName()) // 보통 username
				.setHeader(createHeader()).setClaims(createClaims(member)) // 클레임, 토큰에 포함될 정보
				.setExpiration(new Date(now.getTime() + expiredTime)) // 만료일
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
	private Map<String, Object> createClaims(MemberInfoDto member) {
		Map<String, Object> claims = new HashMap<>();
		claims.put("pid", member.getPid()); // member의 pid
		claims.put("name", member.getName()); // member의 name
		claims.put("email", member.getEmail()); // email
		claims.put("address", member.getAddress()); // address
		claims.put("phone", member.getPhone()); // address
		claims.put("regiDate", member.getRegiDate()); // 가입일
		return claims;
	}

	/**
	 * Token 에서 Claim 을 가져온다.
	 *
	 * @param token JWT 토큰
	 * @return Claims 클레임
	 */
	private Claims getClaims(String token) {
		return Jwts.parser().setSigningKey(securityKey).parseClaimsJws(token).getBody();
	}

	/**
	 * 토큰으로 부터 name 을 가져온다.
	 *
	 * @param token JWT 토큰
	 * @return String Member 의 name
	 */
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

	public boolean matcher(String match) {
		return match.equals(BEARER);
	}

	public boolean isTokenExpired(String token) throws ExpiredJwtException {
		Date expiration = new Date();
		try {
			expiration = getClaims(token).getExpiration();
		} catch (ExpiredJwtException e) {
			e.printStackTrace();
		}

		return expiration.before(new Date());
	}
	
	
}
