package shop.winetoy.server.member.entity;

import java.util.Date;

public class MemberInfoDto {
	private int pid;
	private String id;
	private String name;
	private String nickName;
	private String email;
	private String address;
	private String phone;
	private Date regiDate;
	private String role;

	public MemberInfoDto(MemberDto memberDto) {
		this.pid = memberDto.getPid();
		this.id = memberDto.getId();
		this.name = memberDto.getName();
		this.nickName = memberDto.getNickName();
		this.email = memberDto.getEmail();
		this.address = memberDto.getAddress();
		this.phone = memberDto.getPhone();
		this.regiDate = memberDto.getRegiDate();
		this.role = memberDto.getRole();
	}

	public MemberInfoDto() { }
	
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

	@Override
	public String toString() {
		return "MemberInfoDto [pid=" + pid + ", id=" + id + ", name=" + name + ", nickName=" + nickName + ", email="
				+ email + ", address=" + address + ", phone=" + phone + ", regiDate=" + regiDate + ", role=" + role
				+ "]";
	}
	
}
