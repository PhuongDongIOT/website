'use client';

import type { AppProps } from 'next/app';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ClerkProvider } from '@clerk/nextjs';

import RootLayout from '~layouts/RootLayout';
import '~styles/globals.css';


const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <ClerkProvider {...pageProps} >
          <Component {...pageProps} />
        </ClerkProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </RootLayout>
    </QueryClientProvider>
  )
}

export default MyApp
