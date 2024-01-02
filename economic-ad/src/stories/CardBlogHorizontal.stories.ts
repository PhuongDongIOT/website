import type { Meta, StoryObj } from '@storybook/react';
import { CardBlogHorizontal } from './CardBlog';

const meta = {
  title: 'Example/CardBlogHorizontal',
  component: CardBlogHorizontal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof CardBlogHorizontal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};