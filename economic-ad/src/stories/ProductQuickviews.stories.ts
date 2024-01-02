import type { Meta, StoryObj } from '@storybook/react';
import { ProductQuickviews } from './ProductQuickviews';

const meta = {
  title: 'Example/ProductQuickviews',
  component: ProductQuickviews,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProductQuickviews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
