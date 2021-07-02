import {useRouter} from 'next/router';
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
        <PostDetail 
            postId={postData.postId}
            postTitle={postData.postTitle}
            postDescription={postData.postDescription}
        />
    )
}

export async function getStaticPaths(){ //**works for dynamic content***defines all the postIds for which the getstaticprops will pregenrate page content, if we put a postId out of this scope we will get a 404***
    return {
        fallback: false, //false means if a user entered postId 5(out of this below scope) he will get a 404 and 
        //true means ther can be any other postId and therefore, in that case nextjs will try to genrate that postId on the server on the fly
        paths: [
            {
                params: {
                    postId: '3'
                }
            },
            {
                params: {
                    postId: '4'
                }
            }
        ],
        
    }
}

export async function getStaticProps(context) { //this means this page is pre genrated during the build process//
    console.log("context from specific post is", context);
    const postId = context.params.postId;
    return {
        props: {
            postData: {
                postId: postId,
                postTitle: "postTitle DEMO",
                postDescription: "postDescription DEMOOOOOOOO OOOOOOOOOOO OOOOO"
            }
        }
    }
}

