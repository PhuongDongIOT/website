import type { Meta, StoryObj } from '@storybook/react';
import { TeamSections } from './TeamSections';

const meta = {
  title: 'Example/TeamSections',
  component: TeamSections,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TeamSections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
