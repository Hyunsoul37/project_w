package shop.winetoy.server.tools;

import java.io.IOException;

import org.json.JSONObject;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint{

	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException authException) throws IOException, ServletException {
		String exception = (String)request.getAttribute("exception");
		
		System.out.println("commence : " + exception);
		if(exception == null) {
            setResponse(response, ExceptionCode.UNKNOWN_ERROR);
        }
        // 시그니처 오류
        else if(exception.equals(ExceptionCode.SIGNATURE_DOES_NOT_MATCH)) {
            setResponse(response, ExceptionCode.SIGNATURE_DOES_NOT_MATCH);
        }
        //토큰 만료된 경우
        else if(exception.equals(ExceptionCode.EXPIRED_TOKEN)) {
            setResponse(response, ExceptionCode.EXPIRED_TOKEN);
        }
        //지원되지 않는 토큰인 경우
        else if(exception.equals(ExceptionCode.UNSUPPORTED_TOKEN)) {
            setResponse(response, ExceptionCode.UNSUPPORTED_TOKEN);
        }
        else {
            setResponse(response, ExceptionCode.ACCESS_DENIED);
        }
	}
	
	private void setResponse(HttpServletResponse response, String exceptionCode) throws IOException {
        response.setContentType("application/json;charset=UTF-8");
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

        JSONObject responseJson = new JSONObject();
        responseJson.put("message", exceptionCode);

        response.getWriter().print(responseJson);
    }

}
