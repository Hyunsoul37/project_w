package shop.winetoy.server.comment.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import shop.winetoy.server.comment.entity.CommentDto;
import shop.winetoy.server.comment.entity.CommentLikeDto;
import shop.winetoy.server.comment.entity.CommentListEntityDto;

@Mapper
public interface CommentDao {
	int registerComment(CommentDto comment);
	List<CommentListEntityDto> getCommentList(int reviewId, int pid);
	CommentLikeDto findCommentLikeWithPid(int pid);
	CommentLikeDto findCommentLike(CommentLikeDto info);
	int insertCommentLike(CommentLikeDto info);
	int deleteCommentLike(CommentLikeDto info);
	int modifyComment(CommentDto comment);
	int deleteComment(CommentDto comment);
}
