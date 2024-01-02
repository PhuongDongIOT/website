'use client'

import  MainChat from '~views/chats/main';
import { mainConfig } from '~configs/main.config';


function Index() {

  if(mainConfig) {
    return (
      <>
        <MainChat />
      </>
    )

  }
}

export default Index;
