import type { Meta, StoryObj } from '@storybook/react';
import { CardsImageRound } from './Cards';

const meta = {
    title: 'Example/CardsImageRound',
    component: CardsImageRound,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CardsImageRound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
