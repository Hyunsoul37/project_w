package shop.winetoy.server.tools;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtFilter extends OncePerRequestFilter{
	
	private final String HEADER_STRING = "Authorization";
	
	JwtManager jwtManager;
	
	@Autowired
	public JwtFilter(JwtManager jwtManager) {
		this.jwtManager = jwtManager;
	}
	

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpServletRequest res = (HttpServletRequest)request;
		
		String authorizationHeader = res.getHeader(HEADER_STRING);
		Claims claims = jwtManager.parseJwtToken(authorizationHeader);
		
		filterChain.doFilter(request, response);
	}
	
}
