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

import shop.winetoy.server.auth.MemberDetailsService;

@Configuration
<<<<<<< HEAD
@EnableWebSecurity(debug = true)
=======
@EnableWebSecurity//(debug = true)
>>>>>>> 09c844791dacbd0dcda7bd3305c7fc0f1ff6906c
public class SecurityConfig {

	JwtManager jwtManager;

	MemberDetailsService memberDetailsService;
	
	@Autowired
	public SecurityConfig(JwtManager jwtManager, MemberDetailsService memberDetailsService) {
		this.jwtManager = jwtManager;
		this.memberDetailsService = memberDetailsService;
	}

	@Bean
	public WebSecurityCustomizer webSecurityCustomizer() {
		return (web) -> web.ignoring().requestMatchers("/api/auth/**", "/api/join");
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
            .logout().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            
			.and()
            .formLogin().disable()  // jwt를 사용하므로 생략
            .httpBasic().disable()
			.authorizeHttpRequests()
			.requestMatchers("/api/auth/**").permitAll()
			.requestMatchers("/api/join").permitAll()
			.requestMatchers("/api/product/**").permitAll()
<<<<<<< HEAD
			.requestMatchers("/api/admin/**").hasRole("ADMIN")
=======
			.requestMatchers("/api/time").hasRole("ADMIN")
>>>>>>> 09c844791dacbd0dcda7bd3305c7fc0f1ff6906c
			.anyRequest().authenticated()

			.and()
			.exceptionHandling()
			.authenticationEntryPoint(new CustomAuthenticationEntryPoint())
            
            .and()
			.addFilterBefore(new JwtFilter(jwtManager, memberDetailsService), UsernamePasswordAuthenticationFilter.class);
		
		return http.build();
	}

}
