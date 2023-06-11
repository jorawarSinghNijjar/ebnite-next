import Header from '@/components/layout/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Head>
    <title>Ebnite</title>
    <meta name="description" content="web app development, software development, crm development" />
    <meta name="author" content="Ebnite"></meta>
  </Head>
  <Header />
  <Component {...pageProps} />
  </>
}
