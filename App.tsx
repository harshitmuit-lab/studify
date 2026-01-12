import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyChoose from './components/WhyChoose';
import AppMockup from './components/AppMockup';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <WhyChoose />
        <AppMockup />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
};

export default App;