package shop.winetoy.server.review.entity;

import java.util.Date;

public class BestReviewDto {
	private int reviewId;
	private String reviewTitle;
	private String desc;
	private int writerId;
	private Date regiDate;
	private float starPoint;
	private String reviewImg1;

	public int getReviewId() {
		return reviewId;
	}

	public void setReviewId(int reviewId) {
		this.reviewId = reviewId;
	}

	public String getReviewTitle() {
		return reviewTitle;
	}

	public void setReviewTitle(String reviewTitle) {
		this.reviewTitle = reviewTitle;
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

	public Date getRegiDate() {
		return regiDate;
	}

	public void setRegiDate(Date regiDate) {
		this.regiDate = regiDate;
	}

	public float getStarPoint() {
		return starPoint;
	}

	public void setStarPoint(float starPoint) {
		this.starPoint = starPoint;
	}

	public String getReviewImg1() {
		return reviewImg1;
	}

	public void setReviewImg1(String reviewImg1) {
		this.reviewImg1 = reviewImg1;
	}

	@Override
	public String toString() {
		return "BestReviewDto [reviewId=" + reviewId + ", reviewTitle=" + reviewTitle + ", desc=" + desc + ", writerId="
				+ writerId + ", regiDate=" + regiDate + ", starPoint=" + starPoint + ", reviewImg1=" + reviewImg1 + "]";
	}
}
