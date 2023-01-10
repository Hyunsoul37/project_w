package shop.winetoy.server.tools;

import java.io.IOException;

import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;

@Component
public class JwtFilter implements Filter{
	
	JwtManager jwtManager;
	
	@Autowired
	public JwtFilter(JwtManager jwtManager) {
		this.jwtManager = jwtManager;
	}
	
	@Override
	@Order(1)
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
		HttpServletRequest res = (HttpServletRequest)request;
		
		String header = res.getHeader("Authorization");
		
		if(!Strings.isEmpty(header)) {
			String[] parts = header.split(" ");
			
			if(parts.length == 2 && jwtManager.matcher(parts[0])) {
				System.out.println(parts[1]);
				System.out.println(jwtManager.isTokenExpired(parts[1]));
			}
		}
		
		chain.doFilter(request, response);
	}

}
