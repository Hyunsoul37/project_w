package shop.winetoy.server.tools;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	JwtManager jwtManager;

	@Autowired
	public SecurityConfig(JwtManager jwtManager) {
		this.jwtManager = jwtManager;
	}

	@Bean
	public WebSecurityCustomizer webSecurityCustomizer() {
		return (web) -> web.ignoring().requestMatchers("/api/auth", "/api/time");
	}

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		System.out.println("filterChain");

		http
    		.csrf()
    		.disable()
			.sessionManagement()
			.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			
			.and()
            .formLogin().disable()  // jwt를 사용하므로 생략
            .httpBasic().disable()
			.authorizeHttpRequests()
			.requestMatchers("/api/auth").permitAll()
			.requestMatchers("/api/time").permitAll()
			.anyRequest().permitAll()

			.and()
			.exceptionHandling()
			.authenticationEntryPoint(new CustomAuthenticationEntryPoint())
            
			.and()
            .logout().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			
            .and()
			.addFilterBefore(new JwtFilter(jwtManager), UsernamePasswordAuthenticationFilter.class);

		return http.build();
	}

}
