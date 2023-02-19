package shop.winetoy.server.wine.entity;

public class WineInfoDto {
	int pid;
	String imageUrl;
	String korName;
	String engName;
	String desc;
	int type;
	String country;
	String grapeVariety;
	int price;
	boolean like;

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getKorName() {
		return korName;
	}

	public void setKorName(String korName) {
		this.korName = korName;
	}

	public String getEngName() {
		return engName;
	}

	public void setEngName(String engName) {
		this.engName = engName;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getGrapeVariety() {
		return grapeVariety;
	}

	public void setGrapeVariety(String grapeVariety) {
		this.grapeVariety = grapeVariety;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public boolean isLike() {
		return like;
	}

	public void setLike(boolean like) {
		this.like = like;
	}

	@Override
	public String toString() {
		return "WineInfoDto [pid=" + pid + ", imageUrl=" + imageUrl + ", korName=" + korName + ", engName=" + engName
				+ ", desc=" + desc + ", type=" + type + ", country=" + country + ", grapeVariety=" + grapeVariety
				+ ", price=" + price + ", like=" + like + "]";
	}

}
