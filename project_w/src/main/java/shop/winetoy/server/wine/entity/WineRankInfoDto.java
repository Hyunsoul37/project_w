package shop.winetoy.server.wine.entity;

public class WineRankInfoDto {
	private int pid;
	private int rank;
	private int type;
	private String korName;
	private int price;
	private String imageUrl;
	private int sweet;
	private int acidity;

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public int getRank() {
		return rank;
	}

	public void setRank(int rank) {
		this.rank = rank;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public String getKorName() {
		return korName;
	}

	public void setKorName(String korName) {
		this.korName = korName;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public int getSweet() {
		return sweet;
	}

	public void setSweet(int sweet) {
		this.sweet = sweet;
	}

	public int getAcidity() {
		return acidity;
	}

	public void setAcidity(int acidity) {
		this.acidity = acidity;
	}

	@Override
	public String toString() {
		return "WineRankingDto [pid=" + pid + ", rank=" + rank + ", type=" + type + ", korName=" + korName + ", price="
				+ price + ", imageUrl=" + imageUrl + ", sweet=" + sweet + ", acidity=" + acidity + "]";
	}

	
}
