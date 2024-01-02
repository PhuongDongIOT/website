'use client';

import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import RootLayout from '~layouts/RootLayout';
import '~styles/globals.css';

const queryClient = new QueryClient();

const MyApp = ({ Component,   pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      </RootLayout>
    </QueryClientProvider>
  )
}

export default MyApp
