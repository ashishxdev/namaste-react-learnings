import React, { useState, useRef } from 'react'

const Demo2 = () => {

  const [y, sety] = useState(0)
  let x = 10;

  const ref = useRef(0)
  console.log(ref)
  /* 
  Not like this ref = 0;
  but it's like ref= { current: 0 }
  */

  return (
    <div className='m-4 p-2 w-96 h-96 border border-black bg-slate-50'>
      <div>
        <button 
        className='bg-green-200 p-2 m-4'
        onClick={()=>{
          x = x + 1;
          console.log(x)
        }}>Increase x</button>
        <span className='font-bold text-xl'>Let = {x}</span>
      </div>
      <div>
        <button 
        className='bg-green-200 p-2 m-4'
        onClick={()=>{
          sety(y+1)
        }}>Increase y</button>
        <span className='font-bold text-xl'>State = {y}</span>
      </div>
      <div>
        <button 
        className='bg-green-200 p-2 m-4'
        onClick={()=>{
          ref.current = ref.current + 1
          console.log("ref=", ref.current)
        }}>Increase Ref</button>
        <span className='font-bold text-xl'>Ref = {ref.current}</span>
      </div>
    </div>
  )
}

export default Demo2
