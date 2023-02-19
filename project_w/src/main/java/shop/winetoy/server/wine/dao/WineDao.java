package shop.winetoy.server.wine.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import shop.winetoy.server.wine.entity.WineDto;
import shop.winetoy.server.wine.entity.WineInfoDto;

@Mapper
public interface WineDao {

	int registerWine(WineDto wine);

	WineDto getWineDetail(int pid);

	List<WineInfoDto> searchWine(int type, int listCount, int offset);
}
