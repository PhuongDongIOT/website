import type { Meta, StoryObj } from '@storybook/react';
import { Pages404 } from './Pages404';

const meta = {
  title: 'Example/Pages404',
  component: Pages404,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Pages404>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
