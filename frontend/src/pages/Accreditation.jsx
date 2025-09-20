// src/components/HowItWorks.jsx

import React from 'react';

const stepsData = [
  {
    number: '1',
    title: 'Sign Up and Create Profile',
    description: 'Join the EcoTrack community. Personalize your eco-journey.',
  },
  {
    number: '2',
    title: 'Track Your Activities',
    description: 'Log daily actions. From commutes to consumption.',
  },
  {
    number: '3',
    title: 'Calculate Your Carbon Footprint',
    description: 'See your environmental impact. Understand your data.',
  },
  {
    number: '4',
    title: 'Earn Points and Rewards',
    description: 'Get rewarded for sustainability. Unlock exclusive benefits.',
  },{
    number: '5',
    title: 'Redeem for Eco-Friendly Benefits',
    description: 'Choose from green products. Support global initiatives.',
  },
  {
    number: '6',
    title: "Earn Your Eco Badges",
    description: 'get exclusive premium feature',
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-gray- font-sans py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl text-center text-gray-600 mb-16 sm:mb-20 tracking-wider">
          HOW IT WORKS
        </h2>

        {/* Main container for the grid and timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* The vertical line in the middle */}
          <div className="hidden sm:block absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-px bg-green-200"></div>

          {/* Grid Layout for Steps */}
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
            {stepsData.map((step, index) => {
              const isLeftAligned = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`relative ${isLeftAligned ? 'sm:text-right ' : 'sm:text-left'}`}
                >
                  {/* Big background number */}
                  <div
                    className={` text-8xl sm:text-9xl font-bold text-gray-200  top-0
                      ${isLeftAligned ? 'sm:right-0 sm:translate-x-10 mr-40' : 'sm:left-0 sm:-translate-x-10 ml-40'}`}
                  >
                    {step.number}
                  </div>

                  {/* Text Content */}
                  <div className={`p-4 ${isLeftAligned ? 'flex flex-col items-center sm:pr-10' : 'flex flex-col items-center sm:pl-10'}`}>
                    <h3 className="text-xl font-semibold text-gray-100">{step.title}</h3>
                    <p className="mt-2 text-gray-400">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-20">
          <button
            className="px-8 py-3 border border-green-400 text-green-500 rounded-full font-semibold
                       hover:bg-green-400 hover:text-white transition-colors duration-300"
          >
            START YOUR JOURNEY
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <footer className="text-center mt-20 pt-8 text-sm text-gray-400 space-x-6">
          <span>© 2023 EcoTrack</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
        </footer>
      </div>
    </section>
  );
};

export default HowItWorks;
