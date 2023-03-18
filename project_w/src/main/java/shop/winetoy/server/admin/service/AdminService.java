package shop.winetoy.server.admin.service;

import java.util.List;

import shop.winetoy.server.member.entity.MemberDto;
import shop.winetoy.server.wine.entity.WineDto;

public interface AdminService {
	
	List<MemberDto> memberList();
	
	WineDto registerWine(WineDto registerWine);
	boolean deleteWine(int pid);
}
