package shop.winetoy.server.wine.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.winetoy.server.s3.service.S3UpladerService;
import shop.winetoy.server.wine.dao.WineDao;
import shop.winetoy.server.wine.entity.WineDto;
import shop.winetoy.server.wine.entity.WineInfoDto;

@Service
public class WineServiceImp implements WineService {

	@Autowired
	WineDao wineDao;
	S3UpladerService s3Uploader;
	
	@Override
	public int registerWine(WineDto registerWine) {
		return wineDao.registerWine(registerWine);
	}

	@Override
	public WineDto getWineDetail(int pid) {
		return wineDao.getWineDetail(pid);
	}

	@Override
	public List<WineInfoDto> searchWine(int type, int page) {
		int listCount = 20;
		int offset = (page - 1) * listCount; 
		List<WineInfoDto> result = wineDao.searchWine(type, listCount, offset);
		return result;
	}

}