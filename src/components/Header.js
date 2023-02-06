import React from 'react'

function Header() {
  return (
   <>
     <nav className="w-full py-4 bg-blue-800 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between">

            <nav>
                <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                    <li><a className="hover:text-gray-200 hover:underline px-4" href="#">Shop</a></li>
                    <li><a className="hover:text-gray-200 hover:underline px-4" href="#">About</a></li>
                </ul>
            </nav>

            <div className="flex items-center text-lg no-underline text-white pr-6 bg-gray-600">
                <a className="" href="#">
                    <i className="fab fa-facebook"></i>
                </a>
                <a className="pl-6" href="#">
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="pl-6" href="#">
                    <i className="fab fa-twitter"></i>
                </a>
                <a className="pl-6" href="#">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>

    </nav>

    <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
            <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="#">
                Tech Blog
            </a>
            <p className="text-lg text-gray-600">
                Keeping you informed
            </p>
        </div>
    </header>

    <nav className="w-full py-4 border-t border-b bg-gray-100">
        <div className="block sm:hidden">
            <a
                href="#"
                className="md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
               
            >
                Topics <i className="fas fa-chevron-down" ></i>
            </a>
        </div>
        <div  className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
            <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Programming</a>
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Reviews</a>
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Networking</a>
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Sports</a>
            </div>
        </div>
    </nav>

   </>
    
  )
}

export default Header