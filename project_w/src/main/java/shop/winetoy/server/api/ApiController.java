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
import shop.winetoy.server.member.entity.IdDuplicateCheckDto;
import shop.winetoy.server.member.entity.MemberDto;
import shop.winetoy.server.member.entity.MemberInfoDto;
import shop.winetoy.server.member.entity.RefreshDto;
import shop.winetoy.server.member.service.MemberService;
import shop.winetoy.server.response.entity.ListResponse;
import shop.winetoy.server.response.service.ResponseService;
import shop.winetoy.server.tools.ExceptionCode;
import shop.winetoy.server.tools.JwtManager;

@Controller
@RequestMapping("/api")
public class ApiController {

	@Autowired
	MemberService memberService;
	@Autowired
	JwtManager jwtManager;
	@Autowired
	ResponseService responseService;
	
	/**
	 * 서버 시간 조회
	 */
	@RequestMapping(value = "/admin/time", method = RequestMethod.GET)
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
	@RequestMapping(value = "/admin/test", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, String> postData(@RequestBody Map<String, String> data) {
		return data;
	}

	/**
	 * GET 테스트
	 */
	@RequestMapping(value = "/admin/test", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, String> getData() {
		Map<String, String> data = new HashMap<String, String>();
		data.put("data", "RequestMethod.GET");

		return data;
	}

	/**
	 * ID 중복 체크 (POST)
	 */
	@RequestMapping(value = "/auth/id-check", method = RequestMethod.POST)
	@ResponseBody
	public IdDuplicateCheckDto duplicateIdCheck(@RequestBody Map<String, String> res) {
		IdDuplicateCheckDto result = new IdDuplicateCheckDto();
		result.setDuplicate(memberDuplicateCheck(res.get("id")));
		return result;
	}

	/**
	 * ID 중복 체크 (GET + Query String)
	 * https://www.notion.so/ID-d778d565471546eeae4748acdb3a93de?pvs=4
	 */
	@RequestMapping(value = "/auth/id-check", method = RequestMethod.GET)
	@ResponseBody
	public IdDuplicateCheckDto duplicateIdCheck(String id) {
		IdDuplicateCheckDto result = new IdDuplicateCheckDto();
		result.setDuplicate(memberDuplicateCheck(id));
		return result;
	}

	/**
	 * 회원가입
	 * https://www.notion.so/37801f24ecd3431bb0a7aad2f08fb546?pvs=4
	 */
	@RequestMapping(value = "/join", method = RequestMethod.POST)
	@ResponseBody
	public int join(@RequestBody MemberDto info) {
		boolean isDuplicate = memberDuplicateCheck(info.getId());

		if (isDuplicate == true) {
			return 0;
		}

		int result = memberService.join(info);

		return result;
	}

	/**
	 * 회원 리스트 조회
	 * https://www.notion.so/9e5a6611a0b043819647b909061a7e7c?pvs=4
	 */
	@RequestMapping(value = "/admin/memberList", method = RequestMethod.GET)
	@ResponseBody
	public ListResponse<MemberDto> getMemberList() {
		List<MemberDto> result = memberService.memberList();
		
		return responseService.getListResponse(result);
	}

	/**
	 * Login
	 * https://www.notion.so/c526acbfee4a43ae9cc203f9c00862af?pvs=4
	 */
	@RequestMapping(value = "/auth/login", method = RequestMethod.POST)
	@ResponseBody
	public AuthResult login(@RequestBody MemberDto info) {
		MemberDto result = memberService.memberCheck(info.getId());
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

		MemberInfoDto memberInfo = new MemberInfoDto(result);
		String accessToken = jwtManager.generateAccessToken(result);
		String refreshToken = jwtManager.generateRefreshToken(result);

		authResult.setToken(accessToken);
		authResult.setRefreshToken(refreshToken);
		authResult.setMessage("success");
		authResult.setData(memberInfo);

		// 발급된 refresh토큰 DB저장
		memberService.updateRefreshToken(result.getPid(), refreshToken);

		return authResult;
	}

	/**
	 * refreshToken으로 Access토큰 재발급
	 * 
	 * @param requestRefreshToken
	 * @return
	 */
	@RequestMapping(value = "/auth/refresh", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, String> reissueAccessToken(@RequestBody RefreshDto requestRefreshToken) {

		Map<String, String> response = new HashMap<String, String>();
		String responseString = "response Message";
		
		MemberDto result = memberService.getRefreshToken(requestRefreshToken.getPid());
		if (!jwtManager.validationRefreshToken(requestRefreshToken.getRefreshToken())) {
			response.put(responseString , ExceptionCode.EXPIRED_TOKEN);
			return response;
		} 
		
		if(!result.getRefreshToken().equals(requestRefreshToken.getRefreshToken())) {
			System.out.println(!result.getRefreshToken().equals(requestRefreshToken.getRefreshToken()));
			response.put(responseString , ExceptionCode.INVALID_TOKEN);
			return response;
		}

		String accessToken = jwtManager.generateAccessToken(result);
		response.put(responseString , accessToken);
		return response;
	}

	/**
	 * DB memberInfo Table 초기화 API
	 * 
	 * @return
	 */
	@RequestMapping(value = "/member", method = RequestMethod.DELETE)
	@ResponseBody
	public Map<String, Integer> deleteMemberInfoTable() {
		Map<String, Integer> data = new HashMap<String, Integer>();

		int result = memberService.deleteMemberInfoTable();

		data.put("deleteCount", result);

		return data;
	}

	// -----------------------------------------------------------------------------------//

	private boolean memberDuplicateCheck(String id) {
		MemberDto result = memberService.memberCheck(id);
		if (result == null) {
			return false;
		}

		return true;
	}

}