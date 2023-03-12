package shop.winetoy.server.review.dao;

import org.apache.ibatis.annotations.Mapper;

import shop.winetoy.server.review.entity.HashTagDto;
import shop.winetoy.server.review.entity.ReviewDto;
import shop.winetoy.server.review.entity.ReviewTagDto;

@Mapper
public interface ReviewDao {
	public int postReview(ReviewDto review);
	public int insertReviewTag(ReviewTagDto reviewTag);
	public HashTagDto searchTag(String tagName);
	public int insertTag(HashTagDto tagName);
}