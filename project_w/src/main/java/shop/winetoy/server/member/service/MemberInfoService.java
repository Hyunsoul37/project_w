package shop.winetoy.server.member.service;

import java.util.List;

import shop.winetoy.server.member.entity.MemberInfoDto;

public interface MemberInfoService {
	int join(MemberInfoDto memberInfo);
	List<MemberInfoDto> memberList();
}
