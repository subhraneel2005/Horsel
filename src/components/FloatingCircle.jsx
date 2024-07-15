import React from 'react';

const FloatingCircle = () => {
< main
    return (
        <div className='absolute w-14 h-14 md:w-[100px] md:h-[100px] bg-[#FFD299] border-[#8B4513] border-[1px] rounded-full flex justify-center items-center bottom-10 left-[45%] md:right-20 md:bottom-20'>
            <div className='w-full h-full absolute font-[Syne] text-xs'>
                <p>SCROLL DOWN SCROLL DOWN</p>
            </div>
        </div>
    )
}
=======
  const handleScroll = () => {
    const element = document.getElementById('bestOnes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
> main

  return (
    <div onClick={handleScroll} className='cursor-pointer absolute md:mt-0 mt-32 md:w-[100px] md:h-[100px] flex justify-center items-center right-20 bottom-20 w-[80px] h-[80px] '>
      <div className='w-full h-full bg-red-500 rounded-full'></div>
      <svg width="140" height="140" viewBox="0 0 140 140" className="absolute">
        <path id="circlePath" d="
          M 70, 70
          m -60, 0
          a 60,60 0 1,1 120,0
          a 60,60 0 1,1 -120,0" fill="none" />
        <text className='font-[Syne]' style={{ letterSpacing: '4px' }}>
          <textPath href="#circlePath" startOffset="0">
            SCROLL DOWN SCROLL DOWN
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default FloatingCircle;
