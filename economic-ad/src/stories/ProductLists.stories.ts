import type { Meta, StoryObj } from '@storybook/react';
import { ProductLists } from './ProductLists';

const meta = {
  title: 'Example/ProductLists',
  component: ProductLists,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProductLists>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
