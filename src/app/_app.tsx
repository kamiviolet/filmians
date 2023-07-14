import type { AppProps } from 'next/app'
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content="A mock IMDB site to perform CRUD and allow users to check information about movies and TV series." />
            <title>Filmians</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
    </>
  )
}