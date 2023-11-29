import type { Meta, StoryObj } from '@storybook/react';
import { ContentSections } from './ContentSections';

const meta = {
    title: 'Example/ContentSections',
    component: ContentSections,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ContentSections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
