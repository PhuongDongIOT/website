import type { Meta, StoryObj } from '@storybook/react';
import { CategoryPreviews } from './CategoryPreviews';

const meta = {
  title: 'Example/CategoryPreviews',
  component: CategoryPreviews,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CategoryPreviews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
