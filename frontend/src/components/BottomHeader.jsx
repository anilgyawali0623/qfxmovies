import React from 'react'

function BottomHeader() {
  return (
      <nav className="w-full bg-bg-color  shadow-sm px-6 py-3 flex items-center justify-between text-text-color">
     <div>
         cinema
     </div>
   
      <div className="flex gap-10 items-center">
        <select
          className="border-0 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent px-10 py-1"
        >
          <option>Select Movie</option>
          <option>Movie 1</option>
          <option>Movie 2</option>
        </select>

<select
          className="border-0 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent px-10 py-1"
        >
          <option>Select Movie</option>
          <option>Movie 1</option>
          <option>Movie 2</option>
        </select>
<select
          className="border-0 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent px-10 py-1"
        >
          <option>Select Movie</option>
          <option>Movie 1</option>
          <option>Movie 2</option>
        </select>
<select
          className="border-0 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent px-10 py-1"
        >
          <option>Select Movie</option>
          <option>Movie 1</option>
          <option>Movie 2</option>
        </select>

        {/* Buy Now Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-9 py-2 rounded-lg shadow-md">
          Buy Now
        </button>
      </div>
    </nav>
  )
}

export default BottomHeader
