import Head from 'next/head';
import {Fragment} from 'react';
import Link from 'next/link';
import {signIn, signOut, useSession} from 'next-auth/client';

export default function index(props) {
  const [session, setSession] = useSession();
  return (
    <Fragment>
        <Head> 
            <title>Welcome Page</title>
            <meta name="description" 
                  content="Join us and connected with the community"
            />
        </Head>
        <main className ={}>
            {!session && (
              <div>
                <h2>Not signed in?</h2>
                <br />
                <button onClick={signIn}>Sign In</button>
                {/* this onClick signIn is built in methoed provided by next-auth */}
              </div>
            )}
            {
              session && (
                <div>
                  Signed in as {session.user.email}
                  <br />
                  <div>
                    You can now access all the available Posts
                  </div>
                  <button onClick ={signOut}>Sign Out</button>
                  {/* signOut is also built in method provided by next-auth  */}
                </div>
              )
            }
        </main>
    </Fragment>
        
  )
}

