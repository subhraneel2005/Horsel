import React from 'react';
import '../index.css'
import bgVIdeo from "../assets/bgVideo.mp4"

const CenteredTextWithVideo = () => {
  return (
    <div className="w-full h-screen top-0 left-0 z-[-1] overflow-hidden absolute">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={bgVIdeo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-1/2 left-1/2 text-white z-1 mt-40" style={{ transform: 'translate(-50%, -50%)' }}>
        <h1 className=' text-8xl text-center font-[Harmony]' >Horsel</h1>
        <p className=' mr-0 font-[Syne] text-right text-xs'>Tailored Stables Effortless Reservations</p>
      </div>
    </div >
  );
};

export default CenteredTextWithVideo;
