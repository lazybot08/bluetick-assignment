import React from 'react';
import './App.css';
import HeroSection from './components/Hero/Hero';
import WhatWeOfferSection from './components/WhatWeOffer/WhatWeOffer';
import BlogsSection from './components/Blogs/Blogs';
import LetsConnectSection from './components/LetsConnect/LetsConnect';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <WhatWeOfferSection />
      <BlogsSection />
      <LetsConnectSection />
      <Footer />
    </div>
  );
}

export default App;
