import React from 'react'
// import Header from './Header'
// import Footer from './Footer'

function Dashboard() {
  return (
  <nav className="w-52 bg-black fixed left-0 top-0 min-h-screen">
    <div className="logo p-6 flex items-center">
      <svg className="cursor-pointer" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  d="M0 0H18V2H0V0ZM0 6H18V8H0V6ZM11 12H0V14H11V12Z" fill="#BFC5D2" />
      </svg>
    </div>
    <ul className="flex flex-col items-center mt-8">
      <li className="h-14 w-full bg-grey-400 hover:bg-gray-800">
        <a href="#" className="bg-link-hover w-full h-full flex items-center p-5 text-gray-400 relative active">
          Posts
        </a>
      </li>
      
      <li className="h-14 w-full bg-grey-400 hover:bg-gray-800">
        <a href="#" className="hover:bg-link-hover transition-colors duration-500 w-full h-full flex items-center p-5 text-gray-400  relative">
            Authors
        </a>
      </li>
    
      <li className="h-14 w-full bg-grey-400 hover:bg-gray-800">
        <a href="#" className="hover:bg-link-hover transition-colors duration-500 w-full h-full flex items-center p-5 text-gray-400  relative">
            Categories
        </a>
      </li>   
    </ul>
  </nav>



  )
}

export default Dashboard