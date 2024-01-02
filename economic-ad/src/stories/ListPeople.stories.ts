import type { Meta, StoryObj } from '@storybook/react';

import { ListPeople } from './ListPeople';

const meta = {
  title: 'Example/ListPeople',
  component: ListPeople,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof ListPeople>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
