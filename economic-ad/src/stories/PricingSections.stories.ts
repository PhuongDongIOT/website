import type { Meta, StoryObj } from '@storybook/react';
import { PricingSections } from './PricingSections';

const meta = {
  title: 'Example/PricingSections',
  component: PricingSections,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PricingSections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
