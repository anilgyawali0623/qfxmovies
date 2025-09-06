import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { Avatar } from "flowbite-react";
import logo  from "../../public/walter.webp";

function AdminPage() {
  return (
    <div className="flex h-screen  text-text-color">
      {/* Sidebar */}
      <div className="w-64 bg-green-600 shadow flex flex-col items-center p-4">
        {/* Admin Image */}
        <Avatar
          img={logo}
          rounded
          size="xl"
        />
        <h2 className="mt-2 font-bold text-lg">Admin Name</h2>

        {/* Menu */}
        <ul className="mt-6 w-full">
          <li className="mb-2">
            <Link
              to="dashboard"
              className="block w-full px-4 py-2 rounded hover:bg-gray-200"
            >
              Dashboard
            </Link>
          </li>
          
         
          <li className="mb-2">
            <Link
              to="add-details"
              className="block w-full px-4 py-2 rounded hover:bg-gray-200"
            >
              Add details
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="schedules"
              className="block w-full px-4 py-2 rounded hover:bg-gray-200"
            >
              Schedules
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="messages"
              className="block w-full px-4 py-2 rounded hover:bg-gray-200"
            >
              Messages
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminPage
