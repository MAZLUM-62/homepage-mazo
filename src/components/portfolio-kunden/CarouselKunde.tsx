import React, { useState } from "react";

interface CarouselProps {
  images: string[]; // Array von Bild-URLs
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gehe zum nächsten Bild
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Gehe zum vorherigen Bild
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const hasMultipleImages = images.length > 1; // Überprüft, ob es mehr als ein Bild gibt

  return (
    <div className="relative">
      {/* Das Bild */}
      <div className="w-full h-80 md:h-[400px] overflow-hidden rounded-xl">
        <img
          src={images[currentIndex]}
          alt="Projekt"
          className="object-cover w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-105"
        />
      </div>

      {/* Navigation Pfeile - Nur anzeigen, wenn mehr als ein Bild vorhanden ist */}
      {hasMultipleImages && (
        <>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full"
            onClick={prevImage}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full"
            onClick={nextImage}
          >
            &#10095;
          </button>
        </>
      )}

      {/* Bild-Index Anzeige */}
      {hasMultipleImages && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default Carousel;
