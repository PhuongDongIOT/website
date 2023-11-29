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
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof DndExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    cardsData: cardsData,
  },
};

