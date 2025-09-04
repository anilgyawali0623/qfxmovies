import { Button } from 'flowbite-react'
import React from 'react'

function ButtonToggle() {
  return (
    <div>
        <Button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
  Cities
</Button>

<div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-md max-h-full">
       
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
           
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                        Cities
                </h3>
                <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                 
                </button>
            </div>

       <div className='flex flex-wrap gap-1.5 my-2.5 mx-1'>

 <button className='mt-2.5 p-2 bg-green-600  rounded-3xl'>kathmandu </button>

 <button className='mt-2.5 p-2 bg-green-600  rounded-3xl'>kathmandu </button>
 <button className='mt-2.5 p-2 bg-green-600  rounded-3xl'>kathmandu </button>
 <button className='mt-2.5 p-2 bg-green-600  rounded-3xl'>kathmandu </button>
 <button className='mt-2.5 p-2 bg-green-600  rounded-3xl'>kathmandu </button>
        </div>    
       
        </div>
    </div>
</div> 
    </div>
  )
}

export default ButtonToggle
