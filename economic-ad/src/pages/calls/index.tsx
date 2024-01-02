'use client'

import MainCall from '~views/calls/main';
import { mainConfig } from '~configs/main.config';


function Index() {

  if(mainConfig) {
    return (
      <>
        <MainCall />
      </>
    )
  }
}

export default Index;
