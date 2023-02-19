package shop.winetoy.server.wine.service;

import java.util.List;

import shop.winetoy.server.wine.entity.WineDto;
import shop.winetoy.server.wine.entity.WineInfoDto;

public interface WineService {
	int registerWine(WineDto registerWine);
	WineDto getWineDetail(int pid);
	List<WineInfoDto> searchWine(int type, int page);
}
