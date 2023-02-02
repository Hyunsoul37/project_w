package shop.winetoy.server.tools;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import shop.winetoy.server.auth.MemberDetails;
import shop.winetoy.server.auth.MemberDetailsService;

public class JwtFilter extends OncePerRequestFilter{
	
	private final String HEADER_STRING = "Authorization";
	
	JwtManager jwtManager;
	
	 @Autowired
    private MemberDetailsService memberDetailsService;
	
	@Autowired
	public JwtFilter(JwtManager jwtManager, MemberDetailsService memberDetailsService) {
		this.jwtManager = jwtManager;
		this.memberDetailsService = memberDetailsService;
	}
	

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		HttpServletRequest res = (HttpServletRequest) request;

		String authorizationHeader = res.getHeader(HEADER_STRING);
		Claims claims = jwtManager.parseJwtToken(authorizationHeader, request);

		if (claims != null) {
			String id = (String) claims.get("id");

			MemberDetails memberDetails = (MemberDetails) memberDetailsService.loadUserByUsername(id);

			UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(memberDetails,
					null, memberDetails.getAuthorities());

			authentication.setDetails(memberDetails); // new WebAuthenticationDetailsSource().buildDetails(request)

			SecurityContextHolder.getContext().setAuthentication(authentication);
		}

		filterChain.doFilter(request, response);
	}
	
}
