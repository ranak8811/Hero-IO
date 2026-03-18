const StatsSection = () => {
  const stats = [
    {
      label: "Total Downloads",
      value: "29.6M",
      subtext: "21% More Than Last Month",
    },
    {
      label: "Total Reviews",
      value: "906K",
      subtext: "46% More Than Last Month",
    },
    {
      label: "Active Apps",
      value: "132+",
      subtext: "31 More Will Launch",
    },
  ];

  return (
    <section className="bg-violet-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-violet-200 text-sm font-medium mb-2 uppercase tracking-wider">
                {stat.label}
              </p>
              <h3 className="text-white text-5xl md:text-6xl font-extrabold mb-3">
                {stat.value}
              </h3>
              <p className="text-violet-100 text-sm opacity-80">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
