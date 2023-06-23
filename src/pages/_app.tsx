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
import Footer from '@/components/Layout/Footer';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AppContextProvider>
      <DefaultSeo {...seoConfig} />
      <WindowResizeHandler />
      <Head />
      <div className="max-w-screen overflow-hidden">
        <Navigation />
        <div className={`bg-main min-h-screen min-w-screen llg:pt-nav pt-1`}>
          <div className="min-h-nav">
            <Component {...pageProps} />
          </div>
        </div>
        <Footer />
      </div>
    </AppContextProvider>
  )
}
