import type { Meta, StoryObj } from '@storybook/react';
import { TimeLines } from './TimeLines';

const meta = {
  title: 'Example/TimeLines',
  component: TimeLines,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TimeLines>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
