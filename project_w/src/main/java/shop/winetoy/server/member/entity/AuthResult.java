package shop.winetoy.server.member.entity;

public class AuthResult {
	private String message;
	private String token;
	private String refreshToken;
	private MemberInfoDto memberInfo;

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

	public MemberInfoDto getMemberInfo() {
		return memberInfo;
	}

	public void setMemberInfo(MemberInfoDto memberInfo) {
		this.memberInfo = memberInfo;
	}

	public String getRefreshToken() {
		return refreshToken;
	}

	public void setRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}

	@Override
	public String toString() {
		return "AuthResult [message=" + message + ", token=" + token + ", refreshToken=" + refreshToken + ", memberInfo="
				+ memberInfo + "]";
	}

}
