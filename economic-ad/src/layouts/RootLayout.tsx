
'use client';

import React/*, { useEffect }*/ from 'react';
// import { PersistGate } from 'redux-persist/integration/react';
// import { useStore, Provider } from 'react-redux';
// import { ReduxStore, reduxWrapper, createReduxStore } from '~redux/store';
// import userSlice from '~redux/features/userSlice';
// import { IS_DEV } from '~constants/article-const';
import Providers from '~redux/provider';


function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    // const reduxStore = useStore();
    
    // useEffect(
    //   () => {
    //     reduxStore.dispatch(userSlice.actions.visitRequest());
    //   },
    //   [reduxStore],
    // );
    return (
      <Providers>
        {children}
      </Providers>
    )
  }

  export default RootLayout;