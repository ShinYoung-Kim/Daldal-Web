import { Meta, StoryObj } from '@storybook/react';

import { LoginBottomSheet } from '@components/molecules';
import { useBottomSheetStore } from '@stores/layerStore';

const Wrapper = () => {
	const { openBottomSheet } = useBottomSheetStore();

	return (
		<div className="w- h-full">
			<button onClick={() => openBottomSheet('login')}>open</button>
			<LoginBottomSheet />
		</div>
	);
};

const meta = {
	title: 'molecules/bottomSheet/LoginBottomSheet',
	component: Wrapper,
	decorators: [Story => <Story />],
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof LoginBottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
