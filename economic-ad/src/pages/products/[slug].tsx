'use client'

import DetailProducts from '~views/products/detail';
import { mainConfig } from '~configs/main.config';


function Index() {

  if(mainConfig) {
    return (
      <>
        <DetailProducts />
      </>
    )

  }
}

export default Index;
