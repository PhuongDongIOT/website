import type { Meta, StoryObj } from '@storybook/react';
import { CategoryFilters } from './CategoryFilters';

const meta = {
    title: 'Example/CategoryFilters',
    component: CategoryFilters,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CategoryFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
