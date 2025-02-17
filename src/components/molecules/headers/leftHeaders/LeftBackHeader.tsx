import { useNavigate } from 'react-router-dom';

import { IconButton } from '@components/atoms';
import colors from '@constants/colors';

const LeftBackHeader = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	};

	return (
		<IconButton
			className="!w-8 !px-0 !py-4"
			icon={{
				id: 'direction-left',
				width: 24,
				color: colors.White,
			}}
			onClick={handleClick}
		/>
	);
};

export default LeftBackHeader;
