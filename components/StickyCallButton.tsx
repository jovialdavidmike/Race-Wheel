
import React from 'react';

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);


const StickyCallButton: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700 md:hidden z-20">
      <a
        href="tel:+16025841304"
        className="flex items-center justify-center w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg"
      >
        <PhoneIcon />
        Call +1 602-584-1304
      </a>
    </div>
  );
};

export default StickyCallButton;
