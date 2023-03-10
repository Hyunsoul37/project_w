package shop.winetoy.server.review.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import shop.winetoy.server.review.dao.ReviewDao;
import shop.winetoy.server.review.entity.HashTagDto;
import shop.winetoy.server.review.entity.ReviewDto;
import shop.winetoy.server.review.entity.ReviewTagDto;

@Service
public class ReviewServiceImp implements ReviewService {

	@Autowired
	ReviewDao reviewDao;

	@Override
	@Transactional
	public ReviewDto postReivew(ReviewDto review) {
		ReviewTagDto reviewTag = new ReviewTagDto();

		reviewDao.postReview(review);
		int postReviewId = review.getReviewId();

		reviewTag.setReviewId(postReviewId);

		for (int i = 0; i < review.getHashTag().size(); i++) {
			// hashTag 검색
			String tag = review.getHashTag().get(i);

			HashTagDto hash = reviewDao.searchTag(tag);

			if (hash != null) {
				// hashTag가 있을 경우
				reviewTag.setTagId(hash.getTagId());
				reviewDao.insertReviewTag(reviewTag);
			} else {
				// hashTag가 없을 경우 hashTag 등록
				HashTagDto hashDto = new HashTagDto();
				hashDto.setTagName(tag);
				reviewDao.insertTag(hashDto);
				int tag_id = hashDto.getTagId();
				reviewTag.setTagId(tag_id);
				reviewDao.insertReviewTag(reviewTag);
			}
		}

		return getReviewDetail(review.getReviewId());
	}

	@Override
	@Transactional
	public ReviewDto getReviewDetail(int reviewId) {
		ReviewDto result = reviewDao.getReviewDetail(reviewId);
		result = setHashTag(result);

		return result;
	}

	@Override
	@Transactional
	public List<ReviewDto> getReview() {
		List<ReviewDto> result = reviewDao.getReview();

		for (ReviewDto review : result) {
			review = setHashTag(review);
		}

		return result;
	}

	@Override
	public boolean deleteReview(int reviewId) {
		int result = reviewDao.deleteReview(reviewId);
		
		if(result != 0)
			return true;
		
		return false;
	}
	
	@Override
	@Transactional
	public ReviewDto modifyReview(ReviewDto review) {
		ReviewTagDto reviewTag = new ReviewTagDto();
		System.out.println(review.toString());
		reviewDao.initHashTag(review.getReviewId());
		
		reviewDao.modifyReview(review);
		
		reviewTag.setReviewId(review.getReviewId());
		
		for (int i = 0; i < review.getHashTag().size(); i++) {
			// hashTag 검색
			String tag = review.getHashTag().get(i);
			
			HashTagDto hash = reviewDao.searchTag(tag);

			if (hash != null) {
				// hashTag가 있을 경우
				reviewTag.setTagId(hash.getTagId());
				reviewDao.insertReviewTag(reviewTag);
			} else {
				// hashTag가 없을 경우 hashTag 등록
				HashTagDto hashDto = new HashTagDto();
				hashDto.setTagName(tag);
				reviewDao.insertTag(hashDto);
				int tag_id = hashDto.getTagId();
				reviewTag.setTagId(tag_id);
				reviewDao.insertReviewTag(reviewTag);
			}
		}
		
		ReviewDto result = getReviewDetail(review.getReviewId());
		return result;
	}

	// =====================================================================//

	private ReviewDto setHashTag(ReviewDto review) {
		List<HashTagDto> hashResult = reviewDao.getReviewHashTags(review.getReviewId());
		List<String> hashTag = new ArrayList<>();

		for (HashTagDto hash : hashResult) {
			hashTag.add(hash.getTagName());
		}

		review.setHashTag(hashTag);
		return review;
	}
}
