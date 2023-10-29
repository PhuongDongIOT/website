import type { AppProps } from 'next/app'

import RootLayout from 'Layout/RootLayout';
import 'Style/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <Component {...pageProps} />
  )
}

MyApp.getLayout = (page: AppProps) => (
  <RootLayout {...page}>
  </RootLayout>
);

export default MyApp
