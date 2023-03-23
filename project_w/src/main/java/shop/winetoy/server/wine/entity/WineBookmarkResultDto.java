package shop.winetoy.server.wine.entity;

public class WineBookmarkResultDto{
	private String action;

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	@Override
	public String toString() {
		return "WineBookmarkResultDto [action=" + action + "]";
	}
	
}
