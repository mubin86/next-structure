
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

export async function getStaticProps(context) {
    console.log("hello from get static props", context);
    return {
        props: {
            post: DUMMY_POSTS
        }
    };
}