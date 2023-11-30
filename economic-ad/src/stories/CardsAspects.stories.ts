import type { Meta, StoryObj } from '@storybook/react';
import { CardsAspects } from './Cards';

const meta = {
    title: 'Example/CardsAspects',
    component: CardsAspects,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CardsAspects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
