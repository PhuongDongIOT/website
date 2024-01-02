import type { Meta, StoryObj } from '@storybook/react';

import { FlyoutMenus } from './FlyoutMenus';

const meta = {
  title: 'Example/FlyoutMenus',
  component: FlyoutMenus,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof FlyoutMenus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
