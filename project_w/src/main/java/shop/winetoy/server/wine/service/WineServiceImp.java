package shop.winetoy.server.wine.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
	@Transactional
	public WineDto registerWine(WineDto registerWine) {
		wineDao.registerWine(registerWine);
		WineDto result = wineDao.getWineDetail(registerWine.getPid());

		return result;
	}

	@Override
	public WineDto getWineDetail(int pid) {
		return wineDao.getWineDetail(pid);
	}

	@Override
	public List<WineInfoDto> searchWine(List<Integer> typeList, List<Integer> bodyList, List<Integer> sweetList,
			List<Integer> acidityList, List<Integer> tanninList, List<String> countryList, Integer maxPrice,
			Integer minPrice, int page) {

		int listCount = 20;
		int offset = (page - 1) * listCount;

		List<WineInfoDto> result = wineDao.searchWine(typeList, bodyList, sweetList, acidityList, tanninList,
				countryList, maxPrice, minPrice, page, listCount, offset);
		return result;
	}

	@Override
	public List<WineInfoDto> searchWineWithPid(int pid, List<Integer> typeList, List<Integer> bodyList,
			List<Integer> sweetList, List<Integer> acidityList, List<Integer> tanninList, List<String> countryList,
			Integer maxPrice, Integer minPrice, int page) {
		int listCount = 20;
		int offset = (page - 1) * listCount;

		List<WineInfoDto> result = wineDao.searchWineWithPid(pid, typeList, bodyList, sweetList, acidityList,
				tanninList, countryList, maxPrice, minPrice, page, listCount, offset);

		return result;
	}

	@Override
	public int getWineCount(Integer type, Integer body, Integer sweet, Integer acidity, Integer tannin, Integer price,
			String country) {

		return wineDao.getWineCount(type, body, sweet, acidity, tannin, price, country);
	}

	@Override
	public List<WineInfoDto> searchTest(int pid, List<Integer> typeList, List<Integer> bodyList,
			List<Integer> sweetList, List<Integer> acidityList, List<Integer> tanninList, List<String> countryList,
			Integer maxPrice, Integer minPrice, int page) {

		int listCount = 20;
		int offset = (page - 1) * listCount;

		return wineDao.searchTest(pid, typeList, bodyList, sweetList, acidityList, tanninList, countryList, maxPrice,
				minPrice, page, listCount, offset);
	}
}
