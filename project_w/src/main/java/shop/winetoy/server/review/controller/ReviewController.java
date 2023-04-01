package shop.winetoy.server.review.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;

import shop.winetoy.server.response.entity.Response;
import shop.winetoy.server.response.service.ResponseService;
import shop.winetoy.server.review.entity.BestReviewDto;
import shop.winetoy.server.review.entity.ReviewDto;
import shop.winetoy.server.review.service.ReviewService;
import shop.winetoy.server.s3.service.S3UpladerService;

@Controller
@RequestMapping("/api/community")
public class ReviewController {
	ReviewService reviewService;
	ResponseService responseService;
	S3UpladerService s3UpladerService;
	final String s3Bucket = "winetoy";
	
	@Autowired
	public ReviewController(ReviewService reviewService, ResponseService responseService, S3UpladerService s3UpladerService) {
		this.reviewService = reviewService;
		this.responseService = responseService;
		this.s3UpladerService = s3UpladerService;
	}

	/**
	 * 리뷰 작성
	 * https://www.notion.so/Review-2be3699be7f44f9bb53a17d386673b1a?pvs=4
	 */
	@RequestMapping(value = "/review", method = RequestMethod.POST)
	@ResponseBody
	public Response<ReviewDto> postReview(
			@RequestParam(value = "files", required = false) List<MultipartFile> files,
			@RequestPart ReviewDto review) throws Exception{
		
//		ObjectMapper mapper = new ObjectMapper();
//		ReviewDto convertReview = mapper.readValue(review, ReviewDto.class);
        		
		ReviewDto result = reviewService.postReivew(files, review);
		return responseService.getResponse(result);
	}

	/**
	 * 리뷰 리스트 조회
	 * https://www.notion.so/Review-List-82a44d3cda8a43bd9ab8a5acfb479311?pvs=4
	 */
	@RequestMapping(value = "/review", method = RequestMethod.GET)
	@ResponseBody
	public Response<List<ReviewDto>> getReview(int page) {
		List<ReviewDto> result = reviewService.getReview(page);

		return responseService.getResponse(result);
	}

	/**
	 * 리뷰 삭제
	 * https://www.notion.so/Review-e4d6917495e145cbb1a8d486c2cb3194?pvs=4
	 */
	@RequestMapping(value = "/review", method = RequestMethod.DELETE)
	@ResponseBody
	public Response<Boolean> deletetReview(int reviewId) {
		boolean result = reviewService.deleteReview(reviewId);
		return responseService.getResponse(result);
	}

	/**
	 * 리뷰 수정
	 * https://www.notion.so/Review-db5cc8c605b84fdcba1e8f8db9d2c1eb?pvs=4
	 */
	@RequestMapping(value = "/review", method = RequestMethod.PUT)
	@ResponseBody
	public Response<ReviewDto> modifyReview(
			@RequestParam(value = "files", required = false) List<MultipartFile> files,
			@RequestPart ReviewDto review,
			@RequestParam(required = false) List<String> deleteUrl) throws Exception{
		
//		ObjectMapper mapper = new ObjectMapper();
//		ReviewDto convertReview = mapper.readValue(review, ReviewDto.class);
		
		if(deleteUrl != null) {
			System.out.println(deleteUrl.toString());
		}
				
		ReviewDto result = reviewService.modifyReview(files, review, deleteUrl);
		return responseService.getResponse(result);
	}

	/**
	 * 리뷰 디테일 조회
	 * https://www.notion.so/Review-detail-022a3263216e4c4e9facce35e9649914?pvs=4
	 */
	@RequestMapping(value = "/review/detail", method = RequestMethod.GET)
	@ResponseBody
	public Response<ReviewDto> getReviewDetail(int reviewId) {
		ReviewDto result = reviewService.getReviewDetail(reviewId);
		return responseService.getResponse(result);
	}
	
	/**
	 * 베스트 리뷰 조회
	 * https://www.notion.so/Best-Review-List-5b422a6c244a4984b806c8ebdce8d823?pvs=4
	 */
	@RequestMapping(value = "/best-review", method = RequestMethod.GET)
	@ResponseBody
	public Response<List<BestReviewDto>> getBestReview(){
		List<BestReviewDto> result = reviewService.getBestReview();
		return responseService.getResponse(result);
	}

	/**
	 * 리뷰 마지막 페이지 번호 조회 
	 * https://www.notion.so/Review-List-9cdbfc4cebba4116b10e44f7ebd765af?pvs=4
	 */
	@RequestMapping(value = "/review/last-page", method = RequestMethod.GET)
	@ResponseBody
	public Response<Integer> getReviewCount(){
		int result = reviewService.getReviewCount();
		return responseService.getResponse(result);
	}
}
