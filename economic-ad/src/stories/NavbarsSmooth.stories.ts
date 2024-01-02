import type { Meta, StoryObj } from '@storybook/react';

import { NavbarsSmooth } from './Navbars';

const meta = {
  title: 'Example/NavbarsSmooth',
  component: NavbarsSmooth,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof NavbarsSmooth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
