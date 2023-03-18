package shop.winetoy.server.member.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import shop.winetoy.server.member.dao.MemberDao;
import shop.winetoy.server.member.entity.MemberDto;
import shop.winetoy.server.member.entity.MemberInfoDto;

@Service
@Transactional
public class MemberServiceImp implements MemberService{

	@Autowired
	MemberDao memberDao;
	
	/**
	 * 회원 가입
	 */
	@Override
	public MemberInfoDto join(MemberDto memberInfo) {
		int result = memberDao.join(memberInfo);
		MemberInfoDto info = memberDao.getMemberInfo(memberInfo.getPid());
		return info;
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

	/**
	 * refresh token DB 저장
	 */
	@Override
	public int updateRefreshToken(int pid, String refreshToken) {
		int result = memberDao.updateRefreshToken(pid, refreshToken);
		return result;
	}

	/**
	 * DB에 저장된 refresh token pid로 가져오기
	 */
	@Override
	public MemberDto getRefreshToken(int pid) {
		MemberDto result = memberDao.getRefreshToken(pid);
		return result;
	}

	@Override
	public MemberDto nickNameCheck(String nickName) {
		MemberDto result = memberDao.nickNameCheck(nickName);
		return result;
	}

}
