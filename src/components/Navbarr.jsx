import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Navbarr() {

  const nav = useNavigate();
  function handleClick() {
    nav("/booknow");
  }

  return (

    <div className='select-none bg-transparent px-10 py-7 w-full' style={{ color: "#000" }}>
      <ul className='flex justify-between'>
        <li className='text-3xl font-[Harmony] text-white cursor-pointer'>Horsel</li>
        {/* <li className='text-3xl font-[Syne] text-white cursor-pointer'>Login</li> */}
        <SignedOut>
          <SignInButton>
          <li className='text-3xl font-[Syne] text-white cursor-pointer'>Login</li>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton>

          </UserButton>
          <li className='text-3xl font-[Syne] text-white cursor-pointer'onClick={handleClick}>Book Now</li>
        </SignedIn>
      </ul>

    </div>
  )
}

export default Navbarr;