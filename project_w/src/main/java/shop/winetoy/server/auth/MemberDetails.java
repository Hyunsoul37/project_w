package shop.winetoy.server.auth;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import shop.winetoy.server.member.entity.MemberDto;

public class MemberDetails implements UserDetails {

	@Override
	public String toString() {
		return "MemberDetails [memberDto=" + memberDto + "]";
	}

	private MemberDto memberDto;
	
	@Autowired
	MemberDetails(MemberDto memberDto){
		this.memberDto = memberDto;	
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		Collection<GrantedAuthority> collect = new ArrayList<>();
		
		collect.add(new SimpleGrantedAuthority(memberDto.getRole()));
		
//        collect.add(new GrantedAuthority() {
//            @Override
//            public String getAuthority() {
//            	System.out.println("memberDto : " + memberDto);
//                return memberDto.getRole();
//            }
//        });
        return collect;
	}

	@Override
	public String getPassword() {
		return memberDto.getPassword();
	}

	@Override
	public String getUsername() {
		return memberDto.getName();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
