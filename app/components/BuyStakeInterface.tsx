import { Coins, DollarSign, Zap } from "lucide-react";

const BuyStakeInterface = () => {
  return (
    <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 text-white shadow-xl max-w-md mx-auto">
      {/* Header con título y semáforo */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-blue-400 text-lg sm:text-xl font-semibold">Buy</h2>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Token Selection */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-3 flex-1">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
            <svg
              viewBox="0 0 24 24"
              className="w-3 h-3 sm:w-4 sm:h-4 text-white fill-current"
            >
              <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
            </svg>
          </div>
          <span className="text-white font-semibold text-base sm:text-lg">ETH</span>
        </div>

        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0 mx-2">
          <span className="text-gray-300 text-sm">⇄</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-1 justify-end">
          <span className="text-white font-semibold text-base sm:text-lg">USDT</span>
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xs sm:text-sm">₮</span>
          </div>
        </div>
      </div>

      {/* Balance Display */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <span className="text-gray-400 text-xs sm:text-sm">ETH Balance</span>
        <span className="text-white font-mono text-xs sm:text-sm">0.0000</span>
      </div>

      {/* Pay with ETH */}
      <div className="mb-3 sm:mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400 text-xs sm:text-sm">Pay with ETH</span>
          <button className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-medium">
            Max
          </button>
        </div>
        <div className="flex items-center bg-gray-800/40 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-600/30 focus-within:border-blue-400/50 focus-within:bg-gray-800/60 transition-all duration-300">
          <input
            type="text"
            className="bg-transparent flex-1 outline-none text-white font-mono placeholder:text-gray-400 text-sm sm:text-base min-w-0"
            placeholder="0"
          />
          <div className="flex items-center gap-2 ml-2 flex-shrink-0">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white fill-current"
              >
                <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
              </svg>
            </div>
            <span className="text-white font-medium text-xs sm:text-sm">ETH</span>
          </div>
        </div>
      </div>

      {/* Receive BTM */}
      <div className="mb-4 sm:mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400 text-xs sm:text-sm">Receive BTM</span>
          <span className="text-green-400 text-xs sm:text-sm flex items-center gap-1">
            <span>↗</span>
            13.47%
          </span>
        </div>
        <div className="flex items-center bg-gray-800/40 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-600/30 focus-within:border-blue-400/50 focus-within:bg-gray-800/60 transition-all duration-300">
          <input
            type="text"
            className="bg-transparent flex-1 outline-none text-white font-mono placeholder:text-gray-400 text-sm sm:text-base min-w-0"
            placeholder="0"
          />
          <div className="flex items-center gap-2 ml-2 flex-shrink-0">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-yellow-500 flex items-center justify-center">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-300 rounded-full"></div>
            </div>
            <span className="text-white font-medium text-xs sm:text-sm">BTM</span>
          </div>
        </div>
      </div>

      {/* Price Impact Info */}
      <div className="flex justify-between text-xs sm:text-sm mb-4 sm:mb-6">
        <div>
          <div className="text-gray-400 mb-1">Price Impact</div>
          <div className="text-green-400">&lt;0.01%</div>
        </div>
        <div className="text-right">
          <div className="text-gray-400 mb-1">Min. Received</div>
          <div className="text-white">0.00 BTM</div>
        </div>
      </div>

      {/* Buy Button */}
      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl mb-3 sm:mb-4">
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm sm:text-base">Buy</span>
          <Zap className="w-4 h-4" />
        </div>
      </button>

      {/* Footer Stats */}
      <div className="pt-3 sm:pt-4 border-t border-gray-700/50">
        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <span>Gas Fee:</span>
            <span className="font-mono text-white">~$0.01</span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">⚡</span>
            <span>High Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyStakeInterface;