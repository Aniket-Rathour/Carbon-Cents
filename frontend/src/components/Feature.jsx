import React, { useState, useEffect } from "react";

const features = [
  {
    color: "text-green-400",
    subtitle: "For Startups",
    title: "MVP Design",
    description: "Create a digital product, attract investors and gain new clients",
  },
  {
    color: "text-red-500",
    subtitle: "For Startups & Existing Companies",
    title: "Product Redesign",
    description: "Get a fresh look, improved user experience, and enhanced functionality",
  },
  {
    color: "text-yellow-400",
    subtitle: "Existing Companies",
    title: "No-code Development",
    description: "Launch your app quickly and cost-effectively with no-code development",
  },
];

const FeatureGrid = () => {
  const [blurValue, setBlurValue] = useState(20); // Starting blur in px

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const newBlur = Math.max(20 - scrolled / 20, 0); // Adjust divisor to tweak fade speed
      setBlurValue(newBlur);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-black text-white py-16 p-10">
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 relative transition-filter duration-300 ease-out"
        style={{ filter: `blur(${blurValue}px)` }}
      >
        {features.map((f, i) => (
          <div key={i} className="text-center px-4 relative">
            {/* Glowing star */}
            <div className="text-7xl mb-2">
              <span className={`${f.color} block animate-pulse`}>✦</span>
            </div>
            {/* Subtitle */}
            <p className="text-sm text-gray-400 mb-4">{f.subtitle}</p>
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
            {/* Description */}
            <p className="text-gray-300">{f.description}</p>
            {/* Vertical separator */}
            {i < features.length - 1 && (
              <div className="hidden md:block absolute top-1/4 right-0 transform translate-x-1/2 h-1/2 w-px bg-blue-400"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
