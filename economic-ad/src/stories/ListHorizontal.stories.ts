import type { Meta, StoryObj } from '@storybook/react';

import { ListHorizontal } from './ListTransparent';

const meta = {
  title: 'Example/ListHorizontal',
  component: ListHorizontal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof ListHorizontal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
