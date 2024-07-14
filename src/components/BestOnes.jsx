import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';

function BestOnes() {
  const images = ['/horse1.jpg', '/horse2.jpg', '/horse3.jpg', '/horse4.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change image every 7 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className='bg-[#faf3f0] h-screen overflow-hidden w-full flex justify-center items-center flex-col select-none relative' >
      <h1 className='absolute top-8 font text-center font-[Harmony] text-5xl md:text-6xl'>Our Best Ones</h1>
      <div className='flex justify-center items-center w-full mt-20 gap-4 md:gap-6'>
        <FaArrowLeft
          size={20}
          className=' text-gray-600 cursor-pointer hidden md:block'
          onClick={prevImage}
        />
        <div {...handlers} className='relative md:w-[900px] w-1/2 flex justify-center items-center h-[400px] overflow-hidden'>
          <div className='w-full h-full flex transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
            {images.map((image, index) => (
              <div key={index} className={`flex-shrink-0 w-[33.33%] h-full transform transition duration-500 ease-in-out ${currentIndex === index ? 'scale-110' : 'scale-75'} ${currentIndex === index - 1 || currentIndex === index + 1 ? 'scale-100' : 'scale-75'}`}>
                <img src={image} alt="" className='w-full h-full object-cover' />
              </div>
            ))}
          </div>
        </div>
        <FaArrowRight
          size={20}
          className='text-gray-600 cursor-pointer hidden md:block'
          onClick={nextImage}
        />
      </div>
    </div>
  );
}

export default BestOnes;
