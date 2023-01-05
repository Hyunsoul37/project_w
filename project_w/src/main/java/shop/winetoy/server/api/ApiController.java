package shop.winetoy.server.api;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import shop.winetoy.server.member.entity.MemberInfoVO;
import shop.winetoy.server.member.service.MemberInfoService;



@Controller
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	MemberInfoService memberInfoService;
	
	// 서버 시간 조회
	@RequestMapping(value = "/time", method = RequestMethod.GET)
	@ResponseBody
	public Map<String,String> time() {
		LocalDateTime now = LocalDateTime.now();
		String format = now.format(DateTimeFormatter.ofPattern("yyyy년 MM월 dd일 HH시 mm분 ss초"));

		HashMap<String,String> map = new HashMap<String,String>();
		
		map.put("time", format);
		
		
		return map;
	}
	
	@RequestMapping(value = "/test", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,String> postData(@RequestBody Map<String,String> data){
		return data ;
	}
	
	@RequestMapping(value = "/test", method = RequestMethod.GET)
	@ResponseBody
	public Map<String,String> getData(){
		Map<String,String> data = new HashMap<String,String>();
		System.out.println("/test ,  RequestMethod.GET");
		data.put("data","RequestMethod.GET");
		
		return data;
	}
	
	
	@RequestMapping(value = "/join", method = RequestMethod.POST)
	@ResponseBody
	public int join(@RequestBody MemberInfoVO info) {
		System.out.println(info.toString());
		int result = memberInfoService.join(info);
		System.out.println(result);
		return result;
	}
}
