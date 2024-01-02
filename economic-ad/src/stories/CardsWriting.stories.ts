import type { Meta, StoryObj } from '@storybook/react';
import { CardsWriting } from './Cards';

const meta = {
    title: 'Example/CardsWriting',
    component: CardsWriting,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CardsWriting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
