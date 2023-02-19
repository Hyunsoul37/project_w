package shop.winetoy.server.wine.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

import shop.winetoy.server.s3.service.S3UpladerService;
import shop.winetoy.server.tools.WineDataUpload;
import shop.winetoy.server.wine.entity.WineDto;
import shop.winetoy.server.wine.entity.WineInfoDto;
import shop.winetoy.server.wine.service.WineService;

@Controller
@RequestMapping("/api/auth")
public class WineController {

	WineService wineService;
	S3UpladerService s3UpladerService;
	final String s3Bucket = "winetoy";

	@Autowired
	public WineController(WineService wineService, S3UpladerService s3UpladerService) {
		this.wineService = wineService;
		this.s3UpladerService = s3UpladerService;
	}

	/**
	 * wine 등록
	 * 
	 * @return
	 */
	@RequestMapping(value = "/wine", method = RequestMethod.POST)
	@ResponseBody
	public int registerWine(@RequestParam(value = "file", required = false) MultipartFile file,
			@RequestParam String wine) {

		ObjectMapper mapper = new ObjectMapper();

		try {
			String imgUrl = s3UpladerService.upload(file, s3Bucket, "registeredWineImg");

			WineDto registerWine = mapper.readValue(wine, WineDto.class);

			registerWine.setImageUrl(imgUrl);

			return wineService.registerWine(registerWine);

		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}

	@RequestMapping(value = "/wine/detail", method = RequestMethod.GET)
	@ResponseBody
	public WineDto detailWineList(int pid) {

		return wineService.getWineDetail(pid);
	}

	@RequestMapping(value = "/wine/search", method = RequestMethod.GET)
	@ResponseBody
	public List<WineInfoDto> searchWine(int type, int page){
		System.out.println("type : " + type + " page : " + page);
		List<WineInfoDto> result = wineService.searchWine(type, page);
		return result;
	}
	
	//--------------------------------------------------------------------------------------------------------//
	

	public void tmp() throws IOException {
		WineDataUpload goCSV = new WineDataUpload("C:\\Users\\USER\\Desktop\\wine_add_sweet.csv");
		String[] line = null;
		
		int index = 0;
		
		while ((line = goCSV.nextRead()) != null) {
			WineDto wine = new WineDto();
			int wineType = 0;

			switch (line[4]) {
			case "레드":
				wineType = 1;
				break;
			case "화이트":
				wineType = 2;
				break;
			case "로제":
				wineType = 3;
				break;
			case "스파클링":
				wineType = 4;
				break;
			case "주정강화":
				wineType = 5;
				break;
			case "디저트":
				wineType = 6;
				break;
			default:
				wineType = 0;
				break;
			}
			String price = null;

			if (line[3] == "null" || line[3] == "" || line[3] == null)
				price = null;
			else
				price = line[3].replaceAll("원", "");

			wine.setKorName(line[1]);
			wine.setEngName(line[2]);
			wine.setPrice(Integer.parseInt(price == null || price == "" ? "0" : price));
			wine.setType(wineType);
			wine.setBody(Integer.parseInt(line[5] == null || line[5] == "" ? "0" : line[5]));
			wine.setAcidity(Integer.parseInt(line[6] == null || line[6] == "" ? "0" : line[6]));
			wine.setTannin(Integer.parseInt(line[7] == null || line[7] == "" ? "0" : line[7]));
			wine.setSweet(Integer.parseInt(line[8] == null || line[8] == "" ? "0" : line[8]));
			wine.setAlcohol(line[9]);
			wine.setCountry(line[10]);
			wine.setRegion(line[11]);
			wine.setDesc(line[12]);
			wine.setStarPoint(Float.parseFloat(line[13] == null || line[13] == "" ? "0" : line[13]));
			wine.setRecommendedSnack(line[14]);
			wine.setGrapeVariety(line[15]);

			try {

				File file = new File("C:\\Users\\USER\\Desktop\\img\\"
						+ String.format("%03d_", Integer.parseInt(line[0])) + line[2] + ".png");

				MultipartFile multipartFile = new MockMultipartFile(
						String.format("%03d_", Integer.parseInt(line[0])) + line[2] + ".png",
						String.format("%03d_", Integer.parseInt(line[0])) + line[2] + ".png",
						"image/png",
						new FileInputStream(file));

				ObjectMapper mapper = new ObjectMapper(); 
				String jsonString = mapper.writeValueAsString(wine);
				index += registerWine(multipartFile, jsonString);
//				System.out.println(jsonString);
				System.out.println(index);
				
			} catch (Exception e) {
				e.printStackTrace();
			}

			System.out.println(line[0] + " : " + wine);
		}
	}
}
