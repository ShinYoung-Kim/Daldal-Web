import { useNavigate } from 'react-router-dom';

import { IconButton } from '@components/atoms';

const LeftLogoHeader = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/');
	};

	return (
		<IconButton
			className="!w-28 !px-0 !py-4"
			icon={{
				id: 'app-logo',
				width: 120,
				color: 'white',
			}}
			onClick={handleClick}
		/>
	);
};

export default LeftLogoHeader;
