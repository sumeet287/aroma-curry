const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-700 mb-12 animate-fade-in-up">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🍛",
              title: "Authentic Indian Flavors",
              desc: "We serve traditional recipes passed down through generations."
            },
            {
              icon: "🎉",
              title: "Event Specialists",
              desc: "From weddings to corporate events, we handle it all."
            },
            {
              icon: "🕒",
              title: "Timely Service",
              desc: "We value your time and deliver with punctuality and precision."
            }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-lg shadow bg-gray-50 animate-fade-in-up">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-red-700 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;