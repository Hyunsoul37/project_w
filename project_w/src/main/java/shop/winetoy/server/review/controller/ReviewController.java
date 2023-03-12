package shop.winetoy.server.review.controller;

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
@RequestMapping("/api/review")
public class ReviewController {
	ReviewService boardService;	
	ResponseService responseService;
	
	@Autowired
	public ReviewController(ReviewService boardService, ResponseService responseService) {
		this.boardService = boardService;
		this.responseService = responseService;
	}

	@RequestMapping(value="/review", method = RequestMethod.POST)
	@ResponseBody
	public Response<Integer> postReview(@RequestBody ReviewDto review){
		int result = boardService.postReivew(review);
		return responseService.getResponse(result);
 	}
}
