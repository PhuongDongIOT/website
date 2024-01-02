import type { Meta, StoryObj } from '@storybook/react';
import { Banners } from './Banners';


const meta = {
    title: 'Example/Banners',
    component: Banners,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Banners>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};