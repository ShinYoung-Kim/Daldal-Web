import {
	LeftLogoHeader,
	LeftBackHeader,
	LeftHomeHeader,
	RightDefaultHeader,
	RightPointHeader,
} from '@components/molecules';
import { LeftHeaderType, RightHeaderType } from '@type/navigation';

export type LeftHeaderProps = {
	leftType: LeftHeaderType;
	rightType?: RightHeaderType;
};

const Header = ({ leftType, rightType = 'default' }: LeftHeaderProps) => {
	return (
		<div
			className={`flex flex-row w-full justify-between items-center pl-3 pr-3.5 bg-Gray90 sticky top-0 z-20 h-15`}
		>
			<div>
				{leftType === 'logo' && <LeftLogoHeader />}
				{leftType === 'back' && <LeftBackHeader />}
				{leftType === 'home' && <LeftHomeHeader />}
			</div>
			<div>
				{rightType === 'default' && <RightDefaultHeader />}
				{rightType !== 'default' && <RightPointHeader pointType={rightType} />}
			</div>
		</div>
	);
};

export default Header;
