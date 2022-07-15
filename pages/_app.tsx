import '../styles/globals.css'
import Layout from './components/Layout'
import type { AppProps } from 'next/app'
import { UrbisContextProvider } from './context/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UrbisContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UrbisContextProvider>
  )
}

export default MyApp
