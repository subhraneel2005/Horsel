import React from 'react'

function AppBar() {
  return (
    <div className='bg-transparent px-10 py-7 w-full' style={{color: "#000"}}>
        <ul className='flex justify-between'>
            <li className='heroNavText cursor-pointer'>Horsel</li>
            <li className='heroNavLogin cursor-pointer'>Login</li>
        </ul>
    </div>
  )
}

export default AppBar