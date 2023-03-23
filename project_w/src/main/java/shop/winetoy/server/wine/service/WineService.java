package shop.winetoy.server.wine.service;

import java.util.List;

import shop.winetoy.server.wine.entity.WineBookmarkDto;
import shop.winetoy.server.wine.entity.WineBookmarkResultDto;
import shop.winetoy.server.wine.entity.WineDto;
import shop.winetoy.server.wine.entity.WineInfoDto;
import shop.winetoy.server.wine.entity.WineRankDto;

public interface WineService {

	WineDto getWineDetail(int pid);

	List<WineInfoDto> searchWine(List<Integer> typeList, List<Integer> bodyList, List<Integer> sweetList,
			List<Integer> acidityList, List<Integer> tanninList, List<String> countryList, Integer maxPrice,
			Integer minPrice, int page);

	List<WineInfoDto> searchWineWithPid(int pid, List<Integer> typeList, List<Integer> bodyList,
			List<Integer> sweetList, List<Integer> acidityList, List<Integer> tanninList, List<String> countryList,
			Integer maxPrice, Integer minPrice, int page);

	int getWineCount(List<Integer> typeList, List<Integer> bodyList, List<Integer> sweetList, List<Integer> acidityList,
			List<Integer> tanninList, List<String> countryList, Integer maxPrice, Integer minPrice);

	WineRankDto getCategoryRanking();
	
	WineBookmarkResultDto setWineBookmark(WineBookmarkDto wineBookmark);
}
