import React from 'react'
import Post from './Post'

function Posts() {
  return (
    
    <section className="w-full md:w-2/3 flex flex-col items-center px-3">
            <Post />
            <Post />
            <Post />
            {/* <!-- Pagination --> */}
            <div className="flex items-center py-8">
                <a href="#" className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
                <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
                <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i class="fas fa-arrow-right ml-2"></i></a>
            </div>

        </section>
  )
}

export default Posts