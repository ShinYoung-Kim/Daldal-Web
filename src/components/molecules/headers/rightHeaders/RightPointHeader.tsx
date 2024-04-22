type RightPointHeaderProps = {
	pointType: 'imageUpload' | 'withdrawal';
};

const RightPointHeader = ({ pointType }: RightPointHeaderProps) => {
	const renderText = () => {
		if (pointType === 'imageUpload') {
			return '구매 인증 포인트 내역';
		} else {
			return '포인트 출금 내역';
		}
	};
	return (
		<div className="absolute top-0 left-0 w-full py-4 flex justify-center typography-Body1 typography-M text-White">
			{renderText()}
		</div>
	);
};

export default RightPointHeader;
