import React from 'react'
import CenteredTextWithVideo from './CenteredTextWithVIdeo'
import Navbarr from './Navbarr'
import BestOnes from './BestOnes'

function Herosection() {
  return (
    <div>
      <Navbarr />
      <div className='h-screen w-full'>
        <CenteredTextWithVideo />
      </div>
      <BestOnes />
    </div>
  )
}

export default Herosection