import type { Meta, StoryObj } from '@storybook/react';
import { SlideOvers } from './SlideOvers';

const meta = {
  title: 'Example/SlideOvers',
  component: SlideOvers,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SlideOvers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    primary: true,
  },
};
