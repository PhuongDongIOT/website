import type { Meta, StoryObj } from '@storybook/react';
import { ProductFeatures } from './ProductFeatures';

const meta = {
  title: 'Example/ProductFeatures',
  component: ProductFeatures,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProductFeatures>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
