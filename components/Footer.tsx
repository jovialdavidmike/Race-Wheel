
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <h2 className="text-2xl font-bold text-white uppercase">
          Race<span className="text-blue-500">Wheel</span> Detailing
        </h2>
        <p className="mt-2">Scottsdale, AZ</p>
        <p className="mt-1">
          <a href="tel:+16025841304" className="hover:text-blue-500 transition-colors">
            +1 602-584-1304
          </a>
        </p>
        <div className="mt-8">
          <p>&copy; {new Date().getFullYear()} Race Wheel Car Detailing. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
