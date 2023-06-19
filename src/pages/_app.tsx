import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/styles/custom.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import { AppContextProvider } from '@/contexts'
import Head from '@/components/Head'
import { seoConfig } from 'next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <DefaultSeo {...seoConfig} />
      <Head />
      <Component {...pageProps} />
    </AppContextProvider>
  )
}
