"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeftRight } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100/50"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-200/30"
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo mejorado */}
          <Link href='/' className='flex items-center space-x-3 group'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300'></div>
              <div className='relative p-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300 transform group-hover:scale-105'>
                <ArrowLeftRight className='w-5 h-5 text-white' />
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex items-baseline space-x-1'>
                <span className='text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300'>
                  Memento
                </span>
                <span className='text-xl font-bold gradient-text'>
                  ToolKit
                </span>
              </div>
              <span className='text-[10px] text-gray-500 font-semibold tracking-[0.15em] uppercase font-sans mt-0.5'>
                Web3 Solutions
              </span>
            </div>
          </Link>

          {/* Navigation Links - Ahora incluye Contact */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              href='/#features'
              className='text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 relative group'
            >
              Features
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
            </Link>
            <Link
              href='/#solutions'
              className='text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 relative group'
            >
              Solutions
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
            </Link>
            <Link
              href='/#about'
              className='text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 relative group'
            >
              About
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
            </Link>
            <Link
              href='/contact'
              className='text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 relative group'
            >
              Contact
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
            </Link>
          </div>

          {/* Espacio vacío en móvil para mantener balance del layout */}
          <div className='md:hidden'></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;