import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg items-center'>
      <div className='flex col-span-1 items-center cursor-pointer'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-6'
          src="https://cdn-icons-png.flaticon.com/512/6015/6015685.png" alt="menu" />
        <a href="/">
          <img
            className='h-8 mx-2'
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" />
        </a>
      </div>
      <div className='col-span-10 px-10'>
        <input className="w-1/2 border border-gray-400 rounded-l-full p-2" type="text" />
        <button className='border border-gray-400 px-4 py-2 rounded-r-full bg-gray-100'>
          🔍
        </button>
      </div>
      <div className='col-span-1'>
        <img
          className='h-8'
          src="https://cdn-icons-png.flaticon.com/512/6914/6914292.png" alt="user" />
      </div>
    </div>
  )
}

export default Head
