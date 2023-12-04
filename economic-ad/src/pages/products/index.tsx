'use client'
// import FlowsComponent from '~/components/flows/FlowsComponent';
// import DndExample from '~/components/dragdrops/DndExample';
import  MainHome from '~views/boxs/main';
import { mainConfig } from '~configs/main.config';


function Index() {

  if(mainConfig) {
    return (
      <>
        {/* <FlowsComponent /> */}
        {/* <DndExample /> */}
        <MainHome />
      </>
    )

  }
}

export default Index;
