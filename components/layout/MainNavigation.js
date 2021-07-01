import React from 'react'
import Link from 'next/link'

export default function MainNavigation() {
    return (
        <div className="mb-7 block bg-blue-400 w-full">
            {/* hello people this is the Navbar */}
            <header>
                <nav>
                    <ul className="mb-7 flex justify-evenly p-4 text-3xl">
                        <li>
                            <Link href='/'>All Posts</Link>
                        </li>
                        <li> 
                            <Link href='/post/new-post'>Create New Post</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
