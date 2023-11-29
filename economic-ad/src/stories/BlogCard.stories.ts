import type { Meta, StoryObj } from '@storybook/react';
import { BlogCard } from './BlogCard';

const meta = {
  title: 'Example/BlogCard',
  component: BlogCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof BlogCard>;

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