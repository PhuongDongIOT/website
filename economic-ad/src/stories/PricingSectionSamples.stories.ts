import type { Meta, StoryObj } from '@storybook/react';
import { PricingSectionSamples } from './PricingSections';

const meta = {
  title: 'Example/PricingSectionSamples',
  component: PricingSectionSamples,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PricingSectionSamples>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
