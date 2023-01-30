package shop.winetoy.server.member.service;

import java.util.List;

import shop.winetoy.server.member.entity.MemberDto;

public interface MemberService {
	int join(MemberDto memberInfo);

	List<MemberDto> memberList();

	MemberDto memberCheck(String id);

	int deleteMemberInfoTable();
}
