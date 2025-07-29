import Link from "next/link"

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark-mode:bg-gradient-to-br dark-mode:from-gray-900 dark-mode:via-gray-800 dark-mode:to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8"></div>
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 space-y-8">
            {/* Título principal con color azul vibrante */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-blue-600 dark-mode:text-blue-400 drop-shadow-sm">Memento ToolKit</span>
            </h1>

            {/* Subtítulo con gradiente púrpura-azul */}
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl">
              <span className="font-semibold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 dark-mode:from-purple-400 dark-mode:via-blue-400 dark-mode:to-purple-500 bg-clip-text text-transparent">
                The All-in-One Web3 Toolkit to Elevate Your Business
              </span>{" "}
              <span className="text-gray-700 dark-mode:text-gray-300 font-normal">
                Quickly and securely deploy tokens with ease, using a complete set of tools designed for building
                successful Web3 projects. Create blockchain-based platforms and products with our low-code toolkit—no
                prior knowledge required.
              </span>
            </p>

            {/* Botón mejorado con gradiente y efectos */}
            <div className="pt-6">
              <Link
                href="/contact"
                className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-xl font-semibold transition-all duration-300 ease-out hover:scale-105"
              >
                {/* Fondo con gradiente */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 transition-all duration-300 group-hover:from-blue-700 group-hover:via-purple-700 group-hover:to-blue-800"></span>

                {/* Efecto de brillo */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>

                {/* Contenido del botón - TEXTO SIEMPRE BLANCO */}
                <span className="relative flex items-center space-x-2 text-white z-10">
                  <span className="text-white font-semibold">More info</span>
                  <svg
                    className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>

                {/* Sombra del botón */}
                <span className="absolute inset-0 rounded-xl shadow-lg shadow-blue-500/25 group-hover:shadow-xl group-hover:shadow-blue-500/40 transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          {/* Right Column - Code Preview mejorado */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              {/* Efecto de glow detrás del código */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark-mode:from-blue-400/20 dark-mode:to-purple-400/20 rounded-3xl blur-xl"></div>

              <div className="relative bg-[#0f172a] dark-mode:bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-800/50 dark-mode:border-gray-700 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="ml-3 text-blue-400 dark-mode:text-blue-300 text-sm font-medium">
                    Smart Contract Integration
                  </span>
                </div>
                <pre className="overflow-x-auto">
                  <code className="text-sm font-mono text-gray-300 dark-mode:text-gray-200">
                    {`// Memento ToolKit Smart Contract
import { Contract } from 'web3';
import { Token } from '@Fiat4Tokenstoolkit/core';

export const deployToken = async () => {
  const contract = new Contract({
    name: "MyToken",
    symbol: "MTK",
    decimals: 18
  });
  
  await contract.deploy();
  return contract;
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
