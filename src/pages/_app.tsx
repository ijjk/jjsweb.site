import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <title>JJ Kasper</title>
      </Head>
    </>
  )
}
