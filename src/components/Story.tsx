// 📁 src/components/Story.tsx
'use client';

import Image from 'next/image';

const Story = () => {
  return (
    <section className="py-4 bg-gradient-to-b from-white via-yellow-50 to-orange-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl font-extrabold text-red-700 mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed">
            Vijeet, an Indian IT professional, moved to Mexico chasing a tech dream — but soon found
            himself missing the taste of home. Frustrated by the lack of authentic Indian food and fueled
            by a lifelong love for spices, he made a bold move: he left his job and founded <span className="text-red-600 font-bold">Aroma Curry</span>.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            What began as a humble kitchen is now a haven for both the Indian community craving a slice
            of home and the locals eager to experience true Indian hospitality. Aroma Curry stands as a
            flavorful bridge between cultures — from Vijeet’s passion to your plate.
          </p>
        </div>
        <div className="animate-fade-in-up flex justify-center">
          <Image
            src="/images/story.png"
            alt="Vijeet in kitchen"
            width={350}
            height={350}
            className="rounded-xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
