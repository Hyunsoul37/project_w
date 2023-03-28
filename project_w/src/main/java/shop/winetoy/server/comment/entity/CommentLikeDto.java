package shop.winetoy.server.comment.entity;

import java.util.Date;

public class CommentLikeDto {
	int pid;
	int commentId;
	int memberPid;
	Date likeDate;
	String action;

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public int getCommentId() {
		return commentId;
	}

	public void setCommentId(int commentId) {
		this.commentId = commentId;
	}

	public int getMemberPid() {
		return memberPid;
	}

	public void setMemberPid(int memberPid) {
		this.memberPid = memberPid;
	}

	public Date getLikeDate() {
		return likeDate;
	}

	public void setLikeDate(Date likeDate) {
		this.likeDate = likeDate;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	@Override
	public String toString() {
		return "CommentLikeDto [pid=" + pid + ", commentId=" + commentId + ", memberPid=" + memberPid + ", likeDate="
				+ likeDate + ", action=" + action + "]";
	}

}
