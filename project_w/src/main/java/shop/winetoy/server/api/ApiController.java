package shop.winetoy.server.api;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:8080")
public class ApiController {
	
	@RequestMapping(value = "/time", method = RequestMethod.GET)
	@ResponseBody
	private String showTime() {
		LocalTime now = LocalTime.now();
        // 포맷 정의하기
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH시 mm분 ss초");
        // 포맷 적용하기
        String formatedNow = now.format(formatter);
        
        return formatedNow;
	}
	
}
