const IllustrationSection = () => {
  return (
    <div className="illustration-container relative w-full aspect-square">
      {/* Fondo con patrón de grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl overflow-hidden">
        <div className="grid-pattern opacity-30"></div>
      </div>
      {/* Contenido principal */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Círculo central con blockchain */}
        <div className="relative w-64 h-64">
          {/* Anillo exterior rotante */}
          <div className="absolute inset-0 border-4 border-dashed border-blue-200 rounded-full animate-spin-slow"></div>
          {/* Nodos conectados */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <div
              key={angle}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${Math.cos((angle * Math.PI) / 180) * 50 + 50}%`,
                top: `${Math.sin((angle * Math.PI) / 180) * 50 + 50}%`,
              }}
            >
              <div className="w-4 h-4 bg-blue-500 rounded-full">
                <div className="w-full h-full bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
        {/* Elemento de código/contrato */}
        <div className="absolute bottom-16 left-8 animate-float-delay">
          <div className="bg-gray-900 p-4 rounded-xl shadow-lg">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <div className="space-y-1">
              <div className="w-16 h-1.5 bg-blue-500/30 rounded"></div>
              <div className="w-12 h-1.5 bg-green-500/30 rounded"></div>
              <div className="w-20 h-1.5 bg-purple-500/30 rounded"></div>
            </div>
          </div>
        </div>
        {/* Icono de llave */}
        <div className="absolute top-8 left-8 animate-float-inverse">
          <div className="bg-blue-600 p-3 rounded-xl shadow-lg">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
          </div>
        </div>
        {/* Candado superior */}
        <div className="absolute top-8 right-8 animate-float">
          <div className="bg-white p-4 rounded-2xl shadow-lg">
            <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="11" width="18" height="11" rx="2" strokeWidth={2} />
              <path d="M7 11V7a5 5 0 0110 0v4" strokeWidth={2} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IllustrationSection
