import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/styles/custom.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import { AppContextProvider } from '@/contexts'
import Head from '@/components/Head'
import { seoConfig } from 'next-seo.config';
import Navigation from '@/components/Layout/Navigation';
import WindowResizeHandler from '@/handlers/WindowResizeHandler';
import { client } from '@/api/graphql/queries';
import { ApolloProvider } from '@apollo/client';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AppContextProvider>
      <DefaultSeo {...seoConfig} />
      <WindowResizeHandler />
      {/* <Head /> */}
      <div className="max-w-screen overflow-hidden">
        {/* <Navigation /> */}
        <div className="bg-main min-h-screen min-w-screen llg:pt-nav pt-1">
          <div className="container min-h-nav">
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </div>
        </div>
      </div>
    </AppContextProvider>
  )
}
