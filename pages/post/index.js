import { Fragment } from 'react'
import Link from 'next/link'

const PostPage = () => {
    return (
        <Fragment>
        <h1>
            All the Posts from the students
        </h1>
        <br/>
        <ul>
            <li>
                <Link href='/post/7'> 
                    first post
                </Link>
            </li>
            <li>
                <Link href='/post/8'> 
                    Second post
                </Link>
            </li>
        </ul>
        </Fragment>
        
    );
}

export default PostPage;