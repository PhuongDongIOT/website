import type { Meta, StoryObj } from '@storybook/react';
import { NewsletterSectionsSample } from './NewsletterSections';

const meta = {
  title: 'Example/NewsletterSectionsSample',
  component: NewsletterSectionsSample,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NewsletterSectionsSample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
