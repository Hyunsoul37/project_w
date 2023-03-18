package shop.winetoy.server.admin.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import shop.winetoy.server.admin.service.AdminService;
import shop.winetoy.server.response.entity.Response;
import shop.winetoy.server.response.service.ResponseService;
import shop.winetoy.server.s3.service.S3UpladerService;
import shop.winetoy.server.wine.entity.WineDto;
import shop.winetoy.server.wine.service.WineService;

@RequestMapping("/api/admin")
@Controller
public class AdminApiController {
	
	AdminService adminService;
	S3UpladerService s3UpladerService;
	ResponseService responseService;

	@Value("${custom.access-key}")
	private String secretAccessKey;
	final String s3Bucket = "winetoy";

	@Autowired
	public AdminApiController(AdminService adminService, S3UpladerService s3UpladerService, ResponseService responseService) {
		this.adminService = adminService;
		this.s3UpladerService = s3UpladerService;
		this.responseService = responseService;
	}

	/**
	 * 서버 시간 조회
	 */
	@RequestMapping(value = "/time", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, String> time() {
		LocalDateTime now = LocalDateTime.now();
		String format = now.format(DateTimeFormatter.ofPattern("yyyy년 MM월 dd일 HH시 mm분 ss초"));

		HashMap<String, String> map = new HashMap<String, String>();
		map.put("time", format);

		return map;
	}

	/**
	 * POST 테스트
	 */
	@RequestMapping(value = "/test", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, String> postData(@RequestBody Map<String, String> data) {
		return data;
	}

	/**
	 * GET 테스트
	 */
	@RequestMapping(value = "/test", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, String> getData() {
		Map<String, String> data = new HashMap<String, String>();
		data.put("data", "RequestMethod.GET");

		return data;
	}
	
	/**
	 * wine 등록
	 * https://www.notion.so/Wine-ccd0b836a3194afb9028f5dc2f330f11?pvs=4
	 */
	@RequestMapping(value = "/wine", method = RequestMethod.POST)
	@ResponseBody
	public Response<WineDto> registerWine(
			@RequestPart(value = "file", required = false) MultipartFile file,
			@RequestPart WineDto wineInfo) {

		System.out.println("Admin Wine Register");
		String folder = "registeredWineImg";

		try {
			String imgUrl = s3UpladerService.upload(file, "test/" + folder);
			wineInfo.setImageUrl(imgUrl);
			return responseService.getResponse(adminService.registerWine(wineInfo));

		} catch (Exception e) {
			e.printStackTrace();
			return responseService.getResponse(null);
		}
	}
	
	@RequestMapping(value = "/wine", method = RequestMethod.DELETE)
	@ResponseBody
	public Response<Boolean> deleteWine(int pid){
		return responseService.getResponse(adminService.deleteWine(pid));
	}
}
