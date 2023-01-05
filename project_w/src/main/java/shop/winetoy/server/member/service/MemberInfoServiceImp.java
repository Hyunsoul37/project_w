package shop.winetoy.server.member.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.winetoy.server.member.dao.MemberInfoDao;
import shop.winetoy.server.member.entity.MemberInfoVO;

@Service
public class MemberInfoServiceImp implements MemberInfoService{

	@Autowired
	MemberInfoDao memberInfoDao;
	
	@Override
	public int join(MemberInfoVO memberInfo) {
		int result = memberInfoDao.join(memberInfo);
		return result;
	}

}
