
import PostItem from './PostItem'

export default function PostList({posts, favourite}) {
    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <PostItem 
                        key={post.id}
                        postId={post.id}
                        title={post.title}
                        description={post.description}
                        favourite={favourite}
                    />
                ))}
            </ul>
        </div>
    )
}
