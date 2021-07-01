import { Fragment } from 'react'
import NewPost from '../../../components/post/NewPost'


export default function NewPostPage() {

    const newPostHandler = (postData) => {
            console.log("postData is",postData);
    }


    return (
            <NewPost 
                newPostHandler={newPostHandler}
            />
    )
    
}
