package shop.winetoy.server.review.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import shop.winetoy.server.review.entity.BestReviewDto;
import shop.winetoy.server.review.entity.ReviewDto;

public interface ReviewService {
	public ReviewDto postReivew(List<MultipartFile> files, ReviewDto review);
	public ReviewDto getReviewDetail(int reviewId);
	public List<ReviewDto> getReview(int page);
	public boolean deleteReview(int reviewId);
	public ReviewDto modifyReview(List<MultipartFile> files,ReviewDto review, List<String> deleteUrl);
	public List<BestReviewDto> getBestReview();
	public int getReviewCount();
}
