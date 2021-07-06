import {MongoClient} from 'mongodb'; //it will included in server side bundle in build time, so no security issue
// import Link from 'next/link';
import {Fragment} from 'react';
import Head from 'next/head';
import PostList from '../../../components/post/PostList';


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
                <title>Favourite Post</title>
                <meta name="description" 
                        content="All of your marked Favourite Post"
                />
            </Head>
            <PostList
                posts={post}
                favourite={true}
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

    const posts = await postCollection.find({ favourite: true}).sort( { createdAt: -1 } ).toArray();

    client.close();

    return {
        props: {
            post: posts.map(post => ({
                title: post.title,
                description: post.description,
                id: post._id.toString()
            }))
        },
        revalidate: 3 //****regenearted on the server in every 3 seconds if any request come in this page, so get the updated data after every 3 seconds****
    };
}
