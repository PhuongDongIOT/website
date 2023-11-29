import type { Meta, StoryObj } from '@storybook/react';
import { Avatars } from './Avatars';


const meta = {
    title: 'Example/Avatars',
    component: Avatars,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Avatars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};