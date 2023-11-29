import type { Meta, StoryObj } from '@storybook/react';

import { ButtonTheme } from './Button';

const meta = {
  title: 'Example/ButtonTheme',
  component: ButtonTheme,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof ButtonTheme>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
