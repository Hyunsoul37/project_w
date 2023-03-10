package shop.winetoy.server.review.entity;

import java.util.Date;
import java.util.List;

public class ReviewDto {
	private int reviewId;
	private String wineType;
	private String wineName;
	private int winePrice;
	private Date regiDate;
	private int reviewLike;
	private String reviewImg1;
	private String reviewImg2;
	private String reviewImg3;
	private String reviewImg4;
	private String reviewImg5;
	private String desc;
	private int writerId;
	private List<String> hashTag;

	public int getReviewId() {
		return reviewId;
	}

	public void setReviewId(int reviewId) {
		this.reviewId = reviewId;
	}

	public String getWineType() {
		return wineType;
	}

	public void setWineType(String wineType) {
		this.wineType = wineType;
	}

	public String getWineName() {
		return wineName;
	}

	public void setWineName(String wineName) {
		this.wineName = wineName;
	}

	public int getWinePrice() {
		return winePrice;
	}

	public void setWinePrice(int winePrice) {
		this.winePrice = winePrice;
	}

	public Date getRegiDate() {
		return regiDate;
	}

	public void setRegiDate(Date regiDate) {
		this.regiDate = regiDate;
	}

	public int getReviewLike() {
		return reviewLike;
	}

	public void setReviewLike(int reviewLike) {
		this.reviewLike = reviewLike;
	}

	public String getReviewImg1() {
		return reviewImg1;
	}

	public void setReviewImg1(String reviewImg1) {
		this.reviewImg1 = reviewImg1;
	}

	public String getReviewImg2() {
		return reviewImg2;
	}

	public void setReviewImg2(String reviewImg2) {
		this.reviewImg2 = reviewImg2;
	}

	public String getReviewImg3() {
		return reviewImg3;
	}

	public void setReviewImg3(String reviewImg3) {
		this.reviewImg3 = reviewImg3;
	}

	public String getReviewImg4() {
		return reviewImg4;
	}

	public void setReviewImg4(String reviewImg4) {
		this.reviewImg4 = reviewImg4;
	}

	public String getReviewImg5() {
		return reviewImg5;
	}

	public void setReviewImg5(String reviewImg5) {
		this.reviewImg5 = reviewImg5;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public int getWriterId() {
		return writerId;
	}

	public void setWriterId(int writerId) {
		this.writerId = writerId;
	}

	public List<String> getHashTag() {
		return hashTag;
	}

	public void setHashTag(List<String> hashTag) {
		this.hashTag = hashTag;
	}

	@Override
	public String toString() {
		return "ReviewDto [reviewId=" + reviewId + ", wineType=" + wineType + ", wineName=" + wineName + ", winePrice="
				+ winePrice + ", regiDate=" + regiDate + ", reviewLike=" + reviewLike + ", reviewImg1=" + reviewImg1
				+ ", reviewImg2=" + reviewImg2 + ", reviewImg3=" + reviewImg3 + ", reviewImg4=" + reviewImg4
				+ ", reviewImg5=" + reviewImg5 + ", desc=" + desc + ", writerId=" + writerId + ", hashTag=" + hashTag
				+ "]";
	}
	
}
