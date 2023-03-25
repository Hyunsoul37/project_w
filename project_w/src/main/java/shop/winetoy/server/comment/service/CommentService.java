package shop.winetoy.server.comment.service;

import java.util.List;

import shop.winetoy.server.comment.entity.CommentDto;
import shop.winetoy.server.comment.entity.CommentListDto;

public interface CommentService {
	int registerComment(CommentDto comment);
	List<CommentListDto> getCommentList(int reviewId);
}
