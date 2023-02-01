package shop.winetoy.server.member.service;

import java.util.List;

import shop.winetoy.server.member.entity.MemberDto;
import shop.winetoy.server.member.entity.RefreshDto;

public interface MemberService {
	int join(MemberDto memberInfo);

	List<MemberDto> memberList();

	MemberDto memberCheck(String id);

	int deleteMemberInfoTable();
	
	int updateRefreshToken(Long pid, String refreshToken);
	
	MemberDto getRefreshToken(Long pid);
}
