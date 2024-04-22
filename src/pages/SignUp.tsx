import { Button } from 'konsta/react';
import { useNavigate } from 'react-router-dom';

import {
	AppleLoginButton,
	KakaoLoginButton,
	SpeechBubble,
} from '@components/atoms';
import { LoginImageSlider } from '@components/molecules';
import ClearLayout from '@layouts/ClearLayout';

const SignUp = () => {
	const navigate = useNavigate();

	const handleClickNonMembers = () => {
		navigate('/');
	};

	return (
		<ClearLayout className="flex flex-col justify-center items-center">
			<LoginImageSlider />
			<Button
				className="!typography-Body3 !typography-M !text-Gray10 mb-3 !p-0"
				clear
				onClick={handleClickNonMembers}
			>
				비회원으로 둘러보기
			</Button>
			<div className="w-full flex flex-col gap-4 mb-[21px]">
				<AppleLoginButton />
				<KakaoLoginButton />
			</div>
			<SpeechBubble text="⚡️3초만에 빠른 회원가입" />
		</ClearLayout>
	);
};

export default SignUp;
