package shop.winetoy.server.response.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import shop.winetoy.server.response.entity.CommonResponse;
import shop.winetoy.server.response.entity.ListResponse;
import shop.winetoy.server.response.entity.Response;

@Service
public class ResponseService {
	public <T> Response<T> getResponse(T data) {

		Response<T> singleResponse = new Response<>();

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
		response.setMessage("Success");
		response.setTime(LocalDateTime.now());
	}
}
