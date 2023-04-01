package shop.winetoy.server.review.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import shop.winetoy.server.review.entity.BestReviewDto;
import shop.winetoy.server.review.entity.HashTagDto;
import shop.winetoy.server.review.entity.ReviewDto;
import shop.winetoy.server.review.entity.ReviewTagDto;

@Mapper
public interface ReviewDao {
	public int postReview(ReviewDto review);

	public int insertReviewTag(ReviewTagDto reviewTag);

	public HashTagDto searchTag(String tagName);

	public int insertTag(HashTagDto tagName);

	public ReviewDto getReviewDetail(int reviewId);

	public List<HashTagDto> getReviewHashTags(int reviewId);

	public List<ReviewDto> getReview(int page, int listCount, int offset);

	public int deleteReview(int reviewId);

	public int modifyReview(ReviewDto review);

	public int initHashTag(int reviewId);
	
	public int initImageUrl(int reviewId);

	public List<BestReviewDto> getBestReview();
	
	public int getReviewCount();
}