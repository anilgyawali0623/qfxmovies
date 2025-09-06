import React from 'react'
import TopHeader from './TopHeader'
import BottomHeader from './BottomHeader'

function Navbar() {
  return (
    <>
     <div className='sticky '>

      <TopHeader/>
      <BottomHeader/>
     </div>
    </>
  )
}

export default Navbar
