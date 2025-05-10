const Testimonials = () => {
  return (
    <section id="catering" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-12 animate-fade-in-up">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-100 p-8 rounded-lg shadow animate-fade-in-up">
            <p className="text-gray-700 italic">
              "The Grand Feast catered our wedding and people are still talking about the food!"
            </p>
            <span className="block mt-4 font-semibold">— Priya S., Mexico City</span>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow animate-fade-in-up">
            <p className="text-gray-700 italic">
              "Authentic Indian flavors with a warm and welcoming vibe. Highly recommend!"
            </p>
            <span className="block mt-4 font-semibold">— Carlos M., Guadalajara</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;