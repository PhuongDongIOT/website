import type { Meta, StoryObj } from '@storybook/react';
import { StoreNavigation } from './StoreNavigation';

const meta = {
  title: 'Example/StoreNavigation',
  component: StoreNavigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof StoreNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    primary: true,
  },
};
