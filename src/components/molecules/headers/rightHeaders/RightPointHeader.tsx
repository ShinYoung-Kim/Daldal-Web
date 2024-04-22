import { RightHeaderType } from '@type/navigation';

type RightPointHeaderProps = {
	pointType: Omit<RightHeaderType, 'default'>;
};

const RightPointHeader = ({ pointType }: RightPointHeaderProps) => {
	const headerTitleMatching = {
		imageUpload: '구매 인증 포인트 내역',
		withdrawalHistory: '포인트 출금 내역',
		withdrawal: '포인트 출금하기',
		registerAccount: '계정 등록하기',
		editAccount: '계정 수정하기',
	};

	return (
		<div className="absolute top-0 left-0 w-full py-4 flex justify-center typography-Body1 typography-M text-White">
			{headerTitleMatching[pointType as keyof typeof headerTitleMatching]}
		</div>
	);
};

export default RightPointHeader;
