import {useRouter} from 'next/router';
import PostItem from '../../../components/post/PostItem';

export default function SinglePost() {
    const router = useRouter();
    console.log(router.query.postId);
    const {postId} = router.query;
    
    return (
        <PostItem 
            postId={postId}
            postTitle={"postTitle DEMO"}
            postDescription={"postDescription DEMOOOOOOOO OOOOOOOOOOO OOOOO"}
        />
    )
}
