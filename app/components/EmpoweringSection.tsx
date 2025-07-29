import IllustrationSection from "./IllustrationSection";

const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className='bg-white hover:bg-gray-50 rounded-2xl p-8 shadow-sm transition-all hover:shadow-md border border-gray-100'>
      <h3 className='text-xl font-semibold gradient-text mb-3'>{title}</h3>
      <p className='text-gray-600 leading-relaxed'>{description}</p>
    </div>
  );
};

const EmpoweringSection = () => {
  const features = [
    {
      title: "Rapid Smart Contract Deployments",
      description:
        "We enable crypto functionality for your product instantly, allowing users to connect their wallets with ease. This smooth integration ensures your audience can engage with your platform immediately, boosting satisfaction and interaction.",
    },
    {
      title: "Maintain Full Ownership and Control",
      description:
        "With Memento Toolkit, you have complete ownership and control over your smart contracts and their outputs. Our platform empowers you to innovate and grow your services securely, ensuring compliance while keeping your creations entirely in your hands.",
    },
  ];

  return (
    <section className='py-24 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='lg:flex lg:items-center lg:gap-20'>
          {/* Contenido Principal */}
          <div className='lg:w-1/2 mb-16 lg:mb-0'>
            <div className='max-w-xl'>
              <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                Unleashing Web3 Potential
                <br />
                <span className='gradient-text'>to Elevate Your Platform</span>
              </h2>
              <p className='text-gray-600 text-lg mb-12 leading-relaxed'>
                Memento Toolkit is designed to elevate your digital product by
                seamlessly integrating cutting-edge blockchain features. Our
                solution modernizes your platform with the latest cryptocurrency
                technology while ensuring you retain full control and autonomy.
              </p>
              <div className='space-y-6'>
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>
          </div>
          {/* Ilustración */}
          <div className='lg:w-1/2'>
            <IllustrationSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringSection;
