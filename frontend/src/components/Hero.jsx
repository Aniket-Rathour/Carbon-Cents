import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        src="/leaf.mp4" // Make sure your video is in the public folder
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-screen"
        onError={(e) => {
          const err = e.target.error;
          setErrMsg(`Error ${err?.code}: ${err?.message || "Playback failed"}`);
        }}
      ></video>
      

      {/* Content Container */}
      <div className="relative z-20 h-full w-full flex flex-col p-8 md:p-12 text-white">
        

        {/* Main Centered Content */}
        <main className="flex-grow flex items-center">
          <div className="max-w-4xl">
            <h2 className="text-7xl md:text-9xl font-serif" style={{ fontFamily: 'Georgia, serif' }}>
              CarbonCents
            </h2>
            <p className="mt-4 text-6xl md:text-2xl max-w-md">
              Available 24/7 in Hindi and English because crops don't sleep, and neither do we!
            </p>
          </div>
        </main>

        {/* Bottom Bar */}
        <footer className="flex justify-between items-center w-full">
          <p className="text- font-light">Based On Mars</p>
          
        </footer>
      </div>



      
    </div>
  );
};

export default HeroSection;



