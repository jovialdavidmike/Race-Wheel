
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import StickyCallButton from './components/StickyCallButton';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonial />
        <Gallery />
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default App;
