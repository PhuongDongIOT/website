import type { Meta, StoryObj } from '@storybook/react';
import { CardsHorizontal } from './Cards';

const meta = {
    title: 'Example/CardsHorizontal',
    component: CardsHorizontal,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CardsHorizontal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
