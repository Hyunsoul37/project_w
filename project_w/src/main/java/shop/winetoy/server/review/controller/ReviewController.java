package shop.winetoy.server.review.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import shop.winetoy.server.response.entity.Response;
import shop.winetoy.server.response.service.ResponseService;
import shop.winetoy.server.review.entity.ReviewDto;
import shop.winetoy.server.review.service.ReviewService;

@Controller
@RequestMapping("/api/community")
public class ReviewController {
	ReviewService reviewService;	
	ResponseService responseService;
	
	@Autowired
	public ReviewController(ReviewService reviewService, ResponseService responseService) {
		this.reviewService = reviewService;
		this.responseService = responseService;
	}

	@RequestMapping(value="/review", method = RequestMethod.POST)
	@ResponseBody
	public Response<ReviewDto> postReview(@RequestBody ReviewDto review){
		ReviewDto result = reviewService.postReivew(review);
		return responseService.getResponse(result);
 	}
	
	@RequestMapping(value="/review", method = RequestMethod.GET)
	@ResponseBody
	public Response<List<ReviewDto>> getReview(){
		List<ReviewDto> result = reviewService.getReview();
		
		return responseService.getResponse(result);
	}
	
	@RequestMapping(value="/review", method = RequestMethod.DELETE)
	@ResponseBody
	public Response<Boolean> deletetReview(int reviewId){
		boolean result = reviewService.deleteReview(reviewId);
		return responseService.getResponse(result);
	}
	
	@RequestMapping(value="/review", method = RequestMethod.PUT)
	@ResponseBody
	public Response<ReviewDto> modifyReview(@RequestBody ReviewDto review){
		ReviewDto result = reviewService.modifyReview(review);
		return responseService.getResponse(result);
	}
	
	@RequestMapping(value="/review/detail", method = RequestMethod.GET)
	@ResponseBody
	public Response<ReviewDto> getReviewDetail(int reviewId){
		ReviewDto result = reviewService.getReviewDetail(reviewId);
		return responseService.getResponse(result);
 	}
	
}
