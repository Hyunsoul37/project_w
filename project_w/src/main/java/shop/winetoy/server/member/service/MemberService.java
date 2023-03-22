package shop.winetoy.server.member.service;

import shop.winetoy.server.member.entity.MemberDto;
import shop.winetoy.server.member.entity.MemberInfoDto;

public interface MemberService {
	MemberInfoDto join(MemberDto memberInfo);

	MemberDto memberCheck(String id);

	int deleteMemberInfoTable();
	
	int updateRefreshToken(int pid, String refreshToken);
	
	MemberDto getRefreshToken(int pid);
	
	MemberDto nickNameCheck(String nickName);
	
	MemberInfoDto getMemberInfo(int pid);
}
