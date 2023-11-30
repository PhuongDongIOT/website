import type { Meta, StoryObj } from '@storybook/react';

import { ListConference } from './ListTransparent';

const meta = {
  title: 'Example/ListConference',
  component: ListConference,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof ListConference>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
