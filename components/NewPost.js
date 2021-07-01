

export default function NewPost() {
    return (
      <div className="min-h-screen flex items-center rounded justify-center bg-blu-400">

        <div className="bg-white p-16 rounded shadow-2xl w-2/3">

          <h2 className="text-3xl font-bold mb-4 text-purple-800">Create Your Post</h2>

          <form className="space-y-6">

            <div>
              <label className="block mb-2 font-bold">Post Title</label>
              <input type="text" className="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-500" />
            </div>

            <div>
              <label className="block mb-2 font-bold">Post Description</label>
              <input type="text" className="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-purple-500" />
            </div>

            <button className="block w-full bg-red-400 py-4">Submit</button>

          </form>

        </div>
      </div>

    )
}
