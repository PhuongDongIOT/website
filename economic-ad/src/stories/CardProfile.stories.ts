import type { Meta, StoryObj } from '@storybook/react';
import { CardProfile } from './CardBlog';

const meta = {
  title: 'Example/CardProfile',
  component: CardProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof CardProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};