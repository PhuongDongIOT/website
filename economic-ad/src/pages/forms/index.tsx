'use client';

import  MainForm from '~views/forms/main';
import { mainConfig } from '~configs/main.config';
import { Api } from '~helpers/https/apis';

const handleOnSubmitIndex = async (data: any) => {
  const apis: Api = new Api();
  const response: any  = apis.post('/api/user', {user: data})
  console.log(response)
}

function Index() {

  if(mainConfig) {
    return (
      <>
        <MainForm handleOnSubmitIndex={handleOnSubmitIndex} />
      </>
    )
  }
}

export default Index;
