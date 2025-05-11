'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const heroImages = [
  {
    desktop: '/images/hero/hero1.png',
    mobile: '/images/hero/hero1-mobile.png',
  },
  {
    desktop: '/images/hero/hero2.png',
    mobile: '/images/hero/hero2-mobile.png',
  },
  {
    desktop: '/images/hero/hero3.png',
    mobile: '/images/hero/hero3-mobile.png',
  },
];

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    setHasMounted(true); // mark that hydration is complete
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!hasMounted) return null; // avoids mismatch completely

  return (
    <section className="relative min-h-[80vh] text-white">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={800}
        className="h-full"
        swipeable={true} // Ensure swipe gestures work
      >
        {heroImages.map((img, i) => (
          <div key={i} className="relative min-h-[80vh] w-full">
            <Image
              src={isMobile ? img.mobile : img.desktop}
              alt={`Hero Slide ${i + 1}`}
              fill
              className="object-cover pointer-events-none" // Prevent image from blocking scroll
              priority={i === 0}
              sizes="(max-width: 768px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-black/50 pointer-events-none" />
            <div className="absolute bottom-8 left-0 right-0 flex flex-col sm:flex-row justify-center items-center gap-4 z-10 px-4">
              <a
                href="/menu"
                className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded text-white font-semibold text-base shadow-md transition"
              >
                View Menu
              </a>
              <a
                href="/catering"
                className="border border-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-black transition text-base shadow-md"
              >
                Book Catering
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}; 

export default Hero;
