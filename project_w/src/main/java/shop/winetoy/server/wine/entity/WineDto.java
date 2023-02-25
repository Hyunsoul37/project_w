package shop.winetoy.server.wine.entity;

public class WineDto {
	int pid;
	private int type;
	private String korName;
	private String engName;
	private float starPoint;
	private int price;
	private int acidity;
	private int sweet;
	private int body;
	private int tannin;
	private String alcohol;
	private String country;
	private String region;
	private String grapeVariety;
	private String recommendedSnack;
	private String desc;
	private String imageUrl;

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
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

	public String getEngName() {
		return engName;
	}

	public void setEngName(String engName) {
		this.engName = engName;
	}

	public float getStarPoint() {
		return starPoint;
	}

	public void setStarPoint(float starPoint) {
		this.starPoint = starPoint;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getAcidity() {
		return acidity;
	}

	public void setAcidity(int acidity) {
		this.acidity = acidity;
	}

	public int getSweet() {
		return sweet;
	}

	public void setSweet(int sweet) {
		this.sweet = sweet;
	}

	public int getBody() {
		return body;
	}

	public void setBody(int body) {
		this.body = body;
	}

	public int getTannin() {
		return tannin;
	}

	public void setTannin(int tannin) {
		this.tannin = tannin;
	}

	public String getAlcohol() {
		return alcohol;
	}

	public void setAlcohol(String alcohol) {
		this.alcohol = alcohol;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getGrapeVariety() {
		return grapeVariety;
	}

	public void setGrapeVariety(String grapeVariety) {
		this.grapeVariety = grapeVariety;
	}

	public String getRecommendedSnack() {
		return recommendedSnack;
	}

	public void setRecommendedSnack(String recommendedSnack) {
		this.recommendedSnack = recommendedSnack;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	@Override
	public String toString() {
		return "WineDto [pid=" + pid + ", type=" + type + ", korName=" + korName + ", engName=" + engName
				+ ", starPoint=" + starPoint + ", price=" + price + ", acidity=" + acidity + ", sweet=" + sweet
				+ ", body=" + body + ", tannin=" + tannin + ", alcohol=" + alcohol + ", country=" + country
				+ ", region=" + region + ", grapeVariety=" + grapeVariety + ", recommendedSnack=" + recommendedSnack
				+ ", desc=" + desc + ", imageUrl=" + imageUrl + "]";
	}

}
