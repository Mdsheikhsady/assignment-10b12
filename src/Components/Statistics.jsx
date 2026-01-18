
const Statistics = () => {

  const stats = [
    { label: "Pets Adopted", value: "1,200+" },
    { label: "Professional Vets", value: "45+" },
    { label: "Happy Owners", value: "3,000+" },
    { label: "Success Rate", value: "98%" },
  ];

  return (
    <div className="bg-primary text-primary-content py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-4xl font-bold">{stat.value}</div>
            <div className="text-sm uppercase tracking-wide opacity-80">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;