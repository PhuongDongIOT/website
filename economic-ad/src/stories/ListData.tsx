import React, { memo } from 'react';
import memoize from 'memoize-one';
import { FixedSizeList as List, areEqual } from 'react-window';

const Row = memo(({ data, index, style }: any) => {
  const { items, collumns, toggleItemActive } = data;
  const item = items[index];

  const components: React.ReactNode = collumns ?
    (
      <div
        onClick={() => toggleItemActive(index)}
        style={style}
        className="flex items-center p-1.5 text-black"
      >
        {item.label} / {item.isActive ? 'active' : 'inactive'}
      </div>
    ) : (
      <div
        onClick={() => toggleItemActive(index)}
        style={style}
        className="flex flex-wrap items-center p-1.5 text-black"
      >

        <h1 className="flex-auto text-lg font-semibold text-slate-900">
          {item.label}
        </h1>
        <div className="text-lg font-semibold text-slate-500">
          / {item.isActive ? 'active' : 'inactive'}
        </div>
      </div>
    );

  return components


}, areEqual);

const createItemData = memoize((items, collumns, toggleItemActive) => ({
  items,
  collumns,
  toggleItemActive,
}));

interface ListDataProps {
  height: number;
  width: number;
  size: number;
  collumns?: any[]
  items: any[];
  toggleItemActive: (index: number) => void;
}

export const ListData = ({ height, width, size, items, collumns, toggleItemActive }: ListDataProps) => {

  const itemData = createItemData(items, collumns, toggleItemActive);

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
