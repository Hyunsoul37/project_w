package shop.winetoy.server.wine.entity;

import java.util.Date;

public class WineBookmarkDto {
	private int bookmarkId;
	private int memberPid;
	private int winePid;
	private Date bookmarkDate;

	public int getBookmarkId() {
		return bookmarkId;
	}

	public void setBookmarkId(int bookmarkId) {
		this.bookmarkId = bookmarkId;
	}

	public int getMemberPid() {
		return memberPid;
	}

	public void setMemberPid(int memberPid) {
		this.memberPid = memberPid;
	}

	public int getWinePid() {
		return winePid;
	}

	public void setWinePid(int winePid) {
		this.winePid = winePid;
	}

	public Date getBookmarkDate() {
		return bookmarkDate;
	}

	public void setBookmarkDate(Date bookmarkDate) {
		this.bookmarkDate = bookmarkDate;
	}

	@Override
	public String toString() {
		return "WineBookmarkDto [bookmarkId=" + bookmarkId + ", memberPid=" + memberPid + ", winePid=" + winePid
				+ ", bookmarkDate=" + bookmarkDate + "]";
	}

}
