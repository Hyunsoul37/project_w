package shop.winetoy.server.admin.service;

import shop.winetoy.server.wine.entity.WineDto;

public interface AdminService {
	WineDto registerWine(WineDto registerWine);
	boolean deleteWine(int pid);
}
