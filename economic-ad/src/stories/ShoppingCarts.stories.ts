import type { Meta, StoryObj } from '@storybook/react';
import { ShoppingCarts } from './ShoppingCarts';

const meta = {
  title: 'Example/ShoppingCarts',
  component: ShoppingCarts,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ShoppingCarts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
