"use client";

import Link from "next/link";

// Precompute static positions to avoid hydration issues
const PARTICLE_POSITIONS = [0, 60, 120, 180, 240, 300].map((angle) => ({
  angle,
  left: Math.round((50 + 42 * Math.cos((angle * Math.PI) / 180)) * 100) / 100,
  top: Math.round((50 + 42 * Math.sin((angle * Math.PI) / 180)) * 100) / 100,
}));

const RightIllustration = () => {
  return (
    <div className="lg:w-1/2">
      <div className="bg-gradient-to-br from-blue-50 via-purple-50/30 to-gray-50 rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden border border-blue-100/50">
        {/* Patrón de fondo */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        {/* Efecto de glow sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent rounded-3xl"></div>
        <div className="relative">
          {/* Círculo de conexión */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[280px] h-[280px] lg:w-[300px] lg:h-[300px] border-2 border-dashed border-blue-200 rounded-full animate-spin-slow"></div>
          </div>
          {/* Contenido Principal */}
          <div className="relative z-10">
            {/* Fila superior de iconos */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8 items-center mb-12 lg:mb-16">
              {/* Logo de Rabby */}
              <div className="flex justify-center">
                {/* <div className='bg-white p-3 lg:p-4 rounded-2xl shadow-lg transform hover:scale-105 transition-transform animate-float'> */}
                <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center">
                  <img
                    src="/images/rabby.png"
                    alt="Rabby Wallet"
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* </div> */}
              </div>

              {/* Icono central - Punto de conexión */}
              <div className="flex justify-center">
                <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse-custom"></div>
              </div>

              {/* Logo de MetaMask */}
              <div className="flex justify-center">
                <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center">
                  <img
                    src="/images/metamask.png"
                    alt="MetaMask"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            {/* Líneas de conexión */}
            <div className="absolute top-1/2 left-0 right-0 -mt-px">
              <svg className="w-full" height="2">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="#A78BFA"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
              </svg>
            </div>
            {/* Texto WEB3 */}
            <div className="text-center mt-12 lg:mt-16">
              <div className="font-mono text-xl lg:text-2xl font-bold gradient-text">
                WEB3
              </div>
            </div>
            {/* Puntos de conexión animados - FIXED FOR HYDRATION */}
            <div className="absolute inset-0">
              {PARTICLE_POSITIONS.map((position, index) => (
                <div
                  key={position.angle}
                  className={`absolute w-2 h-2 rounded-full ${
                    index % 2 === 0 ? "bg-blue-400" : "bg-purple-400"
                  }`}
                  style={{
                    left: `${position.left}%`,
                    top: `${position.top}%`,
                    animation: "pulse 2s infinite",
                    animationDelay: `${index * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WalletIntegration = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
          {/* Left side content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="gradient-text">Seamlessly Connect</span>
              <br />
              with Any Wallet
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Enable secure cryptocurrency transactions on your website with
              compatibility for any on-chain wallet. Backed by advanced
              encryption, on-chain security, and immutability,{" "}
              <span className="gradient-text font-semibold">
                Memento Toolkit
              </span>{" "}
              guarantees peace of mind for every transaction.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 gradient-bg text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <svg
                className="ml-2 w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
          {/* Right side illustration */}
          <RightIllustration />
        </div>
      </div>
    </section>
  );
};

const Questions = () => {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              <span className="gradient-text">Got questions?</span> We're here
              to assist!
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
              Reach out to us, and we'll respond quickly!
            </p>
          </div>
          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 gradient-bg text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-medium"
            >
              Send a message
              <svg
                className="ml-3 w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
            {/* Response Time Card */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100/50 shadow-lg interactive-element">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="gradient-text font-semibold text-lg">
                    Quick Response
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
            {/* Support Quality Card */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100/50 shadow-lg interactive-element">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="gradient-text font-semibold text-lg">
                    Expert Support
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Dedicated team with deep Web3 knowledge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WalletAndNewsletterSection = () => {
  return (
    <>
      <WalletIntegration />
      <Questions />
    </>
  );
};

export default WalletAndNewsletterSection;
