
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=1')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight uppercase" style={{ textShadow: '0 0 15px rgba(0,0,0,0.7)' }}>
          Scottsdale’s Premier <span className="text-blue-500">Ceramic Coating</span> & Detailing Specialists
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto" style={{ textShadow: '0 0 10px rgba(0,0,0,0.7)' }}>
          Preserving Showroom Perfection for Your Luxury Vehicle.
        </p>
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg shadow-xl shadow-blue-500/40 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg"
        >
          Secure Your Appointment
        </a>
      </div>
    </section>
  );
};

export default Hero;
