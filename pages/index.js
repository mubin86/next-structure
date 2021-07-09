import Head from 'next/head';
import {Fragment} from 'react';
import Link from 'next/link';
import {signIn, signOut, useSession} from 'next-auth/client';

export default function index(props) {
  const [session, loading] = useSession();
  return (
    <Fragment>
        <Head> 
            <title>Welcome Page</title>
            <meta name="description" 
                  content="Join us and connected with the community"
            />
        </Head>
        <main style={{}}>
            {!session && (
              <div>
                <h2 style={{color: 'grey', textAlign: 'center', color: 'darkgray', fontSize: '20px'}}>Not signed in?</h2>
                <br />
                <div style={{color: 'grey', textAlign: 'center', fontSize: '25px'}}>
                  <button onClick={signIn}>Click here to Sign In</button>
                </div>
                {/* this onClick signIn is built in methoed provided by next-auth */}
              </div>
            )}
            {
              session && (
                // console.log("email is ",{session.user.email})
                <div>
                  <div style={{color: 'grey', textAlign: 'center', fontSize: '25px'}}>
                    Signed in as {session.user.name}
                  </div>
                  <br />
                  <div style={{color: 'grey', textAlign: 'center', fontSize: '25px'}}>
                    You can now access all the available Posts
                  </div>
                  <br />
                  <div style={{color: 'grey', textAlign: 'center', fontSize: '25px'}}>
                    <Link href='/api/secret'>Session is verified so can go the Secret Page</Link>
                  </div>
                  <br />
                  <div style={{color: 'grey', textAlign: 'center', fontSize: '25px'}}>
                    <button onClick ={signOut}>Sign Out</button>
                  </div>
                  {/* signOut is also built in method provided by next-auth  */}
                </div>
              )
            }
        </main>
    </Fragment>
        
  )
}

