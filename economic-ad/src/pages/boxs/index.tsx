'use client'

import  MainHome from '~views/boxs/main';
import { mainConfig } from '~configs/main.config';


function Index() {

  if(mainConfig) {
    return (
      <>
        <MainHome />
      </>
    )
  }
}

export default Index;
