package shop.winetoy.server.comment.service;

import java.util.List;

import shop.winetoy.server.comment.entity.CommentDto;
import shop.winetoy.server.comment.entity.CommentLikeDto;
import shop.winetoy.server.comment.entity.CommentListEntityDto;

public interface CommentService {
	int registerComment(CommentDto comment);
	List<CommentListEntityDto> getCommentList(int reviewId, int pid);
	CommentLikeDto setCommentLike(CommentLikeDto info);
	int modifyComment(CommentDto comment);
}
