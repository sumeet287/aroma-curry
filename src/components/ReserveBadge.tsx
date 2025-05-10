// 📁 src/components/ReserveBadge.tsx
'use client';

const ReserveBadge = () => {
  return (
    <a
  href="/contact"
  className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-5 rounded-full shadow-lg transition duration-300 animate-bounce"
>
  🍽️ Reserve Table
</a>

  );
};

export default ReserveBadge;
