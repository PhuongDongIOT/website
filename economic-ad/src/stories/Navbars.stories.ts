import type { Meta, StoryObj } from '@storybook/react';
import { Navbars } from './Navbars';

const meta = {
  title: 'Example/Navbars',
  component: Navbars,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Navbars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
