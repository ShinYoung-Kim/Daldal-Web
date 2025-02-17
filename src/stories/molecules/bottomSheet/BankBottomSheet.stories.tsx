import { Meta, StoryObj } from '@storybook/react';

import { BankBottomSheet } from '@components/molecules';
import { useBottomSheetStore } from '@stores/layerStore';

const Wrapper = () => {
	const { openBottomSheet } = useBottomSheetStore();

	return (
		<div className="h-full">
			<button onClick={() => openBottomSheet('bank')}>open</button>
			<BankBottomSheet />
		</div>
	);
};

const meta = {
	title: 'molecules/bottomSheet/BankBottomSheet',
	component: Wrapper,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Wrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
