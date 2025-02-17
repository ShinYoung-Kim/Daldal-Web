import { Outlet } from 'react-router-dom';

import PageLayout from '@layouts/PageLayout';

const Withdrawal = () => {
	return (
		<PageLayout leftType="back" rightType="withdrawal" className="px-6 py-3">
			<Outlet />
		</PageLayout>
	);
};

export default Withdrawal;
