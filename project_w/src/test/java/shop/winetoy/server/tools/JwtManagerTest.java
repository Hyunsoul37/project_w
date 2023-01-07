package shop.winetoy.server.tools;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import shop.winetoy.server.member.entity.MemberInfoDto;

@DisplayName("JwtManger 테스트")
public class JwtManagerTest {
	private JwtManager jwtManager;
	@BeforeEach
	  void setUp() {
	    jwtManager = new JwtManager();
	  }

	  @Test
	  @DisplayName("토큰 생성 및 복호화 테스트")
	  void testToken() {
	    // given
		  System.out.println("test1");  
		  
	    MemberInfoDto member = new MemberInfoDto();
	    member.setName("홍길동");
	    member.setPassword("aaa123");
	    member.setId("tester12");
	    member.setPhone("010-0010-0001");
	    
	    System.out.println(jwtManager);
	    // when
	    // 1) 토큰 생성
	    final String token = jwtManager.generateJwtToken(member);
	    
	    System.out.println(token);
	    
	    // 2) 토큰으로부터 username 가져오기
	    String nameFromToken = jwtManager.getNameFromToken(token);

	    // then
	    assertEquals("홍길동", nameFromToken);
	  }
}
