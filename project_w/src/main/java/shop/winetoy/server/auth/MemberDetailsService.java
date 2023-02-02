package shop.winetoy.server.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import shop.winetoy.server.member.entity.MemberDto;
import shop.winetoy.server.member.service.MemberService;

@Service
public class MemberDetailsService implements UserDetailsService{

	@Autowired
	private MemberService memberService;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		MemberDto memberDto = memberService.memberCheck(username);
        if(memberDto != null){
            return new MemberDetails(memberDto);
        }
        return null;
	}

}
