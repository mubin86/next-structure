
import {useSession, getSession} from 'next-auth/client';
import {Fragment} from 'react'

export default function secret({verifySession}) {
    const [session, loading] = useSession();//not used at this moment but will find its useCase
    return (
        <Fragment>
            {verifySession ? <h2>
                The User id verfied
            </h2>:
            <h2>The User is not Verified</h2>  }
        </Fragment>
    )
}




export async function getServerSideProps(context){ //****this will be run on the server after deployment in every incoming request on the fly****
    //****sthis function only work in the server, never client-side, so can useful for credential related matter because it will never expose outside the world*******
    
    const req = context.req; //****this can be useful for authentication staff etc......***
    const res = context.res;

    const session = await getSession({req}); // this means if the request has session or not

    if(session){
            return {
                props: {
                    verifySession: true
                }
            };
    }else{
            return {
                props: {
                    verifySession: false
                }
            };
    }
}