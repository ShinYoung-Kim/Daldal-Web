import { kakaoLogin, logout } from '@apis/auth';
import { LogoutRequestDTO } from '@models/auth/request/logoutRequestDTO';
import { TokenResponseDTO } from '@models/auth/response/tokenResponseDTO';
import { useMutation } from '@tanstack/react-query';
import { ApiResponse } from '@type/apiResponse';
import { setAccessToken, setRefreshToken } from '@utils/token';

export const useKakaoLogin = (errorCallback?: (error: Error) => void) => {
	return useMutation({
		mutationFn: () => kakaoLogin(),
		onSuccess: (data: ApiResponse<TokenResponseDTO>) => {
			setAccessToken(data.data.accessToken);
			setRefreshToken(data.data.refreshToken);
		},
		onError: errorCallback,
	});
};

export const useLogout = (
	successCallback?: () => void,
	errorCallback?: (error: Error) => void,
) => {
	return useMutation({
		mutationFn: (request: LogoutRequestDTO) => logout(request),
		onSuccess: successCallback,
		onError: errorCallback,
	});
};
