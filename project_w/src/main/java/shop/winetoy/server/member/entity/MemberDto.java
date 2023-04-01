package shop.winetoy.server.member.entity;

import java.util.Date;

public class MemberDto {
	private int pid;
	private String id;
	private String password;
	private String name;
	private String nickName;
	private String email;
	private String address;
	private String phone;
	private Date regiDate;
	private String role;
	private String refreshToken;
	private String profileImg;

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNickName() {
		return nickName;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Date getRegiDate() {
		return regiDate;
	}

	public void setRegiDate(Date regiDate) {
		this.regiDate = regiDate;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getRefreshToken() {
		return refreshToken;
	}

	public void setRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}
	
	public String getProfileImg() {
		return profileImg;
	}

	public void setProfileImg(String profileImg) {
		this.profileImg = profileImg;
	}

	@Override
	public String toString() {
		return "MemberDto [pid=" + pid + ", id=" + id + ", password=" + password + ", name=" + name + ", nickName="
				+ nickName + ", email=" + email + ", address=" + address + ", phone=" + phone + ", regiDate=" + regiDate
				+ ", role=" + role + ", refreshToken=" + refreshToken + ", profileImg=" + profileImg + "]";
	}

}
