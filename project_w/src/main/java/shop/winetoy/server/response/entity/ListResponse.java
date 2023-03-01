package shop.winetoy.server.response.entity;

import java.util.List;

public class ListResponse<T> extends CommonResponse {
	List<T> data;

	public List<T> getData() {
		return data;
	}

	public void setData(List<T> data) {
		this.data = data;
	}

}
