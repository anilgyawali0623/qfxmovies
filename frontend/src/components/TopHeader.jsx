import React from 'react'
import {Link} from "react-router-dom"
 import logo from "../assets/logo.png"
 import {Button} from "flowbite-react"
import ButtonToggle from './ButtonToggle'
function TopHeader() {
  return (
    <div>
      <header className="bg-bg-color text-text-color font-font-size font-medium">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Left side: Logo + City button */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10" />
         

<ButtonToggle/>
        </div>

        {/* Right side: Search + Links + Sign In */}
        <div className="flex items-center space-x-4">
          
          {/* Search input */}
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Offers and Schedules Links */}
          <Link to="/offers" className="text-gray-700 hover:text-blue-500">
            Offers
          </Link>
          <Link to="/schedules" className="text-gray-700 hover:text-blue-500">
            Schedules
          </Link>

          {/* Sign In Button */}
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Sign In
          </button>
        </div>

      </div>
    </header>
    </div>
  )
}

export default TopHeader
