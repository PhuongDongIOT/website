import type { Meta, StoryObj } from '@storybook/react';

import { DndExample, Cards } from './DndExample';

const cardsData: Cards[] = [
    {
        id: 0,
        title: "Component Librarys",
        components: [
            {
                id: 100,
                name: "material ui"
            },
            {
                id: 200,
                name: "bootstrap"
            },
        ]
    },
    {
        id: 1,
        title: "Javascript Librarys",
        components: [
            {
                id: 300,
                name: "react"
            },
            {
                id: 400,
                name: "node"
            },
        ]
    },
    {
        id: 2,
        title: "react helping Librarys",
        components: [
            {
                id: 500,
                name: "redux"
            },
            {
                id: 600,
                name: "recoil"
            },
        ]
    },
    {
        id: 3,
        title: "react helping Librarys",
        components: [
            {
                id: 700,
                name: "Fluter"
            },
            {
                id: 800,
                name: "react beautyful dnd"
            },
        ]
    }
]

const meta = {
  title: 'Example/DndExample',
  component: DndExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof DndExample>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    cardsData: cardsData,
  },
};

