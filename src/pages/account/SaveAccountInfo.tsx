import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { DefaultButton, RequestLeaveModalButton } from '@components/atoms';
import { DisabledAccountForm } from '@components/organisms';
import { usePatchAccountIfo } from '@hooks/apis/account';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import PageLayout from '@layouts/PageLayout';
import { useAccountInfoStore } from '@stores/formInfoStore';
import { RightHeaderType } from '@type/navigation';

const SaveAccountInfo = () => {
	const { accountInfo, clearAccountInfo, enterType } = useAccountInfoStore();
	const { mutate } = usePatchAccountIfo();
	const navigate = useNavigate();

	const handleRegisterAccountButtonClick = () => {
		mutate({
			depositorName: accountInfo.USER,
			account: accountInfo.ACCOUNT,
			accountBank: accountInfo.BANK,
		});
		navigate('/my-page');
	};

	const messageByAction = {
		REGISTER: '정보를 한 번 더 확인해주세요!\n저장하시겠습니까?',
		EDIT: '정보를 한 번 더 확인해주세요!\n수정하시겠습니까?',
	};

	const rightTypeByAction = {
		REGISTER: 'registerAccount',
		EDIT: 'editAccount',
	};

	useEffect(() => {
		return () => clearAccountInfo();
	}, [clearAccountInfo]);

	return (
		<PageLayout
			className="px-6 py-[15px]"
			leftType="back"
			rightType={rightTypeByAction[enterType] as RightHeaderType}
		>
			<div className="flex flex-col">
				<DisabledAccountForm defaultValues={accountInfo} />
				<div className="text-White typography-Body1 typography-M mt-[38px] whitespace-pre-line">
					{messageByAction[enterType]}
				</div>
				<FixedBottomLayout childrenPadding="px-6" height="h-15">
					<DefaultButton
						title="저장하기"
						color={{ bgColor: 'Primary', textColor: 'White' }}
						size="large"
						onClick={handleRegisterAccountButtonClick}
					/>
				</FixedBottomLayout>
			</div>
			<RequestLeaveModalButton />
		</PageLayout>
	);
};

export default SaveAccountInfo;
