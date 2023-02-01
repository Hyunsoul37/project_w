package shop.winetoy.server.member.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.winetoy.server.member.dao.MemberDao;
import shop.winetoy.server.member.entity.MemberDto;
import shop.winetoy.server.member.entity.RefreshDto;

@Service
public class MemberServiceImp implements MemberService{

	@Autowired
	MemberDao memberDao;
	
	/**
	 * 회원 가입
	 */
	@Override
	public int join(MemberDto memberInfo) {
		int result = memberDao.join(memberInfo);
		return result;
	}

	/**
	 * 회원 리스트 조회
	 */
	@Override
	public List<MemberDto> memberList() {
		List<MemberDto> result = memberDao.memberList();
		return result;
	}

	/**
	 * 로그인시 id로 정보 가져오기
	 */
	@Override
	public MemberDto memberCheck(String id) {
		MemberDto result = memberDao.memberCheck(id);
		return result;
	}

	@Override
	public int deleteMemberInfoTable() {
		int result = memberDao.deleteMemberInfoTable();
		return result;
	}

	@Override
	public int updateRefreshToken(Long pid, String refreshToken) {
		int result = memberDao.updateRefreshToken(pid, refreshToken);
		return result;
	}

	@Override
	public MemberDto getRefreshToken(Long pid) {
		MemberDto result = memberDao.getRefreshToken(pid);
		return result;
	}

}
