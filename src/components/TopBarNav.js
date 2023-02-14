import React from 'react'
import { Link } from 'react-router-dom';

function TopBarNav() {
  return (
    <nav className="bg-blue-800 py-4">
        <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
            <li><Link className="hover:text-gray-200 hover:underline px-4" to="/login">Login</Link></li>
            <li><Link className="hover:text-gray-200 hover:underline px-4" to="/register">Register</Link></li>
        </ul>
    </nav>

  )
}


export default TopBarNav