package shop.winetoy.server.member.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import shop.winetoy.server.member.entity.MemberDto;
import shop.winetoy.server.member.entity.RefreshDto;

@Mapper
public interface MemberDao {
	// 회원 가입
	int join(MemberDto memberInfo);

	// 회원 리스트 가져오기
	List<MemberDto> memberList();

	// 회원 확인
	MemberDto memberCheck(String id);

	int deleteMemberInfoTable();
	
	int updateRefreshToken(Long pid, String refreshToken);
	
	MemberDto getRefreshToken(Long pid);
}
