import React from 'react'

const FloatingCircle = () => {
    return (
        <div className='absolute w-14 h-14 md:w-[100px] md:h-[100px] bg-[#FFD299] border-[#8B4513] border-[1px] rounded-full flex justify-center items-center bottom-10 left-[45%] md:right-20 md:bottom-20'>
            <div className='w-full h-full absolute font-[Syne] text-xs'>
                <p>SCROLL DOWN SCROLL DOWN</p>
            </div>
        </div>
    )
}

export default FloatingCircle