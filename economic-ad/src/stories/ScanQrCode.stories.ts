import type { Meta, StoryObj } from '@storybook/react';
import { ScanQrCode } from './ScanQrCode';

const meta = {
    title: 'Example/ScanQrCode',
    component: ScanQrCode,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ScanQrCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: 'text'
    },
};
