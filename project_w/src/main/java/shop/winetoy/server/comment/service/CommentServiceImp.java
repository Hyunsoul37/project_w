package shop.winetoy.server.comment.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.winetoy.server.comment.dao.CommentDao;
import shop.winetoy.server.comment.entity.CommentDto;
import shop.winetoy.server.comment.entity.CommentListDto;
import shop.winetoy.server.comment.entity.CommentListEntityDto;

@Service
public class CommentServiceImp implements CommentService{
	
	@Autowired
	CommentDao commentDao;

	@Override
	public int registerComment(CommentDto comment) {
		
		return commentDao.registerComment(comment);
	}

	@Override
	public List<CommentListDto> getCommentList(int reviewId) {
		List<CommentListEntityDto> result = commentDao.getCommentList(reviewId);
		List<CommentListDto> list = new ArrayList<>();

		for(CommentListEntityDto comment : result) {
			if(comment.getParentId() == 0 || comment.getDepth() == 0) {
				CommentListDto cld = new CommentListDto();
				cld.setParent(comment);
				list.add(cld);
			}
			else {
				for(CommentListDto cld : list) {
					if(cld.getParent().getCommentId() == comment.getParentId()) {
						cld.addChild(comment);
					}
				}
			}
		}
		
		return list;
	}

}
