import { Meta, StoryObj } from '@storybook/react';

import { BankButton } from '@components/atoms';

const meta = {
	title: 'atoms/myPage/BankButton',
	component: BankButton,
	decorators: [
		Story => (
			<div style={{ width: '375px' }}>
				<Story />
			</div>
		),
	],
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof BankButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
	args: {
		iconId: 'like-full',
		title: 'NH 농협',
	},
};
