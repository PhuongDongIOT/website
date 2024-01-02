import type { Meta, StoryObj } from '@storybook/react';
import { HeaderSections } from './HeaderSections';

const meta = {
  title: 'Example/HeaderSections',
  component: HeaderSections,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HeaderSections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
