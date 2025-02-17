import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { DefaultButton } from '@components/atoms';
import { useModalStore } from '@stores/layerStore';

const RequestLeaveModalButton = () => {
	const { openModal } = useModalStore();
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};
	const stay = () => {};

	const buttons = [
		<DefaultButton
			color={{
				textColor: 'White',
				bgColor: 'Primary',
			}}
			title="머무르기"
			size="small"
			onClick={stay}
		/>,
		<DefaultButton
			title="이동하기"
			size="small"
			color={{
				textColor: 'Primary',
				bgColor: 'White',
				borderColor: 'Primary',
			}}
			onClick={goBack}
		/>,
	];

	const handleClickRequestLeaveModalButton = (
		e: MouseEvent<HTMLDivElement>,
	) => {
		e.preventDefault();
		openModal('leave', buttons);
	};

	return (
		<div
			className="w-7 h-6 cursor-pointer py-4 px-4 fixed top-[14px] z-30"
			onClick={handleClickRequestLeaveModalButton}
		/>
	);
};

export default RequestLeaveModalButton;
