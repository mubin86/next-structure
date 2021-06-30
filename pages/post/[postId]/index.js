import {useRouter} from 'next/router';

export default function RandomGame() {
    const router = useRouter();
    console.log(router.query.postId);
    const postId = router.query.postId;
    
    return (
        <div>
            <h1>postId is {postId}</h1>
            
        </div>
    )
}
