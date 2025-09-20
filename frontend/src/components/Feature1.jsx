import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [direction, setDirection] = useState("down");

  const texts = [
    "Welcome to FarmVision",
    "Your Crops, Our Priority",
    "Always Here, Always Ready",
    "Innovating Agriculture Together",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger slide-up first
      setDirection("up");

      setTimeout(() => {
        // Change text after animation
        setCurrentText((prev) => (prev + 1) % texts.length);
        // Slide-down for next text
        setDirection("down");
      }, 500); // adjust 500ms to match your CSS animation duration
    }, 4000); // every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <video
        src="/smoke.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover"
      ></video>
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center text-white text-center">
        <h2
          className={`text-7xl md:text-6xl font-serif ${
            direction === "up" ? "animate-slide-up" : "animate-slide-down"
          }`}
        >
          {texts[currentText]}
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
