import type { Meta, StoryObj } from '@storybook/react';
import { Blog } from './Blog';
import { CardBlogProps } from './CardBlog';

const cardBlogList :CardBlogProps[] = [
    {
        "width": "md:w-full",
        "date": "Dec 22, 2023",
        "cardTitle": "Meet AutoManage, the best AI management tools",
        "cardDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "image": "https://i.ibb.co/Cnwd4q6/image-01.jpg"
    },
    {
        "width": "md:w-full",
        "date": "Dec 22, 2023",
        "cardTitle": "Meet AutoManage, the best AI management tools",
        "cardDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "image": "https://i.ibb.co/Y23YC07/image-02.jpg"
    },
    {
        "width": "md:w-full",
        "date": "Dec 22, 2023",
        "cardTitle": "Meet AutoManage, the best AI management tools",
        "cardDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "image": "https://i.ibb.co/7jdcnwn/image-03.jpg"
    }
]

const meta = {
    title: 'Example/Blog',
    component: Blog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        cardBlogList: cardBlogList
    },
};