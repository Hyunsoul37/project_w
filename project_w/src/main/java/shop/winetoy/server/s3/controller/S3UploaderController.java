package shop.winetoy.server.s3.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import shop.winetoy.server.s3.service.S3UpladerService;

@Controller
public class S3UploaderController {
	private final S3UpladerService s3UpladerService;

	@Autowired
	public S3UploaderController(S3UpladerService s3UpladerService) {
		this.s3UpladerService = s3UpladerService;
	}
	
	public String imageUpload(MultipartFile file)
			throws IOException {
		return s3UpladerService.upload(file, "image");
	}

	public String videoUpload(MultipartFile file)
			throws IOException {
		return s3UpladerService.upload(file, "video");
	}

//	@RequestMapping(value = "/api/product/image-upload", method = RequestMethod.POST)
//	@ResponseBody
//	public String imageUpload_test(@RequestParam(value = "file", required = false) MultipartFile file)
//			throws IOException {
//		return s3UpladerService.upload(file, "winetoy", "image");
//	}
//	
//	@RequestMapping(value = "/api/product/existCheck", method = RequestMethod.GET)
//	@ResponseBody
//	public boolean existCheck(String url) {
//		return s3UpladerService.isObjectExist("winetoy", url);
//	}
//
//	@RequestMapping(value = "/api/product/delete", method = RequestMethod.DELETE)
//	@ResponseBody
//	public boolean delete(String url) {
//		return s3UpladerService.delete("winetoy", url);
//	}
	
//	@RequestMapping(value = "/video-upload", method = RequestMethod.POST)
//	@ResponseBody
//	public String videoUpload(@RequestParam(value = "file", required = false) MultipartFile file)
//			throws IOException {
//		return s3UpladerService.upload(file, "winetoy", "video");
//	}


}
