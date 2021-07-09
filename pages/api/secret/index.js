//**** this API is redundant***, this thing can be done in the getServerSideProps of any component bcz we have access the req object in it and hence we can verify the session of the each reuest********* */

import {getSession} from 'next-auth/client';


export default async (req, res) => {
    const session = await getSession({req}); // this means if the request has session or not

    if(session){
        res.status(200).json({
            content: "Welcome to the secret page"
        })
    }else{
        res.status(401).json({
            content: "You need to be Signed In"
        })
    }
}