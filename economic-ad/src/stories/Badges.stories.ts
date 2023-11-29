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

export const Primary: Story = {
    args: {
    },
};