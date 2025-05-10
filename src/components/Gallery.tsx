// 📁 src/components/Gallery.tsx
'use client';
import { useState, useEffect, useCallback } from 'react';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const images = [1, 2, 3, 4, 1, 2, 3, 4];

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeModal();
    },
    [nextImage, prevImage]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 50) prevImage();
    else if (deltaX < -50) nextImage();
  };

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-12 animate-fade-in-up">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.slice(0, 4).map((i, index) => (
            <img
              key={index}
              src={`/images/gallery/gallery${i}.png`}
              alt={`Gallery ${index + 1}`}
              onClick={() => openModal(index)}
              className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer animate-fade-in-up"
            />
          ))}
        </div>
        <button
          onClick={() => openModal(0)}
          className="mt-10 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition shadow-md"
        >
          View All
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center p-6 text-white"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700"
            >
              Close ✖️
            </button>

            <div className="relative w-full flex justify-center items-center max-w-5xl">
              <button
                onClick={prevImage}
                className="absolute left-4 text-white bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
              >
                ⬅️
              </button>
              <div className="transition duration-500 ease-in-out transform hover:scale-105">
                <img
                  src={`/images/gallery/gallery${images[currentIndex]}.png`}
                  alt={`Gallery Modal ${currentIndex + 1}`}
                  className="max-h-[80vh] object-contain rounded-lg shadow-lg"
                />
              </div>
              <button
                onClick={nextImage}
                className="absolute right-4 text-white bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
              >
                ➡️
              </button>
            </div>

            <div className="mt-4 text-sm text-gray-200">
              Image {currentIndex + 1} of {images.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Gallery;
