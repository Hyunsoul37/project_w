package shop.winetoy.server.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import shop.winetoy.server.member.entity.AuthResult;
import shop.winetoy.server.member.entity.DuplicateCheckDto;
import shop.winetoy.server.member.entity.MemberDto;
import shop.winetoy.server.member.entity.MemberInfoDto;
import shop.winetoy.server.member.entity.RefreshDto;
import shop.winetoy.server.member.entity.ReissueTokenDto;
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
	 * ID 중복 체크 (GET + Query String)
	 * https://www.notion.so/ID-d778d565471546eeae4748acdb3a93de?pvs=4
	 */
	@RequestMapping(value = "/auth/id-check", method = RequestMethod.GET)
	@ResponseBody
	public Response<DuplicateCheckDto> duplicateIdCheck(@RequestParam(required = true)  String id) {
		DuplicateCheckDto result = new DuplicateCheckDto();
		result.setDuplicate(memberDuplicateCheck(id));
		return responseService.getResponse(result);
	}
	
	/**
	 * 닉네임 중복 체크
	 * https://www.notion.so/990376f83a1c484e8812c4ed425f05d4?pvs=4
	 */
	@RequestMapping(value = "/auth/nickname-check", method = RequestMethod.GET)
	@ResponseBody
	public Response<DuplicateCheckDto> duplicateNickNameCheck(@RequestParam(required = true) String nickName){
		DuplicateCheckDto result = new DuplicateCheckDto();
		result.setDuplicate(nickNameDuplicateCheck(nickName));
		return responseService.getResponse(result);
	}

	/**
	 * 회원가입
	 * https://www.notion.so/37801f24ecd3431bb0a7aad2f08fb546?pvs=4
	 */
	@RequestMapping(value = "/auth/join", method = RequestMethod.POST)
	@ResponseBody
	public Response<MemberInfoDto> join(@RequestBody MemberDto info) {
		System.out.println(info.toString());
		boolean isIdDuplicate = memberDuplicateCheck(info.getId());
		boolean isNickNameDuplicate  = nickNameDuplicateCheck(info.getNickName());
		
		if (isIdDuplicate || isNickNameDuplicate) {
			return null;
		}

		MemberInfoDto result = memberService.join(info);

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
	 * https://www.notion.so/AccessToken-2b7825b3a66144e5a8ece6248d36e737?pvs=4
	 */
	@RequestMapping(value = "/auth/refresh", method = RequestMethod.POST)
	@ResponseBody
	public Response<ReissueTokenDto> reissueAccessToken(@RequestBody RefreshDto requestRefreshToken) {

		ReissueTokenDto reissueTokenDto = new ReissueTokenDto();
		MemberDto result = memberService.getRefreshToken(requestRefreshToken.getPid());
		
		if (!jwtManager.validationRefreshToken(requestRefreshToken.getRefreshToken())) {
			reissueTokenDto.setReissueToken(ExceptionCode.EXPIRED_TOKEN);
			return responseService.getResponse(reissueTokenDto);
		} 
		
		if(!result.getRefreshToken().equals(requestRefreshToken.getRefreshToken())) {
			System.out.println(!result.getRefreshToken().equals(requestRefreshToken.getRefreshToken()));
			reissueTokenDto.setReissueToken(ExceptionCode.INVALID_TOKEN);
			return responseService.getResponse(reissueTokenDto);
		}

		String accessToken = jwtManager.generateAccessToken(result);
		reissueTokenDto.setReissueToken(accessToken);
		return responseService.getResponse(reissueTokenDto);
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