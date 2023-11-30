import type { Meta, StoryObj } from '@storybook/react';
import { CardBlog } from './CardBlog';

const meta = {
  title: 'Example/CardBlog',
  component: CardBlog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof CardBlog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: "md:w-1/2",
    date: "Dec 22, 2023",
    cardTitle: "Meet AutoManage, the best AI management tools",
    cardDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://i.ibb.co/7jdcnwn/image-03.jpg",
  },
};