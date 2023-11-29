import type { Meta, StoryObj } from '@storybook/react';
import { HeroSections } from './HeroSections';

const meta = {
  title: 'Example/HeroSections',
  component: HeroSections,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HeroSections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
