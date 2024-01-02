import type { Meta, StoryObj } from '@storybook/react';
import { TableListData } from './TableListData';

const meta = {
  title: 'Example/TableListData',
  component: TableListData,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TableListData>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    primary: true,
  },
};
