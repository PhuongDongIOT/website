import type { Meta, StoryObj } from '@storybook/react';
import { Avatars } from './Avatars';


const meta = {
    title: 'Example/Avatars',
    component: Avatars,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Avatars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rounder: Story = {
    args: {        
        isRounder: true,
        srcImage: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
};

export const Equal: Story = {
    args: {
        srcImage: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
};

export const Size: Story = {
    args: {
        size: 12,
        srcImage: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
};