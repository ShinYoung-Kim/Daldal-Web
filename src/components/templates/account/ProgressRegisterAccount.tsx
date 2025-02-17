import { useNavigate } from 'react-router-dom';

import { AccountForm } from '@components/organisms';
import { useAccountInfoStore } from '@stores/formInfoStore';
import { FormType } from '@type/form';

const ProgressRegisterAccount = () => {
	const { setAccountInfo, accountInfo, setEnterType } = useAccountInfoStore();

	const navigate = useNavigate();
	const onSubmit = (data: FormType) => {
		setAccountInfo({ ...accountInfo, ...data });
		setEnterType('REGISTER');
		navigate('/post-account', { replace: true });
	};

	return (
		<AccountForm
			buttonInfo={{
				title: '저장하기',
				onSubmit: onSubmit,
			}}
		/>
	);
};

export default ProgressRegisterAccount;
