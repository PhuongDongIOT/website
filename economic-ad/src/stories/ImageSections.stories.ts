import type { Meta, StoryObj } from '@storybook/react';
import { ImageSections } from './ContentSections';

const meta = {
  title: 'Example/ImageSections',
  component: ImageSections,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ImageSections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
