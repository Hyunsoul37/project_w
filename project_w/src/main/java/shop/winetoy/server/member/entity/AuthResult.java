package shop.winetoy.server.member.entity;

public class AuthResult {
	private String message;
	private String token;
	private MemberInfoDto data;
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public MemberInfoDto getData() {
		return data;
	}
	public void setData(MemberInfoDto data) {
		this.data = data;
	}
	
	@Override
	public String toString() {
		return "AuthResult [message=" + message + ", token=" + token + ", data=" + data + "]";
	}
}
