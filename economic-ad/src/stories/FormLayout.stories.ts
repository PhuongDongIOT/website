import type { Meta, StoryObj } from '@storybook/react';

import { FormLayout } from './FormLayout';

const meta = {
  title: 'Example/FormLayout',
  component: FormLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof FormLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
