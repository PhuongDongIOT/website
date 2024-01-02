import type { Meta, StoryObj } from '@storybook/react';

import { ListTransparent } from './ListTransparent';

const meta = {
  title: 'Example/ListTransparent',
  component: ListTransparent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof ListTransparent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
