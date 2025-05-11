import SectionHeading from "@/components/SectionHeading";

const FeaturedDishes = () => {
  return (
    <section id="menu" className="py-4 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading title="Featured Dishes" /> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Tandoori Chicken", desc: "Smoky, juicy and perfectly spiced.", img: "/images/featuredDish1.png" },
            { name: "Veg Thali", desc: "A complete traditional Indian meal.", img: "/images/featuredDish2.png" },
            { name: "Butter Naan & Paneer", desc: "Cheesy richness meets soft bread.", img: "/images/featuredDish3.png" },
          ].map((dish, i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-1 animate-fade-in-up"
            >
              <img src={dish.img} alt={dish.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-700 mb-2">{dish.name}</h3>
                <p className="text-gray-600 text-sm">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedDishes;
