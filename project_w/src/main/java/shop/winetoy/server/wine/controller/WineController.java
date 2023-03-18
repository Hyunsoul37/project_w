package shop.winetoy.server.wine.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import shop.winetoy.server.response.entity.Response;
import shop.winetoy.server.response.service.ResponseService;
import shop.winetoy.server.wine.entity.WineDto;
import shop.winetoy.server.wine.entity.WineInfoDto;
import shop.winetoy.server.wine.service.WineService;

@Controller
@RequestMapping("/api/product")
public class WineController {

	WineService wineService;
	ResponseService responseService;

	@Value("${custom.access-key}")
	private String secretAccessKey;
	final String s3Bucket = "winetoy";

	@Autowired
	public WineController(WineService wineService, ResponseService responseService) {
		this.wineService = wineService;
		this.responseService = responseService;
	}

	/**
	 * 와인 상세 정보 
	 * https://www.notion.so/c330e2c0ed6448a1a8e97d1046ecd962?pvs=4
	 */
	@RequestMapping(value = "/wine/detail", method = RequestMethod.GET)
	@ResponseBody
	public Response<WineDto> detailWineList(int pid) {
		WineDto result = wineService.getWineDetail(pid);
		return responseService.getResponse(result);
	}

	/**
	 * 와인 검색 
	 * https://www.notion.so/ba31a5c2fd264eceb644296897994eaa?pvs=4
	 */
	@RequestMapping(value = "/wine/{userId}/search", method = RequestMethod.GET)
	@ResponseBody
	public Response<List<WineInfoDto>> searchWine(
			@PathVariable Integer userId,
			@RequestParam(required = false) List<Integer> type, 
			@RequestParam(required = false) List<Integer> body,
			@RequestParam(required = false) List<Integer> sweet, 
			@RequestParam(required = false) List<Integer> acidity,
			@RequestParam(required = false) List<Integer> tannin, 
			@RequestParam(required = false) List<String> country,
			@RequestParam(required = false) Integer maxPrice, 
			@RequestParam(required = false) Integer minPrice,
			int page) {

		List<WineInfoDto> result = null;

		System.out.println(userId);

		if (userId != 0 || userId != null) {
			result = wineService.searchWineWithPid(userId, type, body, sweet, acidity, tannin, country, maxPrice,
					minPrice, page);
		} else {
			result = wineService.searchWine(type, body, sweet, acidity, tannin, country, maxPrice, minPrice, page);
		}

		return responseService.getResponse(result);
	}

	/**
	 * 와인 검색 갯수 
	 * https://www.notion.so/2def816aef7146bdbf7cb58ac213b5d4?pvs=4
	 */
	@RequestMapping(value = "/wine/count", method = RequestMethod.GET)
	@ResponseBody
	public Response<Integer> searchWine(
			@RequestParam(required = false) List<Integer> type,
			@RequestParam(required = false) List<Integer> body, 
			@RequestParam(required = false) List<Integer> sweet,
			@RequestParam(required = false) List<Integer> acidity, 
			@RequestParam(required = false) List<Integer> tannin,
			@RequestParam(required = false) List<String> country, 
			@RequestParam(required = false) Integer maxPrice,
			@RequestParam(required = false) Integer minPrice) {
		int count = wineService.getWineCount(type, body, sweet, acidity, tannin, country, maxPrice, minPrice);
		return responseService.getResponse(count);
	}

	// --------------------------------------------------------------------------------------------------------//

//	public void tmp() throws IOException {
//		WineDataUpload goCSV = new WineDataUpload("C:\\Users\\USER\\Desktop\\wine_add_sweet.csv");
//		String[] line = null;
//
//		int index = 0;
//
//		while ((line = goCSV.nextRead()) != null) {
//			WineDto wine = new WineDto();
//			int wineType = 0;
//
//			switch (line[4]) {
//			case "레드":
//				wineType = 1;
//				break;
//			case "화이트":
//				wineType = 2;
//				break;
//			case "로제":
//				wineType = 3;
//				break;
//			case "스파클링":
//				wineType = 4;
//				break;
//			case "주정강화":
//				wineType = 5;
//				break;
//			case "디저트":
//				wineType = 6;
//				break;
//			default:
//				wineType = 0;
//				break;
//			}
//			String price = null;
//
//			if (line[3] == "null" || line[3] == "" || line[3] == null)
//				price = null;
//			else
//				price = line[3].replaceAll("원", "");
//
//			wine.setKorName(line[1]);
//			wine.setEngName(line[2]);
//			wine.setPrice(Integer.parseInt(price == null || price == "" ? "0" : price));
//			wine.setType(wineType);
//			wine.setBody(Integer.parseInt(line[5] == null || line[5] == "" ? "0" : line[5]));
//			wine.setAcidity(Integer.parseInt(line[6] == null || line[6] == "" ? "0" : line[6]));
//			wine.setTannin(Integer.parseInt(line[7] == null || line[7] == "" ? "0" : line[7]));
//			wine.setSweet(Integer.parseInt(line[8] == null || line[8] == "" ? "0" : line[8]));
//			wine.setAlcohol(line[9]);
//			wine.setCountry(line[10]);
//			wine.setRegion(line[11]);
//			wine.setDesc(line[12]);
//			wine.setStarPoint(Float.parseFloat(line[13] == null || line[13] == "" ? "0" : line[13]));
//			wine.setRecommendedSnack(line[14]);
//			wine.setGrapeVariety(line[15]);
//
//			try {
//
//				File file = new File("C:\\Users\\USER\\Desktop\\img\\"
//						+ String.format("%03d_", Integer.parseInt(line[0])) + line[2] + ".png");
//
//				MultipartFile multipartFile = new MockMultipartFile(
//						String.format("%03d_", Integer.parseInt(line[0])) + line[2] + ".png",
//						String.format("%03d_", Integer.parseInt(line[0])) + line[2] + ".png", "image/png",
//						new FileInputStream(file));
//
//				ObjectMapper mapper = new ObjectMapper();
//				String jsonString = mapper.writeValueAsString(wine);
//				index += registerWine(multipartFile, wine) == null ? 0 : 1;
//				System.out.println(wine.getT);
//				System.out.println(index);
//
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
//
//			System.out.println(line[0] + " : " + wine);
//		}
//	}
}
