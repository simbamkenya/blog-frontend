import React from 'react';
import { useSelector } from 'react-redux';


function Post() {
  const post = useSelector(state => state.post)
  console.log(post)
  return (
    <>
    <article className="flex flex-col shadow my-4">
        {/* <!-- Article Image --> */}
        <a href="#" className="hover:opacity-75">
            <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" />
        </a>
        <div className="bg-white flex flex-col justify-start p-6">
            <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
            <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
            <p href="#" className="text-sm pb-3">
                By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
            </p>
            <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
            <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
        </div>
    </article>
    
    </>
  )
}

export default Post