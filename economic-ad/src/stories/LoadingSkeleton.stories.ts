import type { Meta, StoryObj } from '@storybook/react';
import { LoadingSkeleton } from './LoadingSkeleton';

const meta = {
  title: 'Example/LoadingSkeleton',
  component: LoadingSkeleton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
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