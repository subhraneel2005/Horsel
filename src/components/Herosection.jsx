import React from 'react'
import CenteredTextWithVideo from './CenteredTextWithVIdeo'
import Navbarr from './Navbarr'
import BestOnes from './BestOnes'
import FloatingCircle from './FloatingCircle'
import Cursor from './Cursor'

function Herosection() {
  return (
    <div>
      <Navbarr />
      <div className='h-screen w-full'>
        <CenteredTextWithVideo />
        <FloatingCircle />
      </div>
      <BestOnes />
      <Cursor />
    </div>
  )
}

export default Herosection