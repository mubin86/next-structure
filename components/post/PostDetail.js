

export default function PostDetail({postId, postTitle, postDescription}) {
    return (
    <div className="flex justify-center">
        <div className="max-w-md py-4 px-8 bg-gray-100 shadow-lg rounded-lg my-20">
            <div className="flex justify-center md:justify-end -mt-16">
                <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
            </div>
            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">{postTitle} is {postId}</h2>
                <p className="mt-2 text-gray-600">{postDescription}</p>
            </div>
            <div className="flex justify-end mt-4">
                <a href="#" className="text-xl font-medium text-indigo-500">Mubin</a>
            </div>
        </div>
    </div>
    )
}
