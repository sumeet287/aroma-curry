const Hero = () => {
  return (
    <section
      className="bg-cover bg-center text-white py-52 px-6 relative min-h-[80vh]"
      style={{
        backgroundImage: "url('/images/hero.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
     

      {/* Buttons moved to the bottom of the hero section */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col sm:flex-row justify-center gap-4 z-10">
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
    </section>
  );
};
export default Hero;