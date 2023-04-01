package shop.winetoy.server.comment.entity;

import java.util.ArrayList;

public class CommentListDto {
	CommentListEntityDto parent;

	public CommentListEntityDto getParent() {
		return parent;
	}

	public void setParent(CommentListEntityDto parent) {
		this.parent = parent;
	}

//	public List<CommentListEntityDto> getChild() {
//		return parent.child;
//	}
//
//	public void setChild(List<CommentListEntityDto> child) {
//		this.parent.child = child;
//	}

	public void addChild(CommentListEntityDto comment) {
		if (parent.child == null) {
			parent.child = new ArrayList<>();
		}
		parent.child.add(comment);
	}

	@Override
	public String toString() {
		return "CommentListDto [parent=" + parent + "]";
	}


}
