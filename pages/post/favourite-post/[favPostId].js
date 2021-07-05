import {useRouter} from 'next/router';

export default function FavouritePost() {
    const router = useRouter();
    const {favPostId}=router.query;
    console.log("favourite postid is", favPostId);
    
    // return (
    //     <div>
    //         <h2>favourite postId is {favPostId}</h2>
    //     </div>
    // )
}
