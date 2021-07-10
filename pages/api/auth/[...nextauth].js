import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options ={
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Providers.Auth0({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            domain: process.env.AUTH0_CLIENT_DOMAIN,
            // responseType: 'code'
        }),
        Providers.Email({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM
        })
    ],
    database: process.env.DATABASE_URL
}

export default (req, res) => NextAuth(req, res, options);
// we pass our options object to the built in NextAuth function as parameter with each req res so that we can access it later