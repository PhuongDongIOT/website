import type { Meta, StoryObj } from '@storybook/react';
import { CardsImageBackground } from './Cards';

const meta = {
    title: 'Example/CardsImageBackground',
    component: CardsImageBackground,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CardsImageBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
