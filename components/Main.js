import React from 'react'
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid'

export const Main = () => {
  const handleClick = (event) => {
    event.preventDefault()
  }
  return ( 
    <main className='flex justify-center items-center flex-grow px-3.5'>
        <form className='flex items-center flex-col w-full'>
          <img src='/images/search.svg' className='h-20 mb-4' />
          <div className='flex items-center w-full px-5 py-3 mb-4 rounded-full max-w-md border border-gray-200 focus-within:shadow-input hover:shadow-input'>
            <SearchIcon className='h-5 w-5 cursor-pointer text-gray-600' />
            <input type='text' className='flex-grow focus:outline-none px-2' />
            <MicrophoneIcon className='h-5 w-5 cursor-pointer text-gray-600' />
          </div>
          <div className='hidden space-x-4 sm:flex'>
            <button className='btn' onClick={handleClick}>
              Google Search
            </button>
            <button className='btn' onClick={handleClick}>
              I'm feeling lucky
            </button>
          </div>
        </form>
      </main>

  )
}