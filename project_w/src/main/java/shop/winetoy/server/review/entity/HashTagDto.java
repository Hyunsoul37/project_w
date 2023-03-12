package shop.winetoy.server.review.entity;

public class HashTagDto {
	private int tagId;
	private String tagName;

	public int getTagId() {
		return tagId;
	}

	public void setTagId(int tagId) {
		this.tagId = tagId;
	}

	public String getTagName() {
		return tagName;
	}

	public void setTagName(String tagName) {
		this.tagName = tagName;
	}

	@Override
	public String toString() {
		return "HashTagDto [tagId=" + tagId + ", tagName=" + tagName + "]";
	}
}
