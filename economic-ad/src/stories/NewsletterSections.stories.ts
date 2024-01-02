import type { Meta, StoryObj } from '@storybook/react';
import { NewsletterSections } from './NewsletterSections';

const meta = {
  title: 'Example/NewsletterSections',
  component: NewsletterSections,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NewsletterSections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
