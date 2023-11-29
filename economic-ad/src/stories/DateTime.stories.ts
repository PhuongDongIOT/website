import type { Meta, StoryObj } from '@storybook/react';
import { DateTime } from './DateTime';

const meta = {
  title: 'Example/DateTime',
  component: DateTime,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'color' },
  },
} satisfies Meta<typeof DateTime>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'DateTime',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
