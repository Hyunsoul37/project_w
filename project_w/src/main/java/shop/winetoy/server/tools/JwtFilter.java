package shop.winetoy.server.tools;

import java.io.IOException;

import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.SignatureException;
import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;

@Component
public class JwtFilter implements Filter{
	
	JwtManager jwtManager;
	
	private final String HEADER_STRING = "Authorization";
	
	@Autowired
	public JwtFilter(JwtManager jwtManager) {
		this.jwtManager = jwtManager;
	}
	
	@Override
	@Order(1)
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
		HttpServletRequest res = (HttpServletRequest)request;
		
		String header = res.getHeader(HEADER_STRING);
		String userName = null;
		
		if(!Strings.isEmpty(header)) {
			String[] parts = header.split(" ");
			
			if(parts.length == 2 && jwtManager.matcher(parts[0])) {
				System.out.println(parts[1]);
				
				try {
					userName = jwtManager.getNameFromToken(parts[1]);
				} catch (IllegalArgumentException e){
					System.out.println("유효하지 않은 토큰");
					throw new JwtException("유효하지 않은 토큰");
				} catch (ExpiredJwtException e) {
					System.out.println("유효기간 만료");
					throw new JwtException("유효기간 만료");
				} catch (SignatureException e) {
					System.out.println("사용자 인증 실패");
					throw new JwtException("사용자 인증 실패");
				}
			}
		}
		
		chain.doFilter(request, response);
	}
}
