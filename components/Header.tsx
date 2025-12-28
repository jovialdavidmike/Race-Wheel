
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold tracking-wider text-white uppercase">
          Race<span className="text-blue-500">Wheel</span> Detailing
        </h1>
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Secure Your Appointment
        </a>
      </div>
    </header>
  );
};

export default Header;
