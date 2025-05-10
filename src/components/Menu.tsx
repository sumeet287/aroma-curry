// 📁 src/components/Menu.tsx
const menuItems = [
  {
    name: 'Paneer Butter Masala',
    description: 'A creamy tomato-based curry with tender paneer cubes.',
    price: '$12.99',
    image: '/images/menu/paneer.png'
  },
  {
    name: 'Chicken Biryani',
    description: 'Aromatic basmati rice cooked with marinated chicken and spices.',
    price: '$14.99',
    image: '/images/menu/biryani.png'
  },
  {
    name: 'Gulab Jamun',
    description: 'Soft milk-solid balls soaked in rose-flavored sugar syrup.',
    price: '$5.99',
    image: '/images/menu/gulabjamun.png'
  },
  {
    name: 'Butter Naan',
    description: 'Soft, buttery flatbread baked in a tandoor.',
    price: '$2.99',
    image: '/images/menu/naan.png'
  },
  {
    name: 'Tandoori Chicken',
    description: 'Chicken marinated in yogurt and spices, grilled to perfection.',
    price: '$13.99',
    image: '/images/menu/tandoori.png'
  },
  {
    name: 'Dal Makhani',
    description: 'Slow-cooked black lentils in a rich, buttery sauce.',
    price: '$10.99',
    image: '/images/menu/dalmakhani.png'
  }
];

const Menu = () => {
  return (
    <section
      className="py-24 bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: "url('/images/menu-bg.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 bg-black/60 backdrop-blur-md p-10 rounded-lg animate-fade-in-up">
        <h1 className="text-4xl font-bold text-red-400 mb-6 text-center">Our Menu</h1>
        <p className="text-lg mb-12 text-center">
          Explore a curated selection of Indian dishes, made with love and authentic flavors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className="bg-white/20 rounded-lg overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1 animate-fade-in-up"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-red-300 mb-2">{item.name}</h3>
                <p className="text-sm text-white/90 mb-3">{item.description}</p>
                <div className="text-right font-bold text-red-200">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Menu;
