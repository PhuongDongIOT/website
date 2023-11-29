import type { Meta, StoryObj } from '@storybook/react';
import { ContactSections } from './ContactSections';

const meta = {
    title: 'Example/ContactSections',
    component: ContactSections,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ContactSections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
