import Head from 'next/head'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from '../components/layout'
import { TransactionContextProvider } from '../context/TransactionContext'
import '../styles/global.css'
import '../styles/tailwind.css'

function App({ Component, pageProps }: any) {
  // on refresh scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <TransactionContextProvider>
      <Head>
        <title>
          Craze Art
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TransactionContextProvider>
  )
}

export default App
