import type { Meta, StoryObj } from '@storybook/react';

import { DescriptionLists } from './DescriptionLists';

const meta = {
  title: 'Example/DescriptionLists',
  component: DescriptionLists,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof DescriptionLists>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
