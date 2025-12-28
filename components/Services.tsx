
import React from 'react';

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118 0c.038-.245.068-.492.09-.742A12.022 12.022 0 0021 12.382c0-.203-.012-.405-.035-.608A11.955 11.955 0 0117.618 8.984z" />
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 14l-4-4 6.293-6.293a1 1 0 011.414 0zM18 10l-4 4 2.293 2.293a1 1 0 001.414 0L21 13.414a1 1 0 000-1.414L18 10z" />
  </svg>
);

const CarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l1.293-1.293a1 1 0 011.414 0L15 8v11m-6 0h6m-6 0H6a2 2 0 01-2-2v-6a2 2 0 012-2h3m6 0h3a2 2 0 012 2v6a2 2 0 01-2 2h-3m-6 0v-4m6 4V9" />
  </svg>
);


// FIX: Explicitly type ServiceCard as React.FC to fix type error with the `key` prop.
const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center transition-all duration-300 ease-in-out hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-2">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <ShieldIcon />,
      title: "Ceramic Coating",
      description: "The 5-Year Shield. Unparalleled gloss, hydrophobic properties, and protection against the elements."
    },
    {
      icon: <SparklesIcon />,
      title: "Paint Correction",
      description: "We meticulously remove swirls, scratches, and imperfections to restore a flawless, mirror-like finish."
    },
    {
      icon: <CarIcon />,
      title: "Full Interior Restoration",
      description: "Deep cleaning, conditioning, and detailing of every surface to bring your car's interior back to factory-fresh condition."
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Signature Services</h2>
          <p className="mt-4 text-lg text-gray-400">Engineered for Automotive Perfection</p>
          <div className="mt-4 w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;