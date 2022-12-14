import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/global.css'
import '../styles/tailwind.css'

function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>
          Send Crypto
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </>
  )
}

export default App
