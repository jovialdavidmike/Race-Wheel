
import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Testimonial: React.FC = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="flex justify-center items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="text-yellow-400" />
          ))}
          <p className="ml-3 text-lg font-semibold text-gray-300">5.0-Star Rating</p>
        </div>
        <blockquote className="mt-6">
          <p className="text-2xl md:text-3xl italic font-medium text-white">
            "Astounding attention to detail. My car hasn't looked this good since it left the factory. A true showroom-quality shine that lasts."
          </p>
          <footer className="mt-6 text-lg text-gray-400">- Priscilla, Scottsdale AZ</footer>
        </blockquote>
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block bg-transparent border-2 border-blue-500 text-blue-500 font-bold py-3 px-10 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 text-lg"
        >
          Book Your Transformation
        </a>
      </div>
    </section>
  );
};

export default Testimonial;
