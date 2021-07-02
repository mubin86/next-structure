import Layout from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const n=1;

  return (
    n==1 ?
    <Layout>
        <Component {...pageProps} />
    </Layout>: <Component {...pageProps} />

  )
  
}

export default MyApp
