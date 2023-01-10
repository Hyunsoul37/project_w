package shop.winetoy.server.member.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import shop.winetoy.server.member.entity.MemberInfoDto;

@Mapper
public interface MemberInfoDao {
	// 회원 가입
	int join(MemberInfoDto memberInfo);
	// 회원 리스트 가져오기
	List<MemberInfoDto> memberList();
	// 회원 확인
	MemberInfoDto memberCheck(String id);
	
	int deleteMemberInfoTable();
}
