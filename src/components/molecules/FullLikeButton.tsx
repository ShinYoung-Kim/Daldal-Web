import SvgIcon from '@assets/icons/SvgIcon';
import IconButton from '@components/atoms/IconButton';
import { moleculeIconButton } from '@type/moleculeIconButton';

const FullLikeButton: React.FC<moleculeIconButton> = ({ onClick }) => {
	return (
		<IconButton width={12} size="large" bgColor="Black" onClick={onClick}>
			<SvgIcon id="like-full" size={32} />
		</IconButton>
	);
};

export default FullLikeButton;
