package shop.winetoy.server.wine.entity;

import java.util.List;

public class WineRankDto {
	List<WineRankInfoDto> red;
	List<WineRankInfoDto> white;
	List<WineRankInfoDto> sparkling;
	List<WineRankInfoDto> port;

	public List<WineRankInfoDto> getRed() {
		return red;
	}

	public void setRed(List<WineRankInfoDto> red) {
		this.red = red;
	}

	public List<WineRankInfoDto> getWhite() {
		return white;
	}

	public void setWhite(List<WineRankInfoDto> white) {
		this.white = white;
	}

	public List<WineRankInfoDto> getSparkling() {
		return sparkling;
	}

	public void setSparkling(List<WineRankInfoDto> sparkling) {
		this.sparkling = sparkling;
	}

	public List<WineRankInfoDto> getPort() {
		return port;
	}

	public void setPort(List<WineRankInfoDto> port) {
		this.port = port;
	}

	@Override
	public String toString() {
		return "WineRankDto [red=" + red + ", white=" + white + ", sparkling=" + sparkling + ", port=" + port + "]";
	}

}
