import { Outlet } from 'react-router-dom';

import { RequestLeaveModalButton } from '@components/atoms';
import PageLayout from '@layouts/PageLayout';

const EnterAccountInfo = () => {
	const currentPathname = window.location.pathname;
	const getRightType = () => {
		if (currentPathname.endsWith('edit')) {
			return 'editAccount';
		}
		return 'registerAccount';
	};

	return (
		<PageLayout
			leftType="back"
			rightType={getRightType()}
			className="px-6 py-[15px]"
		>
			<Outlet />
			<RequestLeaveModalButton />
		</PageLayout>
	);
};

export default EnterAccountInfo;
