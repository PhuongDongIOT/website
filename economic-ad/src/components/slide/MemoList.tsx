'use client'
import { memo, useState } from 'react';
import { ListData } from '~stories/ListData';


const generateItems = (numItems: number): any[] =>
    Array(numItems)
        .fill(true)
        .map(_ => ({
            isActive: false,
            label: 'hihi',
        }));


const Index = memo(() => {
    const [items, setItems] = useState<any[]>(generateItems(1000));

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
})

export default Index;
