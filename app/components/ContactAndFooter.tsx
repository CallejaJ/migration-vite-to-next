"use client"

import Link from "next/link"

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="footer bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <span className="text-lg font-medium">© 2024, Memento ToolKit</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="gradient-text hover:border-blue-200 font-medium px-4 py-2 rounded-lg border border-transparent transition-all duration-300"
            >
              Contact us
            </Link>
            <button
              onClick={scrollToTop}
              className="gradient-bg text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>Back to top</span>
            </button>
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
