
import {useRouter} from 'next/router';
import axios from 'axios';
import {Fragment} from 'react';
import Head from 'next/head';
import NewPost from '../../../components/post/NewPost'


export default function NewPostPage() {
    const router = useRouter();

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

            console.log("response from api is", response.data);
          //  const data = await response.data.json(); ///***WIP: ERROR OCCURING-> MINOR */

            router.push('/post');
    }

    return (
        <Fragment>
            <Head> 
                <title>Add a new Post</title>
                <meta name="description" 
                        content="Add your own Post and connected together"
                />
            </Head>
            <NewPost 
                newPostHandler={newPostHandler}
            />
        </Fragment>
    )
    
}
