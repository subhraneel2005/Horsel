import React from 'react';

const FloatingCircle = () => {
  const handleScroll = () => {
    const element = document.getElementById('bestOnes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div onClick={handleScroll} className='cursor-pointer absolute w-[100px] h-[100px] flex justify-center items-center right-20 bottom-20'>
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
