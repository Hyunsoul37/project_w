package shop.winetoy.server.comment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import shop.winetoy.server.comment.entity.CommentDto;
import shop.winetoy.server.comment.entity.CommentListDto;
import shop.winetoy.server.comment.service.CommentService;
import shop.winetoy.server.response.entity.Response;
import shop.winetoy.server.response.service.ResponseService;

@Controller
@RequestMapping("/api/comment")
public class CommentController {

	CommentService commentService;
	ResponseService responsService;
	
	@Autowired
	public CommentController(CommentService commentService, ResponseService responsService) {
		this.commentService = commentService;
		this.responsService = responsService;
	}
	
	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public Response<Integer> postComment(@RequestBody CommentDto comment){
		System.out.println(comment.toString());
		int result = commentService.registerComment(comment);
		return responsService.getResponse(result);
	}
	
	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public Response<List<CommentListDto>> getCommentList(int reviewId){
		List<CommentListDto> result = commentService.getCommentList(reviewId);
		return responsService.getResponse(result);
	}
}
