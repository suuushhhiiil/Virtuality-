import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import FeatureSection from './components/FeatureSection.jsx';
import Workflow from './components/Workflow.jsx';
import Price from './components/Price.jsx';
import Testimonials from './components/Testimonials.jsx';

const App = () => {
  return (
   <>
   <Navbar />
   <div className='max-w-7xl mx-auto pt-10 px-6'>
   <HeroSection />
   <FeatureSection />
   <Workflow />
   <Price />
   <Testimonials />
   </div>
   </>
  )
}
export default App;