package shop.winetoy.server.wine.service;

import java.util.List;

import shop.winetoy.server.wine.entity.WineDto;
import shop.winetoy.server.wine.entity.WineInfoDto;

public interface WineService {
	int registerWine(WineDto registerWine);
<<<<<<< HEAD

	WineDto getWineDetail(int pid);

	List<WineInfoDto> searchWine(Integer type, Integer body, Integer sweet, Integer acidity, Integer tannin,
			Integer price, String country, int page);

	List<WineInfoDto> searchWineWithPid(int pid, Integer type, Integer body, Integer sweet, Integer acidity,
			Integer tannin, Integer price, String country, int page);

	int getWineCount(Integer type, Integer body, Integer sweet, Integer acidity, Integer tannin, Integer price,
			String country);
=======
	WineDto getWineDetail(int pid);
	List<WineInfoDto> searchWine(Integer type, Integer body, Integer sweet, Integer acidity, Integer tannin, Integer price, String country, int page);
	List<WineInfoDto> searchWineWithPid(int pid, Integer type, Integer body, Integer sweet, Integer acidity, Integer tannin, Integer price, String country, int page);
>>>>>>> 09c844791dacbd0dcda7bd3305c7fc0f1ff6906c
}
