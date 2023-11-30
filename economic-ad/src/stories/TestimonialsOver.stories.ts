import type { Meta, StoryObj } from '@storybook/react';
import { TestimonialsOver } from './Testimonials';

const meta = {
  title: 'Example/TestimonialsOver',
  component: TestimonialsOver,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TestimonialsOver>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
