package shop.winetoy.server.api;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import shop.winetoy.server.member.entity.AuthResult;
import shop.winetoy.server.member.entity.MemberInfoDto;
import shop.winetoy.server.member.service.MemberInfoService;
import shop.winetoy.server.tools.JwtManager;

@Controller
@RequestMapping("/api")
public class ApiController {

	@Autowired
	MemberInfoService memberInfoService;
	@Autowired
	JwtManager jwtManager;

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
		System.out.println("/test ,  RequestMethod.GET");
		data.put("data", "RequestMethod.GET");

		return data;
	}

	/**
	 * ID 중복 체크 (POST)
	 */
	@RequestMapping(value = "/id-check", method = RequestMethod.POST)
	@ResponseBody
	public boolean duplicateIdCheck(@RequestBody Map<String, String> res) {
		return memberDuplicateCheck(res.get("id"));
	}

	/**
	 * ID 중복 체크 (GET + Query String)
	 */
	@RequestMapping(value = "/id-check", method = RequestMethod.GET)
	@ResponseBody
	public boolean duplicateIdCheck(String id) {
		return memberDuplicateCheck(id);
	}

	/**
	 * 회원가입
	 */
	@RequestMapping(value = "/join", method = RequestMethod.POST)
	@ResponseBody
	public int join(@RequestBody MemberInfoDto info) {
		boolean isDuplicate = memberDuplicateCheck(info.getId());

		if (isDuplicate == true) {
			return 0;
		}

		int result = memberInfoService.join(info);

		return result;
	}

	/**
	 * 회원 리스트 조회
	 */
	@RequestMapping(value = "/memberList", method = RequestMethod.GET)
	@ResponseBody
	public List<MemberInfoDto> getMemberList() {
		List<MemberInfoDto> result = memberInfoService.memberList();
		return result;
	}

	/**
	 * Login
	 */
	@RequestMapping(value = "/auth", method = RequestMethod.POST)
	@ResponseBody
	public AuthResult login(@RequestBody MemberInfoDto info) {
		MemberInfoDto result = memberInfoService.memberCheck(info.getId());
		AuthResult authResult = new AuthResult();

		// id가 DB에 없을 경우
		if (result == null) {
			
			authResult.setToken(null);
			authResult.setMessage("id error!");
			
			return authResult;
		}

		// id는 DB에 있는데 password가 맞지 않는 경우
		if (result.getPassword().equals(info.getPassword()) == false) {
			authResult.setToken(null);
			authResult.setMessage("password error!");
			
			return authResult;
		}
		
		authResult.setToken(jwtManager.generateJwtToken(result));
		authResult.setMessage("success");
		authResult.setData(result);
		
		return authResult;
	}

	@RequestMapping(value = "/member", method = RequestMethod.DELETE)
	@ResponseBody
	public Map<String, Integer> deleteMemberInfoTable() {
		Map<String, Integer> data = new HashMap<String, Integer>();

		int result = memberInfoService.deleteMemberInfoTable();

		data.put("deleteCount", result);

		return data;
	}

	// -----------------------------------------------------------------------------------//
	
	private boolean memberDuplicateCheck(String id) {
		MemberInfoDto result = memberInfoService.memberCheck(id);
		if (result == null) {
			return false;
		}

		return true;
	}

}
