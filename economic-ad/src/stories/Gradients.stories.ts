import type { Meta, StoryObj } from '@storybook/react';

import { Gradients } from './Gradients';

const meta = {
  title: 'Example/Gradients',
  component: Gradients,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Gradients>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};

