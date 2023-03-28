package shop.winetoy.server.review.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import shop.winetoy.server.review.dao.ReviewDao;
import shop.winetoy.server.review.entity.BestReviewDto;
import shop.winetoy.server.review.entity.HashTagDto;
import shop.winetoy.server.review.entity.ReviewDto;
import shop.winetoy.server.review.entity.ReviewTagDto;
import shop.winetoy.server.s3.service.S3UpladerService;

@Service
public class ReviewServiceImp implements ReviewService {

	@Autowired
	ReviewDao reviewDao;
	@Autowired
	S3UpladerService s3UpladerService;
	
	final int reviewListCount = 12;

	@Override
	@Transactional
	public ReviewDto postReivew(List<MultipartFile> files, ReviewDto review) {
		ReviewTagDto reviewTag = new ReviewTagDto();
		String[] imgUrl = new String[5];

		for (int i = 0; i < files.size(); i++) {
			try {
				imgUrl[i] = s3UpladerService.upload(files.get(i), "review");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		review.setReviewImgs(imgUrl);

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
		
		if(result == null)
			return null;
		
		result = setHashTag(result);

		return result;
	}

	@Override
	@Transactional
	public List<ReviewDto> getReview(int page) {
		int listCount = reviewListCount;
		int offset = (page - 1) * listCount;
		List<ReviewDto> result = reviewDao.getReview(page, listCount, offset);

		for (ReviewDto review : result) {
			review = setHashTag(review);
		}

		return result;
	}

	@Override
	@Transactional
	public boolean deleteReview(int reviewId) {

		ReviewDto deleteReview = getReviewDetail(reviewId);
		if(deleteReview == null)
			return false;
		
		String[] str = deleteReview.getReviewImgs();

		for (int i = 0; i < str.length; i++) {
			if (str[i] != null)
				s3UpladerService.delete(str[i]);
		}

		int result = reviewDao.deleteReview(reviewId);

		if (result != 0) {
			return true;
		}

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
	
	@Override
	public List<BestReviewDto> getBestReview() {
		return reviewDao.getBestReview();
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

	@Override
	public int getReviewCount() {
		int count = reviewDao.getReviewCount();
		int result = count / reviewListCount;
		
		if(count % reviewListCount != 0) {
			result += 1;
		}
		
		return result;
	}
}
