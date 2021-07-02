
// import Link from 'next/link'
import PostList from '../../components/post/PostList';
import {GetStaticProps} from 'next';




export default function PostPage({posts}) {
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


