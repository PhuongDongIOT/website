import type { Meta, StoryObj } from '@storybook/react';
import { SignInSample } from './SignIn';

const meta = {
  title: 'Example/SignInSample',
  component: SignInSample,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SignInSample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
