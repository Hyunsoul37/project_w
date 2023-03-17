package shop.winetoy.server.wine.service;

import java.util.List;

import shop.winetoy.server.wine.entity.WineDto;
import shop.winetoy.server.wine.entity.WineInfoDto;

public interface WineService {
	WineDto registerWine(WineDto registerWine);

	WineDto getWineDetail(int pid);

	List<WineInfoDto> searchWine(List<Integer> typeList, List<Integer> bodyList, List<Integer> sweetList,
			List<Integer> acidityList, List<Integer> tanninList, List<String> countryList, Integer maxPrice,
			Integer minPrice, int page);

	List<WineInfoDto> searchWineWithPid(int pid, List<Integer> typeList, List<Integer> bodyList,
			List<Integer> sweetList, List<Integer> acidityList, List<Integer> tanninList, List<String> countryList,
			Integer maxPrice, Integer minPrice, int page);

	int getWineCount(Integer type, Integer body, Integer sweet, Integer acidity, Integer tannin, Integer price,
			String country);

	List<WineInfoDto> searchTest(int pid, List<Integer> typeList, List<Integer> bodyList, List<Integer> sweetList,
			List<Integer> acidityList, List<Integer> tanninList, List<String> countryList, Integer maxPrice,
			Integer minPrice, int page);
}
