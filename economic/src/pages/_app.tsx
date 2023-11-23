/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from "react-redux";
import { wrapper } from "~redux/store";

import RootLayout from '~layout/RootLayout';
import '~style/globals.css';

const MyApp = ({ Component,   ...rest }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const { store, props } = wrapper.useWrappedStore(rest);
  const { emotionCache , pageProps } = props;
  const { session } = pageProps;
  
  return (
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </Provider>
  )
}

MyApp.getLayout = (page: AppProps) => (
  <RootLayout {...page}>
  </RootLayout>
);

export default MyApp;
