package shop.winetoy.server.member.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.winetoy.server.member.dao.MemberInfoDao;
import shop.winetoy.server.member.entity.MemberInfoDto;

@Service
public class MemberInfoServiceImp implements MemberInfoService{

	@Autowired
	MemberInfoDao memberInfoDao;
	
	/**
	 * 회원 가입
	 */
	@Override
	public int join(MemberInfoDto memberInfo) {
		int result = memberInfoDao.join(memberInfo);
		return result;
	}

	/**
	 * 회원 리스트 조회
	 */
	@Override
	public List<MemberInfoDto> memberList() {
		List<MemberInfoDto> result = memberInfoDao.memberList();
		return result;
	}

}
