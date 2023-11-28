'use client'
import FlowsComponent from '~/components/flows/FlowsComponent';
import MemoList from '~components/slide/MemoList';
import DndExample from '~/components/dragdrops/DndExample';
import { mainConfig } from '~configs/main.config';


function Index() {

  if(mainConfig) {
    return (
      <>
        {/* <FlowsComponent /> */}
        <DndExample />
        {/* <MemoList /> */}
      </>
    )

  }
}

export default Index;
