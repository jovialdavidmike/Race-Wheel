
import React from 'react';

// FIX: Explicitly type GalleryImage as React.FC to fix type error with the `key` prop.
const GalleryImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="overflow-hidden rounded-lg shadow-lg group">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
      loading="lazy"
    />
  </div>
);

const Gallery: React.FC = () => {
  const images = [
    { src: "https://picsum.photos/600/600?random=10&category=transport", alt: "Detailed black sports car" },
    { src: "https://picsum.photos/600/600?random=11&category=transport", alt: "Glossy red car hood" },
    { src: "https://picsum.photos/600/600?random=12&category=transport", alt: "Luxury car interior" },
    { src: "https://picsum.photos/600/600?random=13&category=transport", alt: "Ceramic coated blue sedan" },
    { src: "https://picsum.photos/600/600?random=14&category=transport", alt: "Polished silver alloy wheel" },
    { src: "https://picsum.photos/600/600?random=15&category=transport", alt: "Side profile of a white supercar" },
    { src: "https://picsum.photos/600/600?random=16&category=transport", alt: "Headlight of a dark grey vehicle" },
    { src: "https://picsum.photos/600/600?random=17&category=transport", alt: "Clean leather seats" },
  ];

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Precision Gallery</h2>
          <p className="mt-4 text-lg text-gray-400">Where Every Detail Matters</p>
          <div className="mt-4 w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <GalleryImage key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
