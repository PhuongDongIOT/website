import type { Meta, StoryObj } from '@storybook/react';
import { Testimonials } from './Testimonials';

const meta = {
  title: 'Example/Testimonials',
  component: Testimonials,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
