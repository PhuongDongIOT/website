import type { Meta, StoryObj } from '@storybook/react';
import { Bookmark } from './Bookmark';

const meta = {
  title: 'Example/Bookmark',
  component: Bookmark,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Bookmark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};