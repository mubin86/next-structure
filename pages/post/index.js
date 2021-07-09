import {MongoClient} from 'mongodb'; //it will included in server side bundle in build time, so no security issue
// import Link from 'next/link';
import {Fragment} from 'react';
import Head from 'next/head';
import PostList from '../../components/post/PostList';


// const DUMMY_POSTS = [
//     {
//         id: 3,
//         title: "first title",
//         description: "this is the first description........."
//     },
//     {
//         id: 4,
//         title: "second title",
//         description: "this is the second description........."
//     },
//     {
//         id: 5,
//         title: "third title",
//         description: "this is the third description........."
//     }
// ];

export default function PostPage({post}) {
    return (
        // <Fragment>
        // <h1>
        //     All the Posts from the students
        // </h1>
        // <br/>
        // <ul>
        //     <li>
        //         <Link href='/post/7'> 
        //             first post
        //         </Link>
        //     </li>
        //     <li>
        //         <Link href='/post/8'> 
        //             Second post
        //         </Link>
        //     </li>
        // </ul>
        // </Fragment>
        
        <Fragment>
            <Head> 
                <title>All the Post</title>
                <meta name="description" 
                        content="All the Post is available from all of your network"
                />
            </Head>
            <PostList 
                posts={post}
            />
        </Fragment>
        
        
    );
}

//specially useful for personal blog related project
export async function getStaticProps(context) { //works on build time //**this will pre genrate a HTML file and stored and served by a CDN so it is realtively faster// 
    //console.log("hello from get static props", context);

    //****fetch('/api/posts',)  //we can send the request but instead of sending a request we can do the task directly here, so it will reduce the unenecessary request***

    const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gjv0d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
    const db = client.db();
    const postCollection = db.collection('posts');

    const posts = await postCollection.find().sort( { createdAt: -1 } ).toArray();

    client.close();

    return {
        props: {
            post: posts.map(post => ({
                title: post.title,
                description: post.description,
                id: post._id.toString()
            }))
        },
        revalidate: 1 //****regenearted on the server in every 3 seconds if any request come in this page, so get the updated data after every 3 seconds****
    };
}

//not useful for my case
// export async function getServerSideProps(context){ //****this will be run on the server after deployment in every incoming request on the fly****
//     //****8this function only work in the server, never client-side, so can useful for credential related matter because it will never expose outside the world*******
    
//     const req = context.req; //****this can be useful for authentication staff etc......***
//     const res = context.res;

//     return {
//                 props: {
//                     post: DUMMY_POSTS
//                 }
//             };
// }