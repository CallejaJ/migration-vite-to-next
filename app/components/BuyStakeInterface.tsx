import { Coins, DollarSign, Zap } from "lucide-react"

const BuyStakeInterface = () => {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 text-white shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold gradient-text">Buy</h3>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      {/* Token Selection */}
      <div className="flex gap-3 mb-6">
        <button className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group">
          <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center">
            <Coins className="w-3 h-3 text-white" />
          </div>
          <span className="font-medium group-hover:text-white transition-colors">ETH</span>
        </button>
        <button className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group">
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
            <DollarSign className="w-3 h-3 text-white" />
          </div>
          <span className="font-medium group-hover:text-white transition-colors">USDT</span>
        </button>
      </div>
      {/* Balance Display */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-400 text-sm">ETH Balance</div>
        <div className="text-sm font-mono">0.0000</div>
      </div>
      {/* Exchange Interface */}
      <div className="space-y-4 mb-6">
        {/* Pay with ETH */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Pay with ETH</span>
            <button className="gradient-text hover:from-blue-400 hover:to-purple-400 transition-all duration-300 font-medium">
              Max
            </button>
          </div>
          <div className="flex items-center bg-gray-800 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 border border-gray-700">
            <input type="text" className="bg-transparent flex-1 outline-none font-mono text-lg" placeholder="0" />
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center">
                <Coins className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium">ETH</span>
            </div>
          </div>
        </div>
        {/* Receive BTM */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Receive BTM</span>
            <div className="flex items-center space-x-2">
              <span className="text-green-500 text-xs">↑ 13.47%</span>
            </div>
          </div>
          <div className="flex items-center bg-gray-800 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 border border-gray-700">
            <input type="text" className="bg-transparent flex-1 outline-none font-mono text-lg" placeholder="0" />
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>
              <span className="text-sm font-medium">BTM</span>
            </div>
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="mb-6 p-3 bg-gray-800 rounded-xl border border-gray-700">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <div className="text-gray-400">Price Impact</div>
            <div className="text-green-500">{"<0.01%"}</div>
          </div>
          <div className="space-y-1">
            <div className="text-gray-400">Min. Received</div>
            <div className="font-mono">0.00 BTM</div>
          </div>
        </div>
      </div>
      {/* Action Button */}
      <button className="w-full gradient-bg hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 transform hover:translate-y-[-1px] shadow-lg hover:shadow-xl group">
        <span className="flex items-center justify-center space-x-2">
          <span>Buy</span>
          <Zap className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
        </span>
      </button>
      {/* Footer Stats */}
      <div className="mt-4 pt-4 border-t border-gray-800">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <span>Gas Fee:</span>
            <span className="font-mono">~$0.01</span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">⚡</span>
            <span>High Speed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyStakeInterface
