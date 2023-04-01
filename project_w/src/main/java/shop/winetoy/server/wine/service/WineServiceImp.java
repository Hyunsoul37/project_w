package shop.winetoy.server.wine.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import shop.winetoy.server.wine.dao.WineDao;
import shop.winetoy.server.wine.entity.WineBookmarkDto;
import shop.winetoy.server.wine.entity.WineBookmarkResultDto;
import shop.winetoy.server.wine.entity.WineDto;
import shop.winetoy.server.wine.entity.WineInfoDto;
import shop.winetoy.server.wine.entity.WineRankDto;

@Service
public class WineServiceImp implements WineService {

	@Autowired
	WineDao wineDao;

	@Override
	public WineDto getWineDetail(int pid) {
		return wineDao.getWineDetail(pid);
	}

	@Override
	public List<WineInfoDto> searchWine(
			List<Integer> typeList, 
			List<Integer> bodyList, 
			List<Integer> sweetList,
			List<Integer> acidityList, 
			List<Integer> tanninList, 
			List<String> countryList, 
			List<String> snackList,
			Integer maxPrice,
			Integer minPrice, 
			int page) {

		int listCount = 20;
		int offset = (page - 1) * listCount;

		List<WineInfoDto> result = wineDao.searchWine(typeList, bodyList, sweetList, acidityList, tanninList,
				countryList, snackList, maxPrice, minPrice, page, listCount, offset);
		return result;
	}

	@Override
	public List<WineInfoDto> searchWineWithPid(
			int pid, 
			List<Integer> typeList, 
			List<Integer> bodyList,
			List<Integer> sweetList, 
			List<Integer> acidityList,
			List<Integer> tanninList, 
			List<String> countryList,
			List<String> snackList,
			Integer maxPrice, 
			Integer minPrice, 
			int page) {
		
		int listCount = 20;
		int offset = (page - 1) * listCount;

		List<WineInfoDto> result = wineDao.searchWineWithPid(pid, typeList, bodyList, sweetList, acidityList,
				tanninList, countryList, snackList,  maxPrice, minPrice, page, listCount, offset);

		return result;
	}

	@Override
	public int getWineCount(
			List<Integer> typeList, 
			List<Integer> bodyList, 
			List<Integer> sweetList,
			List<Integer> acidityList,
			List<Integer> tanninList, 
			List<String> countryList, 
			List<String> snackList,
			Integer maxPrice,
			Integer minPrice) {

		return wineDao.getWineCount(typeList, bodyList, sweetList, acidityList, tanninList, countryList, snackList, maxPrice, minPrice);
	}

	@Override
	@Transactional
	public WineRankDto getCategoryRanking() {
		WineRankDto result = new WineRankDto();
		
		result.setRed(wineDao.getCategoryRanking(1));
		result.setWhite(wineDao.getCategoryRanking(2));
		result.setSparkling(wineDao.getCategoryRanking(4));
		result.setPort(wineDao.getCategoryRanking(5));
		
		return result;
	}

	@Override
	@Transactional
	public WineBookmarkResultDto setWineBookmark(WineBookmarkDto wineBookmark) {
		
		WineBookmarkDto check = wineDao.findWineBookmark(wineBookmark);
		WineBookmarkResultDto result = new WineBookmarkResultDto();
		
		// 이전에 좋아요 하지 않은 와인
		if(check == null) {
			wineDao.insertWineLike(wineBookmark);
			result.setAction("registered");
			return result;
		}
		else {
			wineDao.deleteWineLike(wineBookmark);
			result.setAction("delete");
			return result;
		}
	}

}
