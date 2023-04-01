package shop.winetoy.server.comment.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import shop.winetoy.server.comment.entity.CommentDto;
import shop.winetoy.server.comment.entity.CommentLikeDto;
import shop.winetoy.server.comment.entity.CommentListEntityDto;
import shop.winetoy.server.comment.service.CommentService;
import shop.winetoy.server.response.entity.Response;
import shop.winetoy.server.response.service.ResponseService;
import shop.winetoy.server.tools.JwtManager;

@Controller
@RequestMapping("/api/comment")
public class CommentController {

	CommentService commentService;
	ResponseService responsService;
	JwtManager jwtManager;
	
	@Autowired
	public CommentController(CommentService commentService, ResponseService responsService,JwtManager jwtManager) {
		this.commentService = commentService;
		this.responsService = responsService;
		this.jwtManager = jwtManager;
	}
	
	/**
	 * 댓글 등록
	 * https://www.notion.so/comment-4806f83a8786475bb9dc6b1ed0cb652b?pvs=4
	 */
	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public Response<Integer> postComment(
			@RequestHeader Map<String, String> headers,
			@RequestBody CommentDto comment){
		
		String authorization = headers.get("authorization");
    	int pid = jwtManager.extractPidFromAccessToken(authorization);
    	
    	// 로그인을 하지 않은 경우 
    	if(pid == 0)
    		return responsService.getResponse(0);
    	
    	comment.setWriterId(pid);
    	
    	System.out.println(comment.toString());
    	
		int result = commentService.registerComment(comment);
		return responsService.getResponse(result);
	}
	
	/**
	 * 댓글 조회
	 * https://www.notion.so/comment-b3aede047ad243428756ba23623b3ea6?pvs=4
	 */
	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public Response<List<CommentListEntityDto>> getCommentList(
			@RequestHeader Map<String, String> headers,
			int reviewId) {
    	
		String authorization = headers.get("authorization");
    	int pid = jwtManager.extractPidFromAccessToken(authorization);
    	
		List<CommentListEntityDto> result = commentService.getCommentList(reviewId, pid);
		return responsService.getResponse(result);
	}
	
	/**
	 * 댓글 좋아요
	 */
	@RequestMapping(value = "/like", method = RequestMethod.POST)
	@ResponseBody
	public Response<CommentLikeDto> setCommentLike(
			@RequestHeader Map<String, String> headers,
			@RequestBody CommentLikeDto info){
		
		String authorization = headers.get("authorization");
    	int pid = jwtManager.extractPidFromAccessToken(authorization);
    	
    	info.setMemberPid(pid);
    	
		CommentLikeDto result = new CommentLikeDto();
    	
    	try {
    		result = commentService.setCommentLike(info);    		
    	}
		catch(DataIntegrityViolationException e) {
			result.setAction("not found comment id");
		}
    	
    	return responsService.getResponse(result);
	}
	
	
}
