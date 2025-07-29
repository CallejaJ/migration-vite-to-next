import Link from "next/link"
import BuyStakeInterface from "./BuyStakeInterface"

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="feature-card bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
    <h3 className="text-xl font-semibold gradient-text group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300 mb-2">
      {title}
    </h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const PaymentSolutions = () => {
  const features = [
    {
      title: "Optimization Powered by Data",
      description: "Your workflows are automatically optimized to maximize conversions.",
    },
    {
      title: "Automated Reporting",
      description: "Effortlessly create easy-to-read reports with just a click.",
    },
    {
      title: "Support for Over 100 Tokens",
      description: "Accept over 100 cryptocurrencies, ensuring comprehensive coverage and seamless transactions.",
    },
    {
      title: "Cutting-Edge Analytics",
      description:
        "Gain in-depth insights with detailed metrics to identify exactly where your users are dropping off.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="lg:flex lg:items-center lg:gap-16">
          {/* Left side - Interface Preview */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <BuyStakeInterface />
          </div>
          {/* Right side - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Exploring Payment Solutions?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Look no further than <span className="gradient-text font-semibold">Web3Payments</span>! The Web3Payments
              platform enables one-click deployment of smart contracts, allowing you to accept payments seamlessly on
              platforms like Angular, React, Shopify, and more. With full control over your contracts, you can process
              direct user transactions without relying on intermediaries.
            </p>
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} title={feature.title} description={feature.description} />
              ))}
            </div>
            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 gradient-bg hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              I&apos;m interested
              <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentSolutions
