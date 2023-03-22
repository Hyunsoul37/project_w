package shop.winetoy.server.wine.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.bind.annotation.RequestParam;

import shop.winetoy.server.wine.entity.WineDto;
import shop.winetoy.server.wine.entity.WineInfoDto;
import shop.winetoy.server.wine.entity.WineRankInfoDto;

@Mapper
public interface WineDao {

	int registerWine(WineDto wine);
	int deleteWine(int pid);
	
	WineDto getWineDetail(int pid);

	List<WineInfoDto> searchWine(
			List<Integer> typeList, 
			List<Integer> bodyList, 
			List<Integer> sweetList,
			List<Integer> acidityList, 
			List<Integer> tanninList, 
			List<String> countryList, 
			Integer maxPrice,
			Integer minPrice, 
			int page, 
			int listCount, 
			int offset);

	List<WineInfoDto> searchWineWithPid(
			int pid,
			List<Integer> typeList, 
			List<Integer> bodyList, 
			List<Integer> sweetList,
			List<Integer> acidityList, 
			List<Integer> tanninList, 
			List<String> countryList, 
			Integer maxPrice,
			Integer minPrice, 
			int page, 
			int listCount, 
			int offset);

	int getWineCount(
			List<Integer> typeList, 
			List<Integer> bodyList, 
			List<Integer> sweetList,
			List<Integer> acidityList, 
			List<Integer> tanninList, 
			List<String> countryList, 
			Integer maxPrice,
			Integer minPrice);

	List<WineInfoDto> searchTest(
			int pid, 
			List<Integer> typeList, 
			List<Integer> bodyList, 
			List<Integer> sweetList,
			List<Integer> acidityList, 
			List<Integer> tanninList, 
			List<String> countryList, 
			Integer maxPrice,
			Integer minPrice, 
			int page, 
			int listCount, 
			int offset);
	
	List<WineRankInfoDto> getCategoryRanking(int wineType);
}
