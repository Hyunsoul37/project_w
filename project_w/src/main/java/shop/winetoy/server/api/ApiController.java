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
import shop.winetoy.server.member.entity.DuplicateCheckDto;
import shop.winetoy.server.member.entity.MemberDto;
import shop.winetoy.server.member.entity.MemberInfoDto;
import shop.winetoy.server.member.entity.RefreshDto;
import shop.winetoy.server.member.service.MemberService;
import shop.winetoy.server.response.entity.Response;
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
	public Response<DuplicateCheckDto> duplicateIdCheck(@RequestBody Map<String, String> res) {
		DuplicateCheckDto result = new DuplicateCheckDto();
		result.setDuplicate(memberDuplicateCheck(res.get("id")));
		return responseService.getResponse(result);
	}

	/**
	 * ID 중복 체크 (GET + Query String)
	 * https://www.notion.so/ID-d778d565471546eeae4748acdb3a93de?pvs=4
	 */
	@RequestMapping(value = "/auth/id-check", method = RequestMethod.GET)
	@ResponseBody
	public Response<DuplicateCheckDto> duplicateIdCheck(String id) {
		DuplicateCheckDto result = new DuplicateCheckDto();
		result.setDuplicate(memberDuplicateCheck(id));
		return responseService.getResponse(result);
	}
	
	/**
	 * 닉네임 중복 체크
	 */
	@RequestMapping(value = "/auth/nickname-check", method = RequestMethod.GET)
	@ResponseBody
	public Response<DuplicateCheckDto> duplicateNickNameCheck(String nickName){
		DuplicateCheckDto result = new DuplicateCheckDto();
		result.setDuplicate(nickNameDuplicateCheck(nickName));
		return responseService.getResponse(result);
	}

	/**
	 * 회원가입
	 * https://www.notion.so/37801f24ecd3431bb0a7aad2f08fb546?pvs=4
	 */
	@RequestMapping(value = "/join", method = RequestMethod.POST)
	@ResponseBody
	public Response<MemberInfoDto> join(@RequestBody MemberDto info) {
		boolean isIdDuplicate = memberDuplicateCheck(info.getId());
		boolean isNickNameDuplicate  = nickNameDuplicateCheck(info.getNickName());
		
		if (isIdDuplicate || isNickNameDuplicate) {
			return null;
		}

		MemberInfoDto result = memberService.join(info);

		return responseService.getResponse(result);
	}

	/**
	 * 회원 리스트 조회
	 * https://www.notion.so/9e5a6611a0b043819647b909061a7e7c?pvs=4
	 */
	@RequestMapping(value = "/admin/memberList", method = RequestMethod.GET)
	@ResponseBody
	public Response<List<MemberDto>> getMemberList() {
		List<MemberDto> result = memberService.memberList();
		
		return responseService.getResponse(result);
	}

	/**
	 * Login
	 * https://www.notion.so/c526acbfee4a43ae9cc203f9c00862af?pvs=4
	 */
	@RequestMapping(value = "/auth/login", method = RequestMethod.POST)
	@ResponseBody
	public Response<AuthResult> login(@RequestBody MemberDto info) {
		MemberDto result = memberService.memberCheck(info.getId());
		AuthResult authResult = new AuthResult();

		// id가 DB에 없을 경우
		if (result == null) {

			authResult.setToken(null);
			authResult.setMessage("id error!");

			return responseService.getResponse(authResult);
		}

		// id는 DB에 있는데 password가 맞지 않는 경우
		if (result.getPassword().equals(info.getPassword()) == false) {
			authResult.setToken(null);
			authResult.setMessage("password error!");

			return responseService.getResponse(authResult);
		}

		MemberInfoDto memberInfo = new MemberInfoDto(result);
		String accessToken = jwtManager.generateAccessToken(result);
		String refreshToken = jwtManager.generateRefreshToken(result);

		authResult.setToken(accessToken);
		authResult.setRefreshToken(refreshToken);
		authResult.setMessage("success");
		authResult.setMemberInfo(memberInfo);

		// 발급된 refresh토큰 DB저장
		memberService.updateRefreshToken(result.getPid(), refreshToken);

		return responseService.getResponse(authResult);
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
	
	private boolean nickNameDuplicateCheck(String nickName) {
		MemberDto result = memberService.nickNameCheck(nickName);
		
		if(result == null)
			return false;
		
		return true;
	}

}