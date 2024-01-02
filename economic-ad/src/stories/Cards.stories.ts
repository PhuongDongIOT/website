import type { Meta, StoryObj } from '@storybook/react';
import { Cards } from './Cards';

const meta = {
  title: 'Example/Cards',
  component: Cards,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Cards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};