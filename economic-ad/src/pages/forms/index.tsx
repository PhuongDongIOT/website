'use client'

import  MainForm from '~views/forms/main';
import { mainConfig } from '~configs/main.config';


function Index() {

  if(mainConfig) {
    return (
      <>
        <MainForm  />
      </>
    )

  }
}

export default Index;
