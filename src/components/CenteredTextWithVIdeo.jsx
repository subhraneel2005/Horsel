import React from 'react';
import { useNavigate } from "react-router-dom";

const CenteredTextWithVideo = () => {

  const nav = useNavigate();
  function handleClick() {
    nav("/booknow");
  }

  return (
    <div className="h-full w-full absolute top-0 left-0 -z-10 overflow-hidden">
      <video autoPlay loop muted className="h-full object-cover">
        <source src="/bgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 text-white text-center z-10 mt-28">
        <h1 className='text-9xl text-center font-[Harmony]'>Horsel</h1>
        <p className='mr-0 font-[Syne] text-right text-sm'>Tailored Stables Effortless Reservations</p>
      </div>
    </div>
  );
};

export default CenteredTextWithVideo;