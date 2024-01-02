import type { Meta, StoryObj } from '@storybook/react';
import { LoadingSkeleton } from './LoadingSkeleton';

const meta = {
  title: 'Example/LoadingSkeleton',
  component: LoadingSkeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LoadingSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;
  
export const Primary: Story = {
    args: {
      count: 13,
    },
};