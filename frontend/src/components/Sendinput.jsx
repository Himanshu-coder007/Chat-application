import React from 'react'
import { IoSend } from "react-icons/io5";

const Sendinput = () => {
  return (
   <form className='px-4 my-3'>
    <div className='w-full relative'>
        <input
        type="text"
        placeholder="Send a message..."
        className="border text-sm rounded-lg block w-full b-zinc-500  bg-gray-600 text-white"
        />
        <button className='absolute flex inset-y-0 end-0 items-center pr-4'>
        <IoSend />
        </button>
    </div>
   </form>
  )
}

export default Sendinput