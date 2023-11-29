import type { Meta, StoryObj } from '@storybook/react';
import { LogoClouds } from './LogoClouds';

const meta = {
  title: 'Example/LogoClouds',
  component: LogoClouds,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LogoClouds>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
