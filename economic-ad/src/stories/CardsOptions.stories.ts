import type { Meta, StoryObj } from '@storybook/react';
import { CardsOptions } from './Cards';

const meta = {
    title: 'Example/CardsOptions',
    component: CardsOptions,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CardsOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
