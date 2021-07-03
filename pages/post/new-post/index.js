import { Fragment } from 'react'
import axios from 'axios';
import NewPost from '../../../components/post/NewPost'


export default function NewPostPage() {

    const newPostHandler = async (postData) => {
            console.log("postData is",postData);

            const response = await axios({
                method: 'POST',
                url: '/api/new-post',
                data: JSON.stringify(postData),
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await response.json();
            console.log("response data is". data);
    }


    return (
            <NewPost 
                newPostHandler={newPostHandler}
            />
    )
    
}
