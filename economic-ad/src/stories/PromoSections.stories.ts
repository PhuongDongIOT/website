import type { Meta, StoryObj } from '@storybook/react';
import { PromoSections } from './PromoSections';

const meta = {
    title: 'Example/PromoSections',
    component: PromoSections,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof PromoSections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
