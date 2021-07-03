
// import Link from 'next/link'
import PostList from '../../components/post/PostList';

const DUMMY_POSTS = [
    {
        id: 3,
        title: "first title",
        description: "this is the first description........."
    },
    {
        id: 4,
        title: "second title",
        description: "this is the second description........."
    },
    {
        id: 5,
        title: "third title",
        description: "this is the third description........."
    }
];

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

        <PostList 
            posts={post}
        />
        
    );
}

//specially useful for personal blog related project
export async function getStaticProps(context) { //works on build time //**this will pre genrate a HTML file and stored and served by a CDN so it is realtively faster// 
    console.log("hello from get static props", context);
    return {
        props: {
            post: DUMMY_POSTS
        },
        revalidate: 3 //****regenearted on the server in every 3 seconds if any request come in this page, so get the updated data after every 3 seconds****
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