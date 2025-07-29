const MetricsSection = () => {
  const metrics = [
    {
      value: "10K+",
      label: "Happy Customers",
      color: "text-blue-600",
    },
    {
      value: "99.9%",
      label: "Uptime",
      color: "text-purple-600",
    },
    {
      value: "24/7",
      label: "Support",
      color: "text-blue-600",
    },
    {
      value: "100+",
      label: "Supported Tokens",
      color: "text-purple-600",
    },
  ];

  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Trusted by{" "}
            <span className='gradient-text font-bold'>Thousands</span>
          </h2>
          <p className='text-gray-600 text-lg'>
            Join the growing community of Web3 builders
          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
          {metrics.map((metric, index) => (
            <div key={index} className='group'>
              <h3
                className={`text-4xl font-bold ${metric.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
              >
                {metric.value}
              </h3>
              <p className='text-gray-600 font-medium'>{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
