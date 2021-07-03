import {useRouter} from 'next/router';
import {Fragment} from 'react';
import Head from 'next/head';
import {MongoClient, ObjectId} from 'mongodb';
import PostDetail from '../../../components/post/PostDetail';
import PostItem from '../../../components/post/PostItem';

export default function SinglePost({postData}) {
    //const router = useRouter();
    //console.log(router.query.postId);
    //const {postId} = router.query;
    
    return (
        // <PostItem 
        //     postId={postId}
        //     postTitle={"postTitle DEMO"}
        //     postDescription={"postDescription DEMOOOOOOOO OOOOOOOOOOO OOOOO"}
        // />

        <Fragment>
            <Head> 
                <title>{postData.postTitle}</title>
                <meta name="description" 
                    content={postData.postDescription}
                />
            </Head>
            <PostDetail 
                postId={postData.postId}
                postTitle={postData.postTitle}
                postDescription={postData.postDescription}
            />
        </Fragment>
    )
}

export async function getStaticPaths(){ //**works for dynamic content***defines all the postIds for which the getstaticprops will pregenrate page content, if we put a postId out of this scope we will get a 404***
    const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gjv0d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
    const db = client.db();
    const postCollection = db.collection('posts');

    const posts = await postCollection.find({}, { _id: 1 }).toArray();
    client.close();
    
    return {
        fallback: false, //false means if a user entered postId 5(out of this below scope) he will get a 404 and 
                         //true means ther can be any other postId and therefore, in that case nextjs will try to genrate that postId on the server on the fly
        paths: posts.map(post => ({
            params: {
                postId: post._id.toString()
            }
        })) 
        
        // [
        //     {
        //         params: {
        //             postId: '3'
        //         }
        //     },
        //     {
        //         params: {
        //             postId: '4'
        //         }
        //     },
        //     {
        //         params: {
        //             postId: '5'
        //         }
        //     }
        // ],
        
    }
}

export async function getStaticProps(context) { //this means this page is pre genrated during the build process//
    //console.log("context from specific post is", context);
    const postId = context.params.postId;

    const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gjv0d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
    const db = client.db();
    const postCollection = db.collection('posts');

    const post = await postCollection.findOne({ _id: ObjectId(postId) });
    client.close();

    return {
        props: {
            postData: {
                postId: post._id.toString(), // or postId(which getting from context) ==>same thing
                postTitle: post.title,
                postDescription: post.description
            }
        }
    }
}

