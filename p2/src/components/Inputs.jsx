import React from 'react'

const Inputs = () => {
  return (
    <div className='flex gap-x-4'>
      <input type="text" className=" border-green-400 p-2 border-[3px]" placeholder="Enter Todo Here" />
      <input type="date" className=" border-green-400 p-2 border-[3px] text-black" />
      <div>
        <button className="bg-green-800 p-3 rounded px-8 hover:bg-green-500">Add</button>
      </div>
    </div>
  )
}

export default Inputs;