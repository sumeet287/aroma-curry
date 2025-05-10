// 📁 src/components/CateringInfo.tsx
'use client';
import { useState } from 'react';

const testimonials = [
  {
    quote: "The Aroma Curry team was incredibly professional and the food was phenomenal. Every guest was blown away!",
    name: "Maria G.",
    location: "Monterrey"
  },
  {
    quote: "Absolutely divine flavors and stunning presentation. Our corporate clients were impressed beyond words.",
    name: "Luis M.",
    location: "Mexico City"
  },
  {
    quote: "From planning to execution, they nailed every detail. Will definitely book again!",
    name: "Priyanka R.",
    location: "Guadalajara"
  }
];

const CateringInfo = () => {
  const [form, setForm] = useState({ name: '', email: '', date: '', eventType: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Request submitted!');
    setForm({ name: '', email: '', date: '', eventType: '', message: '' });
  };

  return (
    <section
      className="py-24 bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: "url('/images/catering-bg.png')" }}
    >
      <div className="max-w-6xl mx-auto px-6 bg-black/60 backdrop-blur-md p-8 rounded-lg animate-fade-in-up">
        <h1 className="text-4xl font-bold text-red-400 mb-4">Catering Services</h1>
        <p className="text-lg mb-8">
          From intimate gatherings to lavish celebrations, we deliver catering experiences that impress.
          Reach out for weddings, corporate events, birthdays, and more.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-red-300 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>Wedding & Reception Catering</li>
              <li>Corporate Event Menus</li>
              <li>Birthday Parties & Family Celebrations</li>
              <li>Live Food Counters & Buffets</li>
              <li>Customizable Menu Options</li>
              <li>On-time Delivery & Setup</li>
            </ul>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Client Love 💕</h3>
              <div className="space-y-4">
                {testimonials.map((t, i) => (
                  <blockquote
                    key={i}
                    className="bg-white/10 p-4 rounded-lg shadow border-l-4 border-red-400 text-sm text-white italic animate-fade-in-up"
                  >
                    "{t.quote}"
                    <span className="block mt-2 text-right font-semibold not-italic">
                      — {t.name}, {t.location}
                    </span>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white/20 p-6 rounded-lg shadow space-y-4 backdrop-blur-md animate-fade-in-up"
          >
            <h2 className="text-2xl font-semibold text-white">Request Catering Info</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded bg-white/80 text-black placeholder-gray-600"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded bg-white/80 text-black placeholder-gray-600"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              className="w-full px-4 py-2 border rounded bg-white/80 text-black"
              value={form.date}
              onChange={handleChange}
              required
            />
            <select
              name="eventType"
              className="w-full px-4 py-2 border rounded bg-white/80 text-black"
              value={form.eventType}
              onChange={handleChange}
              required
            >
              <option value="">Select Event Type</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Corporate">Corporate Event</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Tell us about your event..."
              className="w-full px-4 py-2 border rounded bg-white/80 text-black placeholder-gray-600"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default CateringInfo;
