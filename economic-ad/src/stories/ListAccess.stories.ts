import type { Meta, StoryObj } from '@storybook/react';

import { ListAccess } from './ListTransparent';

const meta = {
  title: 'Example/ListAccess',
  component: ListAccess,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof ListAccess>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
