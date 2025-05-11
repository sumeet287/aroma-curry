'use client';

import { useState, useEffect } from 'react';
import { FaUser, FaCalendarAlt, FaClock } from 'react-icons/fa';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

export default function ContactPage() {
  const [people, setPeople] = useState(2);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('19:00');

  useEffect(() => {
    const animatedSections = document.querySelectorAll('.fade-in-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    animatedSections.forEach((section) => observer.observe(section));
    return () => animatedSections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen bg-[url('/images/contact-bg.png')] bg-cover bg-center text-white py-20 px-6 overflow-y-auto">
      <div className="bg-black/70 backdrop-blur-lg rounded-xl max-w-6xl mx-auto p-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-red-400 mb-6">Contact Us</h1>
        <p className="text-center text-lg text-gray-300 mb-12">
          We’d love to hear from you! Reach out for reservations or inquiries.
        </p>

        {/* Reservation Section */}
        <div className="bg-white/10 p-6 rounded-lg shadow-lg mb-16 fade-in-scroll">
          <h2 className="text-2xl font-semibold mb-6 text-white">Reserve a Table</h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-center">
            <div className="bg-black/50 border border-white/20 px-4 py-2 rounded flex items-center gap-2">
              {(FaUser({ className: 'text-white' }) as JSX.Element)}
              <select
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
                className="w-full bg-transparent text-white focus:outline-none border-none appearance-none"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n} className="text-black">
                    {n} {n === 1 ? 'person' : 'people'}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-black/50 border border-white/20 px-4 py-2 rounded flex items-center gap-2">
              {(FaCalendarAlt({ className: 'text-white' }) as JSX.Element)}
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent text-white focus:outline-none border-none appearance-none"
              />
            </div>
            <div className="bg-black/50 border border-white/20 px-4 py-2 rounded flex items-center gap-3 font-mono h-[48px]">
  {(FaClock({ className: 'text-white' }) as JSX.Element)}
  <div className="flex-1">
    <TimePicker
      onChange={(value) => {
        if (value) {
          const [hours, minutes] = value.split(':').map(Number);
          if (minutes >= 60) {
            setTime(`${hours}:${minutes % 60}`); // Adjust minutes to valid range
          } else {2
            setTime(value);
          }
        }
      }}
      value={time}
      disableClock={true}
      className="react-time-picker-dark w-full"
      clearIcon={null}
      format="hh:mm a"
      amPmAriaLabel="Select AM/PM"
    />
  </div>
</div>
            <button className="h-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition-all duration-300 hover:scale-105">
              Find a Table
            </button>
          </div>
        </div>

        {/* WhatsApp Section */}
        <div className="text-center mb-12 fade-in-scroll">
          <p className="text-lg mb-4">You can now place your order directly through our WhatsApp number.</p>
          <a
            href="https://wa.me/5554969893"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition duration-300"
          >
            💬 Send us a message
          </a>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-12 text-sm md:text-base text-gray-200 fade-in-scroll">
          <div>
            <h3 className="text-xl font-bold mb-2 text-red-300">Aroma Curry</h3>
            <p>📍 21 Holy Spirit Bay Street, 11320 Mexico City, Mexico</p>
            <p className="mt-2">📞 555-496-9893</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-red-300">Opening Hours</h3>
            <ul className="space-y-1">
              <li>Mon–Sat: 12:00 pm – 9:30 pm</li>
              <li>Sun: 12:00 pm – 9:30 pm</li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  );
}
