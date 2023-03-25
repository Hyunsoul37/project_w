package shop.winetoy.server.comment.entity;

public class CommentListEntityDto extends CommentDto {
	String writerNick;
	String writerProfile;
	String tagWriterNick;
	String tagWriterProfile;

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

	@Override
	public String toString() {
		super.toString();
		return super.toString() + "CommentListEntityDto [writerNick=" + writerNick + ", writerProfile=" + writerProfile
				+ ", tagWriterNick=" + tagWriterNick + ", tagWriterProfile=" + tagWriterProfile + "]";
	}

}
