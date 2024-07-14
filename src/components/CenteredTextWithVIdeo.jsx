import React from 'react';
import '../styles/Center.css';
import { useNavigate } from "react-router-dom";
import BestOnes from './BestOnes';

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
      </div>
    </div>
  );
};

export default CenteredTextWithVideo;


//text-8xl text-center
//mr-0 font-[Syne] text-right text-xs