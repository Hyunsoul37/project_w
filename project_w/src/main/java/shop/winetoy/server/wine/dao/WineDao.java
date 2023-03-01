package shop.winetoy.server.wine.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import shop.winetoy.server.wine.entity.WineDto;
import shop.winetoy.server.wine.entity.WineInfoDto;

@Mapper
public interface WineDao {

	int registerWine(WineDto wine);

	WineDto getWineDetail(int pid);

	List<WineInfoDto> searchWine(Integer type, Integer body, Integer sweet, Integer acidity, Integer tannin,
			Integer price, String country, int page, int listCount, int offset);
<<<<<<< HEAD

	List<WineInfoDto> searchWineWithPid(int pid, Integer type, Integer body, Integer sweet, Integer acidity,
			Integer tannin, Integer price, String country, int page, int listCount, int offset);

	int getWineCount(Integer type, Integer body, Integer sweet, Integer acidity, Integer tannin, Integer price,
			String country);
=======
	
	List<WineInfoDto> searchWineWithPid(int pid, Integer type, Integer body, Integer sweet, Integer acidity, Integer tannin,
			Integer price, String country, int page, int listCount, int offset);

	int getWineCount(int type);
>>>>>>> 09c844791dacbd0dcda7bd3305c7fc0f1ff6906c
}
