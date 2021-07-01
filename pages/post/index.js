import { Fragment } from 'react'
import Link from 'next/link'
import PostList from '../../components/post/PostList'

const posts = [
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

]

const PostPage = () => {
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
            posts={posts}
        />
        
    );
}

export default PostPage;