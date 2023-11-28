import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ListData } from './ListData';

const generateItems = (numItems: number): any[] =>
  Array(numItems)
    .fill(true)
    .map(_ => ({
      isActive: false,
      label: Math.random()
        .toString(36)
        .substr(2),
    }));

const meta = {
  title: 'Example/ListData',
  component: ListData,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ListData>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//     args: {
//         height: 150,
//         width: 300,
//         items: generateItems(100),
//         toggleItemActive: () => {}
//     },
//   };

  
export const Primary = () => {
    const [items, setItems] = useState<any[]>(generateItems(100));

    const toggleItemActive = (index: number): void => {
        setItems((prevState: any[]) => {
            const item = prevState[index];
            const itemsState = prevState.concat();
            itemsState[index] = {
                ...item,
                isActive: !item.isActive,
            };
            return itemsState;
        })
    }

    return ListData({
        height: 300,
        width: 300,
        size: 20,
        items: items,
        toggleItemActive: toggleItemActive
    })
}