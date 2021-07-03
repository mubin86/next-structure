
import { useRouter } from 'next/router';

export default function PostItem({postId, title, description}) {
    const router = useRouter();
    const showDetailsHandler = () => {
        router.push('/post/' + postId);
    }

    return (
        <div className="flex justify-center">
        <div className="max-w-md py-4 px-8 bg-gray-100 shadow-lg rounded-lg my-12">
            <div className="flex justify-center md:justify-end -mt-16">
                <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
            </div>
            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">{title} and _id is {postId}</h2>
                {/* <p className="mt-2 text-gray-600">{description}</p> */}
            </div>
            <div className="flex justify-end mt-4">
                <a href="#" className="text-xl font-medium text-indigo-500">John Doe</a>
            </div>
            
            <div className="flex justify-end mt-4">
                {/* can Use Link instead of Button */}
                <button onClick={showDetailsHandler} className="block w-full bg-purple-400 p-4 rounded text-purple-900">Show Details</button>
            </div>
        </div>
        </div>
    )
}
