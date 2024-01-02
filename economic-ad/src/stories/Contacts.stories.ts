import type { Meta, StoryObj } from '@storybook/react';

import { Contacts } from './Contacts';

const meta = {
  title: 'Example/Contacts',
  component: Contacts,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Contacts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
