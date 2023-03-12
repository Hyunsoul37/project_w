package shop.winetoy.server.review.entity;

public class ReviewTagDto {
	private int reviewId;
	private int tagId;

	public int getReviewId() {
		return reviewId;
	}

	public void setReviewId(int reviewId) {
		this.reviewId = reviewId;
	}

	public int getTagId() {
		return tagId;
	}

	public void setTagId(int tagId) {
		this.tagId = tagId;
	}

	@Override
	public String toString() {
		return "ReviewTagDto [reviewId=" + reviewId + ", tagId=" + tagId + "]";
	}
}
