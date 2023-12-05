import type { Meta, StoryObj } from '@storybook/react';

import { ListPodcasts } from './ListPodcasts';

const meta = {
    title: 'Example/ListPodcasts',
    component: ListPodcasts,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ListPodcasts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
