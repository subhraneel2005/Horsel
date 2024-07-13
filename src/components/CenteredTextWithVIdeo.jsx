import React from 'react';
import '../styles/CenteredTextWithVideo.css';
import bgVIdeo from "../assets/bgVideo.mp4"

const CenteredTextWithVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src={bgVIdeo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="centered-div mt-28">
        <h1 className='heroText'>Horsel</h1>
        <p className='mr-4 float-right ptext'>Tailored Stables Effortless Reservations</p>
      </div>
    </div>
  );
};

export default CenteredTextWithVideo;
