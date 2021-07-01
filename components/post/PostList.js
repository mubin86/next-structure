import React from 'react'
import PostItem from './PostItem'

export default function PostList({posts}) {
    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <PostItem 
                        key={post.id}
                        postId={post.id}
                        title={post.title}
                        description={post.description}
                    />
                ))}
            </ul>
        </div>
    )
}
