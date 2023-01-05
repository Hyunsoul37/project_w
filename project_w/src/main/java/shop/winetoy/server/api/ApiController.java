package shop.winetoy.server.api;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import shop.winetoy.server.member.MemberInfo;

@Controller
@RequestMapping("/api")
public class ApiController {
	
	// 서버 시간 조회
	@RequestMapping(value = "/time", method = RequestMethod.GET)
	@ResponseBody
	public Time time() {
		LocalDateTime now = LocalDateTime.now();
		String format = now.format(DateTimeFormatter.ofPattern("yyyy년 MM월 dd일 HH시 mm분 ss초"));

		Time _time = new Time();
		_time.setTime(format);
		
		return _time;
	}
	
	@RequestMapping(value = "/test", method = RequestMethod.POST)
	@ResponseBody
	public Data postData(@RequestBody Data data){
		System.out.println("/test , RequestMethod.POST");
		return data ;
	}
	
	@RequestMapping(value = "/test", method = RequestMethod.GET)
	@ResponseBody
	public Data gettData(){
		Data data = new Data();
		System.out.println("/test ,  RequestMethod.GET");
		data.setData("RequestMethod.GET");
		
		return data;
	}
	
	@RequestMapping(value = "/join", method = RequestMethod.POST)
	@ResponseBody
	public MemberInfo join(@RequestBody MemberInfo info) {
		MemberInfo memberInfo = new MemberInfo();
	
		memberInfo = info;
		memberInfo.setPid(20211224L);
		
		return memberInfo;
	}
	
	static class Data{
		private String data;

		public String getData() {
			return data;
		}

		public void setData(String data) {
			this.data = data;
		}
		
	}
	
	static class Time{
        private String time;

		public String getTime() {
			return time;
		}

		public void setTime(String time) {
			this.time = time;
		}
	
	}
}
