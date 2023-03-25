package shop.winetoy.server.comment.entity;

import java.util.Date;

public class CommentDto {
	private int commentId;
	private int reviewId;
	private String comment;
	private int writerId;
	private int parentId;
	private int depth;
	private int tagWriterId;
	private Date regiDate;
	private Date modifyDate;
	private Date deleteDate;

	public int getCommentId() {
		return commentId;
	}

	public void setCommentId(int commentId) {
		this.commentId = commentId;
	}

	public int getReviewId() {
		return reviewId;
	}

	public void setReviewId(int reviewId) {
		this.reviewId = reviewId;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public int getWriterId() {
		return writerId;
	}

	public void setWriterId(int writerId) {
		this.writerId = writerId;
	}

	public int getParentId() {
		return parentId;
	}

	public void setParentId(int parentId) {
		this.parentId = parentId;
	}

	public int getDepth() {
		return depth;
	}

	public void setDepth(int depth) {
		this.depth = depth;
	}

	public int getTagWriterId() {
		return tagWriterId;
	}

	public void setTagWriterId(int tagWriterId) {
		this.tagWriterId = tagWriterId;
	}

	public Date getRegiDate() {
		return regiDate;
	}

	public void setRegiDate(Date regiDate) {
		this.regiDate = regiDate;
	}

	public Date getModifyDate() {
		return modifyDate;
	}

	public void setModifyDate(Date modifyDate) {
		this.modifyDate = modifyDate;
	}

	public Date getDeleteDate() {
		return deleteDate;
	}

	public void setDeleteDate(Date deleteDate) {
		this.deleteDate = deleteDate;
	}

	@Override
	public String toString() {
		return "CommentDto [commentId=" + commentId + ", reviewId=" + reviewId + ", comment=" + comment + ", writerId="
				+ writerId + ", parentId=" + parentId + ", depth=" + depth + ", tagWriterId=" + tagWriterId
				+ ", regiDate=" + regiDate + ", modifyDate=" + modifyDate + ", deleteDate=" + deleteDate + "]";
	}

}
