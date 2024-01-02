import type { Meta, StoryObj } from '@storybook/react';
import { CTASections } from './CTASections';

const meta = {
    title: 'Example/CTASections',
    component: CTASections,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CTASections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
