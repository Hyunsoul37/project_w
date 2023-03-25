package shop.winetoy.server.comment.entity;

import java.util.ArrayList;
import java.util.List;

public class CommentListDto {
	CommentListEntityDto parent;
	List<CommentListEntityDto> child;

	public CommentListEntityDto getParent() {
		return parent;
	}

	public void setParent(CommentListEntityDto parent) {
		this.parent = parent;
	}

	public List<CommentListEntityDto> getChild() {
		return child;
	}

	public void setChild(List<CommentListEntityDto> child) {
		this.child = child;
	}

	public void addChild(CommentListEntityDto comment) {
		if (child == null) {
			child = new ArrayList<>();
		}
		child.add(comment);
	}

	@Override
	public String toString() {
		return "CommentListDto [parent=" + parent + ", child=" + child + "]";
	}

}
