import React, { useEffect, useState } from 'react';
import { Column, Table, AutoSizer } from 'react-virtualized';

export const TableListData = () => {

    const [arr, setArr] = React.useState<any[]>([]);

    useEffect(() => {
        for (let i = 0; i < 1000; i++) {
          setArr((prevArr: any) => [...prevArr, { number: i, name: 'uwu' }]);
        }
      }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div style={{ height: '80vh', width: '90%' }}>
        <AutoSizer>
          {({ height, width }) => (
            <Table
              gridStyle={{ outline: 'none' }}
              width={width}
              height={height}
              headerHeight={20}
              rowHeight={70}
              rowCount={arr.length}
              rowGetter={({ index }) => arr[index]}>
              <Column width={200} label="Number" dataKey="number" />
              <Column width={200} label="Name" dataKey="name" />
            </Table>
          )}
        </AutoSizer>
      </div>
    </div>
  );
}
