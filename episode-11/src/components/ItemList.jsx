import React from 'react'
import { CDN_URL } from '../utils/constant'

const ItemList = ({items, dummy}) => {
    // console.log(items)
    // console.log(dummy)

  return (
    <div>
      {items.map((item) => (
        <div className="p-2 m-2 border-gray-200 border-b-2 text-left font-bold flex justify-between" key = {item.card.info.id}>
        <div className='w-9/12'>
            <div className='py-2'>
                <span>{item.card.info.name}</span>
                <span> - ₹{item.card.info.price/100}</span>
            </div>
            <p className='text-xs'>{item.card.info.description}</p>
        </div>
            {/* <div className='w-3/12 p-4'>
            <div className='absolute'>
            <button className='p-2 mx-10 rounded-lg bg-black text-white shadow-lg m-auto'>Add +</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className='rounded-lg h-30'/>
            </div> */}
            <div className="relative w-3/12 flex justify-center">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="rounded-lg object-cover h-24 w-28 shadow-sm hover:scale-105 transition-transform duration-200"
              />
              <button className="absolute bottom-1 bg-white text-green-600 border border-green-600 px-3 py-1 text-sm rounded-md font-medium hover:bg-green-600 hover:text-white transition-colors duration-200">
                Add +
              </button>
            </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList
