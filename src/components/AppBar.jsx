import React from 'react'

function AppBar() {
  return (
    <div className='bg-transparent px-10 py-7 w-full' style={{ color: "#000" }}>
      <ul className='flex justify-between'>
        <li className='text-3xl font-[Harmony] text-white cursor-pointer'>Horsel</li>
        <li className='text-3xl font-[Syne] text-white cursor-pointer'>Login</li>
      </ul>
    </div>
  )
}

export default AppBar