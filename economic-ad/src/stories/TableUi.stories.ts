import type { Meta, StoryObj } from '@storybook/react';
import { TableUi } from './TableUi';

const meta = {
  title: 'Example/TableUi',
  component: TableUi,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TableUi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    primary: true,
  },
};
