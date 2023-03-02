package shop.winetoy.server.response.service;

import java.util.List;

import org.springframework.stereotype.Service;

import shop.winetoy.server.response.entity.CommonResponse;
import shop.winetoy.server.response.entity.ListResponse;
import shop.winetoy.server.response.entity.SingleResponse;

@Service
public class ResponseService {
	public <T> SingleResponse<T> getSingleResponse(T data) {

		SingleResponse<T> singleResponse = new SingleResponse<>();

		singleResponse.setData(data);
		setSuccessResponse(singleResponse);

		return singleResponse;
	}

	public <T> ListResponse<T> getListResponse(List<T> data) {

		ListResponse<T> listResponse = new ListResponse<>();

		listResponse.setData(data);
		setSuccessResponse(listResponse);

		return listResponse;
	}

	private void setSuccessResponse(CommonResponse response) {
		response.setCode(200);
		response.setSucess(true);
		response.setMessage("Success");
	}
}
