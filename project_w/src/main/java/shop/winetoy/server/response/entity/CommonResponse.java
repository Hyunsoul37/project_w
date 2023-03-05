package shop.winetoy.server.response.entity;

import java.time.LocalDateTime;

public class CommonResponse {
	private int code;
	private String message;
	private LocalDateTime time;

	public LocalDateTime getTime() {
		return time;
	}

	public void setTime(LocalDateTime time) {
		this.time = time;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
