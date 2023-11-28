import React, { memo } from 'react';
import memoize from 'memoize-one';
import { FixedSizeList as List, areEqual } from 'react-window';

const Row = memo(({ data, index, style }: any) => {
  const { items, toggleItemActive } = data;
  const item = items[index];
 
  return (
    <div
      onClick={() => toggleItemActive(index)}
      style={style}
      className="flex items-center p-1.5 text-black"
    >
      {item.label} / {item.isActive ? 'active' : 'inactive'}
    </div>
  );
}, areEqual);
 
const createItemData = memoize((items, toggleItemActive) => ({
  items,
  toggleItemActive,
}));

interface ListDataProps {
  height: number;
  width: number;
  size: number;
  items: any[];
  toggleItemActive: (index: number) => void;
}
 
export const ListData = ({ height, width, size, items, toggleItemActive }: ListDataProps) => {

  const itemData = createItemData(items, toggleItemActive);
 
  return (
    <>
      <List
        className="divide-y divide-gray-100"
        height={height}
        itemCount={items.length}
        itemData={itemData}
        itemSize={size}
        width={width}
      >
        {Row}
      </List>
    </>
  );
}
 