import Head from 'next/head';
import {Fragment} from 'react';

export default function index(props) {
  return (
    <Fragment>
        <Head> 
            <title>Login Page</title>
            <meta name="description" 
                  content="Join us and connected with the community"
            />
        </Head>
        <h2 className="text-center">this will be the Login Page</h2>
    </Fragment>
        
  )
}

