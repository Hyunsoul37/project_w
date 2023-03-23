package shop.winetoy.server.admin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import shop.winetoy.server.member.dao.MemberDao;
import shop.winetoy.server.member.entity.MemberDto;
import shop.winetoy.server.s3.service.S3UpladerService;
import shop.winetoy.server.wine.dao.WineDao;
import shop.winetoy.server.wine.entity.WineDto;

@Service
public class AdminServiceImp implements AdminService {
	
	WineDao wineDao;
	S3UpladerService s3UpladerService;
	MemberDao memberDao;

	@Autowired
	public AdminServiceImp(WineDao wineDao, S3UpladerService s3UpladerService, MemberDao memberDao) {
		this.wineDao = wineDao;
		this.s3UpladerService = s3UpladerService;
		this.memberDao = memberDao;
	}
	
	@Override
	public WineDto registerWine(WineDto registerWine) {
		wineDao.registerWine(registerWine);
		WineDto result = wineDao.getWineDetail(registerWine.getPid());

		return result;
	}

	@Override
	@Transactional
	public boolean deleteWine(int pid) {
		WineDto deleteWine =  wineDao.getWineDetail(pid);
		
		if(deleteWine == null)
			return false;
		
		String imgS3Path = deleteWine.getImageUrl();
		
		int isWineDel = wineDao.deleteWine(pid);

		if(isWineDel != 0) {
			return !removeS3Image(imgS3Path);
		} 
		
		return false;
	}

	public boolean removeS3Image(String imgS3Path) {
		return s3UpladerService.delete(imgS3Path);
	}
	
	@Override
	public List<MemberDto> memberList() {
		List<MemberDto> result = memberDao.memberList();
		return result;
	}
}
