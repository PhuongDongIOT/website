import type { Meta, StoryObj } from '@storybook/react';

import { DrawChart } from './DrawChart';

const meta = {
    title: 'Example/DrawChart',
    component: DrawChart,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof DrawChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};

