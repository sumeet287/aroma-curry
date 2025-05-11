const SectionHeading = ({ title }: { title: string }) => {
  return (
    <div className="text-center mb-4 animate-fade-in-up">
      <h2 className="text-3xl font-bold text-red-700">{title}</h2>
      <svg
        className="mx-auto mt-3"
        width="120"
        height="15"
        viewBox="0 0 120 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 7C10 2 20 13 30 7C40 1 50 13 60 7C70 1 80 13 90 7C100 1 110 13 118 7"
          stroke="#B91C1C"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default SectionHeading;
