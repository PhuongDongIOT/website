import type { Meta, StoryObj } from '@storybook/react';
import { InputGroups } from './InputGroups';

const meta = {
  title: 'Example/InputGroups',
  component: InputGroups,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputGroups>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
