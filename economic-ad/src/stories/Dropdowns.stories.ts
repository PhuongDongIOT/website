import type { Meta, StoryObj } from '@storybook/react';
import { Dropdowns } from './Dropdowns';

const meta = {
  title: 'Example/Dropdowns',
  component: Dropdowns,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Dropdowns>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
