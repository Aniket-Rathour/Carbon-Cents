import React from 'react'
import Hero from '../components/Hero'
import HeroSection from '../components/Hero'
import Nav from '../components/Header'
import FeatureGrid from '../components/Feature'
import FeatureGrid1 from '../components/Feature1'
import ContactSection from '../components/EarthEnd'


function HomePage() {
  return (
    <div>
    <Hero></Hero>
    <div className=''>s</div>
    <FeatureGrid></FeatureGrid>
    <FeatureGrid1></FeatureGrid1>

    <div className="bg-black flex items-center justify-center pt-40 pb-23">
  <div className="flex flex-col items-center text-center space-y-4 px-4">
    <p className="text-lg md:text-xl font-light text-white">Feeling inspired?</p>
    <h2 className="text-2xl md:text-4xl font-bold text-white">
      We'd love to work with you
    </h2>
    <button className="mt-4 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition">
      GET IN TOUCH
    </button>
  </div>
</div>


    <ContactSection></ContactSection>

  </div>

  )
}

export default HomePage