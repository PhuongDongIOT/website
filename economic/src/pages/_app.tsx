import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react";

import RootLayout from '~layout/RootLayout';
import '~style/globals.css';

const MyApp = ({ Component,   pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>

  )
}

MyApp.getLayout = (page: AppProps) => (
  <RootLayout {...page}>
  </RootLayout>
);

export default MyApp
