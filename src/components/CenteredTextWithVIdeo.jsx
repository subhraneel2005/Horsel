import React from 'react';
import '../styles/Center.css';
import { useNavigate } from "react-router-dom";

const CenteredTextWithVideo = () => {

  const nav = useNavigate();
  function handleClick() {
    nav("/booknow");
  }

  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src="/bgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="centered-div mt-28">
        <h1 className='text-8xl text-center font-[Harmony]'>Horsel</h1>
        <p className='mr-0 font-[Syne] text-right text-xs'>Tailored Stables Effortless Reservations</p>
        <p onClick={handleClick} className='border-2 bg-black bg-opacity-40 border-stone-500 mt-10 w-full text-gray-200 px-10 py-3 cursor-pointer font-[Syne] rounded-[22px]'>
          Book Now
        </p>
      </div>
    </div>
  );
};

export default CenteredTextWithVideo;


//text-8xl text-center
//mr-0 font-[Syne] text-right text-xs