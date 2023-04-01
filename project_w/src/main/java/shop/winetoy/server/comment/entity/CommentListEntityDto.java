package shop.winetoy.server.comment.entity;

import java.util.List;

public class CommentListEntityDto extends CommentDto {
	String writerNick;
	String writerProfile;
	String tagWriterNick;
	String tagWriterProfile;
	boolean like;
	List<CommentListEntityDto> child;

	public String getWriterNick() {
		return writerNick;
	}

	public void setWriterNick(String writerNick) {
		this.writerNick = writerNick;
	}

	public String getWriterProfile() {
		return writerProfile;
	}

	public void setWriterProfile(String writerProfile) {
		this.writerProfile = writerProfile;
	}

	public String getTagWriterNick() {
		return tagWriterNick;
	}

	public void setTagWriterNick(String tagWriterNick) {
		this.tagWriterNick = tagWriterNick;
	}

	public String getTagWriterProfile() {
		return tagWriterProfile;
	}

	public void setTagWriterProfile(String tagWriterProfile) {
		this.tagWriterProfile = tagWriterProfile;
	}
	
	public boolean isLike() {
		return like;
	}

	public void setLike(int like) {
		if(like != 0)
			this.like = true;
		else
			this.like = false;
	}

	public List<CommentListEntityDto> getChild() {
		return child;
	}

	public void setChild(List<CommentListEntityDto> child) {
		this.child = child;
	}

	@Override
	public String toString() {
		super.toString();
		return super.toString() + "CommentListEntityDto [writerNick=" + writerNick + ", writerProfile=" + writerProfile
				+ ", tagWriterNick=" + tagWriterNick + ", tagWriterProfile=" + tagWriterProfile + "]";
	}

}
