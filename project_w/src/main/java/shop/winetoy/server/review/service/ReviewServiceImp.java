package shop.winetoy.server.review.service;

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
	public int postReivew(ReviewDto review) {
		ReviewTagDto reviewTag = new ReviewTagDto();
		
		reviewDao.postReview(review);
		int postReviewId = review.getReviewId();
		
		System.out.println("postReviewId : " + postReviewId);
		
		reviewTag.setReviewId(postReviewId);
		
		for(int i = 0; i < review.getHashTag().size(); i++) {
			// hashTag 검색
			String tag = review.getHashTag().get(i);
			System.out.println("tag : " + tag);
			
			HashTagDto hash = reviewDao.searchTag(tag);
			System.out.println("hash : " + hash);
			
			
			if(hash != null) {
				// hashTag가 있을 경우
				System.out.println("hash.getTagId() : " + hash.getTagId());
				reviewTag.setTagId(hash.getTagId());
				reviewDao.insertReviewTag(reviewTag);
			}
			else {
				// hashTag가 없을 경우 hashTag 등록
				System.out.println("insertTag : " + tag);
				HashTagDto hashDto = new HashTagDto();
				hashDto.setTagName(tag);
				reviewDao.insertTag(hashDto);
				int tag_id = hashDto.getTagId();
				reviewTag.setTagId(tag_id);
				reviewDao.insertReviewTag(reviewTag);
			}
		}
		
		return 0;
	}

}
