import type { Meta, StoryObj } from '@storybook/react';
import { Modals } from './Modals';

const meta = {
  title: 'Example/Modals',
  component: Modals,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Modals>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
