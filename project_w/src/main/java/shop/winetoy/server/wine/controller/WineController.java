package shop.winetoy.server.wine.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import shop.winetoy.server.response.entity.Response;
import shop.winetoy.server.response.service.ResponseService;
import shop.winetoy.server.wine.entity.WineBookmarkDto;
import shop.winetoy.server.wine.entity.WineBookmarkResultDto;
import shop.winetoy.server.wine.entity.WineDto;
import shop.winetoy.server.wine.entity.WineInfoDto;
import shop.winetoy.server.wine.entity.WineRankDto;
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
	
	/**
	 * 와인 랭킹 조회 
	 * https://www.notion.so/ef504b125fba49758dc039c9973df25d?pvs=4
	 */
	@RequestMapping(value="/rank", method = RequestMethod.GET)
	@ResponseBody
	public Response<WineRankDto> getWineCategoryRanking(){
		WineRankDto result = wineService.getCategoryRanking();
		return responseService.getResponse(result);
	}
	
	/**
	 * 와인 좋아요 등록 및 해제 
	 * https://www.notion.so/Like-fda9157b1db5427797385177d345c60a?pvs=4
	 */
	@RequestMapping(value="/wine/like", method = RequestMethod.POST)
	@ResponseBody
	public Response<WineBookmarkResultDto> wineLike(@RequestBody WineBookmarkDto info){
		WineBookmarkResultDto result = wineService.setWineBookmark(info);
		return responseService.getResponse(result);
	}
}
