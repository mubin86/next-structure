import Layout from '../components/layout/Layout'
import {Provider} from 'next-auth/client'
import '../styles/globals.css'
import Providers from 'next-auth/providers';

function MyApp({ Component, pageProps }) {
  const n=1;

  return (
    <Provider session={pageProps.session}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </Provider>
    
  )
  
}

export default MyApp
