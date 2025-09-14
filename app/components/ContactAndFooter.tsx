"use client"

import Link from "next/link"
import { ArrowLeftRight, ArrowUp, Mail, Github, Twitter } from "lucide-react"

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Sección principal */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <ArrowLeftRight className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-xl font-bold text-gray-900">Memento</span>
                  <span className="text-xl font-bold gradient-text">ToolKit</span>
                </div>
                <span className="text-[10px] text-gray-500 font-semibold tracking-[0.15em] uppercase font-sans mt-0.5">
                  Web3 Solutions
                </span>
              </div>
            </div>
            <p className="text-gray-600 max-w-md leading-relaxed">
              The all-in-one Web3 toolkit to elevate your business. Deploy tokens, manage contracts, and build blockchain solutions with ease.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto y acciones */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <Link
                href="/contact"
                className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact us
              </Link>
             
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>© 2024 Memento ToolKit. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export const ContactAndFooter = () => {
  return (
    <>
      <Footer />
    </>
  )
}

export default ContactAndFooter