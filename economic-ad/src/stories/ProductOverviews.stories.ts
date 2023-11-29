import type { Meta, StoryObj } from '@storybook/react';
import { ProductOverviews } from './ProductOverviews';

const meta = {
  title: 'Example/ProductOverviews',
  component: ProductOverviews,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProductOverviews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
