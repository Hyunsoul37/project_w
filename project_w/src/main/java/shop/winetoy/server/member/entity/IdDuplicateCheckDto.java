package shop.winetoy.server.member.entity;

public class IdDuplicateCheckDto {
	public boolean duplicate;

	public boolean isDuplicate() {
		return duplicate;
	}

	public void setDuplicate(boolean duplicate) {
		this.duplicate = duplicate;
	}

	@Override
	public String toString() {
		return "IdDuplicateCheckDto [duplicate=" + duplicate + "]";
	}
}
