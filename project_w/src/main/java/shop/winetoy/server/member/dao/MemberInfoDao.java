package shop.winetoy.server.member.dao;

import org.apache.ibatis.annotations.Mapper;

import shop.winetoy.server.member.entity.MemberInfoVO;

@Mapper
public interface MemberInfoDao {
	int join(MemberInfoVO memberInfo);
}
