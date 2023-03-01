package shop.winetoy.server.response.entity;

public class SingleResponse<T> extends CommonResponse {
	T data;

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

}
