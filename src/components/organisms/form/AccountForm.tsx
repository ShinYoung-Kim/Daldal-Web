import { useEffect } from 'react';

import { Form } from '@components/atoms';
import { useAccountInfoStore } from '@stores/formInfoStore';
import { FormType, accountSchema } from '@type/form';

type AccountFormProps = {
	disabled?: boolean;
	buttonInfo: {
		title: string;
		onSubmit: (data: FormType) => void;
	};
	isEditing?: boolean;
};

const AccountForm = ({ disabled, buttonInfo, isEditing }: AccountFormProps) => {
	const { onSubmit, title } = buttonInfo;
	const { setIsSelectedBankNeeded } = useAccountInfoStore();

	useEffect(() => {
		setIsSelectedBankNeeded(true);
	}, [setIsSelectedBankNeeded]);

	return (
		<Form onSubmit={onSubmit} schema={accountSchema}>
			<Form.Label label="입금자명" />
			<Form.Input name="USER" type="text" disabled={disabled} autoFocus />
			<Form.HelperText name="USER" />
			<Form.Label label="은행명" />
			<Form.BankButton disabled={disabled} />
			<Form.Label label="계좌번호" />
			<Form.Input name="ACCOUNT" type="number" disabled={disabled} />
			<Form.HelperText name="ACCOUNT" />
			<Form.Button title={title} fieldCount={3} isEditing={isEditing} />
		</Form>
	);
};

export default AccountForm;
