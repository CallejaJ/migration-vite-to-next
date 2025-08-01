"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Footer } from "../components/ContactAndFooter"
import { motion } from "framer-motion"

const DataFlowAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[400px] h-[300px] bg-gradient-to-br from-blue-50 via-purple-50/30 to-gray-50 rounded-3xl p-8 border border-blue-100/50 shadow-xl">
        {/* Grid de fondo mejorado */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        {/* Efecto de glow sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent rounded-3xl"></div>
        {/* Líneas de conexión - Curva más suave */}
        <svg className="absolute inset-0 w-full h-full">
          <path
            d="M 80,150 Q 200,50 320,150"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
            className="opacity-30"
          />
          <path
            d="M 80,150 Q 200,250 320,150"
            stroke="#9333EA"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
            className="opacity-30"
          />
        </svg>
        {/* Sobre (origen) con gradiente */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2">
          <motion.div
            className="gradient-bg w-16 h-16 rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            {/* Efecto de brillo interno */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
            <svg className="w-8 h-8 text-white relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </motion.div>
        </div>
        {/* Servidor (destino) con gradiente */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2">
          <motion.div
            className="bg-gradient-to-br from-purple-500 to-blue-600 w-16 h-16 rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden"
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            {/* Efecto de brillo interno */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
            <svg className="w-8 h-8 text-white relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="2" y="2" width="20" height="8" rx="2" strokeWidth={2} />
              <rect x="2" y="14" width="20" height="8" rx="2" strokeWidth={2} />
              <circle cx="6" cy="6" r="1" fill="currentColor" />
              <circle cx="6" cy="18" r="1" fill="currentColor" />
              <path d="M10 6h8" strokeWidth={2} strokeLinecap="round" />
              <path d="M10 18h8" strokeWidth={2} strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
        {/* Paquetes de datos animados - Ruta superior */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={`top-${index}`}
            className="absolute"
            initial={{ left: "80px", top: "150px" }}
            animate={{
              left: ["80px", "320px"],
              top: ["150px", "100px", "150px"],
              scale: [0.8, 1, 0.8],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 1,
              ease: "easeInOut",
            }}
          >
            <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg" />
          </motion.div>
        ))}
        {/* Paquetes de datos animados - Ruta inferior */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={`bottom-${index}`}
            className="absolute"
            initial={{ left: "80px", top: "150px" }}
            animate={{
              left: ["80px", "320px"],
              top: ["150px", "200px", "150px"],
              scale: [0.8, 1, 0.8],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 1 + 1.5,
              ease: "easeInOut",
            }}
          >
            <div className="w-4 h-4 bg-purple-500 rounded-full shadow-lg" />
          </motion.div>
        ))}
        {/* Partículas brillantes */}
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute"
            initial={{
              x: Math.random() * 400,
              y: Math.random() * 300,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.5,
              ease: "easeInOut",
            }}
          >
            <div className={`w-2 h-2 rounded-full blur-sm ${index % 2 === 0 ? "bg-blue-300" : "bg-purple-300"}`} />
          </motion.div>
        ))}
        {/* Elementos decorativos adicionales */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse-custom"></div>
        <div
          className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse-custom"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simular envío (reemplazar con lógica real)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
    // Mostrar mensaje de éxito (opcional)
    alert("Message sent successfully!")
  }

  return (
    <>
      <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="lg:flex items-center gap-16">
            {/* Formulario mejorado */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl font-bold mb-2">
                  <span className="gradient-text">Get in Touch</span>
                </h1>
                <p className="text-gray-600 mb-8 text-lg">Have any questions? We&apos;d love to hear from you.</p>
              </motion.div>
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white focus:bg-white"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white focus:bg-white"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white focus:bg-white"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white focus:bg-white"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your project or question..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-bg hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </motion.form>
              {/* Información adicional */}
              <motion.div
                className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 interactive-element"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="gradient-text font-semibold">Quick Response</h4>
                    <p className="text-gray-600 text-sm">We typically respond within 24 hours</p>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Animación mejorada */}
            <motion.div
              className="lg:w-1/2 h-[500px] mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <DataFlowAnimation />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
