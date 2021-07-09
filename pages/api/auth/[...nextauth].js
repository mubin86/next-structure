import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options ={
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        // Providers.Email({
        //     server: {
        //         host: "",
        //         port: "",
        //         auth: {
        //             user: "",
        //             pass: ""
        //         }
        //     },
        //     from: "",
        // })

    ],
    // database: process.env.DATABASE_URL
}

export default (req, res) => NextAuth(req, res, options);
// we pass our options object to the built in NextAuth function as parameter with each req res so that we can access it later