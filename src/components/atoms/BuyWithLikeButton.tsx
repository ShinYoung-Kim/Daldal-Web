import { Button } from 'konsta/react';
import { useNavigate } from 'react-router-dom';

import { HeartButton } from '@components/atoms';
import { useGetAccountInfo } from '@hooks/apis/account';
import { useBuyButtonStore } from '@stores/buyButtonStore';
import { useBottomSheetStore } from '@stores/layerStore';
import isLogin from '@utils/isLogin';

type LikeButtonProps = {
	id: number;
	isDib: boolean;
};

const BuyWithLikeButton = ({ id, isDib }: LikeButtonProps) => {
	const navigate = useNavigate();
	const openBottomSheet = useBottomSheetStore(state => state.openBottomSheet);
	const setIsBuyButtonClicked = useBuyButtonStore(
		state => state.setIsBuyButtonClicked,
	);

	const { data: accountInfo } = useGetAccountInfo();

	const handleBuyClick = () => {
		if (isLogin()) {
			if (accountInfo?.account) {
				setIsBuyButtonClicked(true);
				navigate('/notification');
			} else {
				openBottomSheet('account');
			}
		} else {
			openBottomSheet('login');
		}
	};

	return (
		<div className="w-full flex gap-6">
			<HeartButton
				id={id}
				isDib={isDib}
				size={32}
				className="!w-8 !px-0 !py-4"
			/>
			<Button
				className="w-full h-[38px] k-color-Primary !text-White !typography-Btn_text1 text-center rounded-sm"
				onClick={handleBuyClick}
			>
				3% 저렴하게 구입하기
			</Button>
		</div>
	);
};

export default BuyWithLikeButton;
