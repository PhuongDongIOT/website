import type { Meta, StoryObj } from '@storybook/react';
import { Player } from './Player';

const meta = {
    title: 'Example/Player',
    component: Player,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Player>;

export default meta;
type Story = StoryObj<typeof meta>;

const videoJsOptions = {
    techOrder: ['youtube'],
    autoplay: false,
    controls: true,
    sources: [
        {
            src: 'https://www.youtube.com/watch?v=IxQB14xVas0',
            type: 'video/youtube',
        },
    ],
}

export const Primary: Story = {
    args: {
        ...videoJsOptions
    },
};
