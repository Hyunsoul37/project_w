package shop.winetoy.server.comment.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import shop.winetoy.server.comment.dao.CommentDao;
import shop.winetoy.server.comment.entity.CommentDto;
import shop.winetoy.server.comment.entity.CommentLikeDto;
import shop.winetoy.server.comment.entity.CommentListEntityDto;

@Service
public class CommentServiceImp implements CommentService{
	
	@Autowired
	CommentDao commentDao;

	@Override
	public int registerComment(CommentDto comment) {
		
		if (comment.getParentId() > 0) {
			if (comment.getTagWriterId() > 0) {				
				comment.setDepth(1);
			}
			else {
				return 0;
			}
		}
		
		return commentDao.registerComment(comment);
	}

	@Override
	public List<CommentListEntityDto> getCommentList(int reviewId, int pid) {
		List<CommentListEntityDto> result = commentDao.getCommentList(reviewId, pid);
		List<CommentListEntityDto> list = new ArrayList<>();

		for(CommentListEntityDto comment : result) {
			if(comment.getParentId() == 0 || comment.getDepth() == 0) {
				CommentListEntityDto cld = new CommentListEntityDto();
				cld = (comment);
				list.add(cld);
			}
			else {
				for(CommentListEntityDto cld : list) {
					if(cld.getCommentId() == comment.getParentId()) {
						cld.addChild(comment);
					}
				}
			}
		}
		
		return list;
	}

	@Override
	@Transactional
	public CommentLikeDto setCommentLike(CommentLikeDto info) {
		CommentLikeDto result = commentDao.findCommentLike(info);
		
		System.out.println(info.toString());
		
		if(result == null) {
			commentDao.insertCommentLike(info);
			int pid = info.getPid();
			result = commentDao.findCommentLikeWithPid(pid);
			result.setAction("like");
		}
		else {
			commentDao.deleteCommentLike(info);
			result.setAction("unlike");
		}
		
		return result;
	}

}
