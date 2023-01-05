import Head from 'next/head'
import Layout from '../components/layout'
import { TransactionContextProvider } from '../context/TransactionContext'
import '../styles/global.css'
import '../styles/tailwind.css'

function App({ Component, pageProps }: any) {
  return (
    <TransactionContextProvider>
      <Head>
        <title>
          Craze Art
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TransactionContextProvider>
  )
}

export default App
