import type { Meta, StoryObj } from '@storybook/react';
import { Badges } from './Badges';


const meta = {
    title: 'Example/Badges',
    component: Badges,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Badges>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = {
    args: {
    },
};

export const Gray: Story = {
    args: {
        color: 'gray'
    },
};

export const Red: Story = {
    args: {
        color: 'red'
    },
};

export const Green: Story = {
    args: {
        color: 'green'
    },
};

export const Pink: Story = {
    args: {
        color: 'pink'
    },
};

export const Purple: Story = {
    args: {
        color: 'purple'
    },
};

export const Indigo: Story = {
    args: {
        color: 'indigo'
    },
};