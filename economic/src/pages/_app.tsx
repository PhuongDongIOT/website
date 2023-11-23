import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import RootLayout from '~layout/RootLayout';
import '~style/globals.css';

const queryClient = new QueryClient();

const MyApp = ({ Component,   pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

MyApp.getLayout = (page: AppProps) => (
  <RootLayout {...page}>
  </RootLayout>
);

export default MyApp
