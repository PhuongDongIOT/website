'use client'

import  MainReview from '~views/reviews/main';
import { mainConfig } from '~configs/main.config';


function Index() {

  if(mainConfig) {
    return (
      <>
        <MainReview  />
      </>
    )

  }
}

export default Index;
