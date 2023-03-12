package shop.winetoy.server.review.service;

import java.util.List;

import shop.winetoy.server.review.entity.ReviewDto;

public interface ReviewService {
	public ReviewDto postReivew(ReviewDto review);
	public ReviewDto getReviewDetail(int reviewId);
	public List<ReviewDto> getReview();
	public boolean deleteReview(int reviewId);
	public ReviewDto modifyReview(ReviewDto review);
}
