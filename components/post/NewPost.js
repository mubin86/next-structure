import {useRef} from 'react'

export default function NewPost({newPostHandler}) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    
    const submitHandler = (e) => {
        e.preventDefault();

        const title = titleRef.current.value;
        const description = descriptionRef.current.value;

        const postData = {
            title,
            description
        }

        //props diye method anbo
        newPostHandler(postData);
    }

        return (
        <div className="min-h-screen flex items-center rounded justify-center bg-blu-400">

            <div className="bg-white p-16 rounded shadow-2xl w-2/3">

            <h2 className="text-3xl text-center font-bold mb-4 text-purple-800">Create Your Post</h2>

            <form className="space-y-6" onSubmit={submitHandler}>
                <div>
                <label htmlFor='title' className="block mb-2 font-bold">Post Title</label>
                <input type="text" ref={titleRef} required id='title' className="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-500" />
                </div>

                {/* <div>
                <label htmlFor='description' className="block mb-2 font-bold">Post Description</label>
                <input type="text" ref={descriptionRef} required id='description' className="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-500" />
                </div> */}

                <div>
                <label htmlFor='description' className="block mb-2 font-bold">Post Description</label>
                <textarea type="text" ref={descriptionRef} required id='description' className="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-500" />
                </div>

                <button className="block w-full bg-purple-400 p-4 rounded text-purple-900">Submit</button>

            </form>

            </div>
        </div>

    )
}
