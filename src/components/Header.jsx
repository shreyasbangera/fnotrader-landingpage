import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router'

const Header = () => {
  const [isNavOpen, setIsNavOpen ] = useState(false)
  return (
    <header id="header" className="sticky top-0 left-0 w-full bg-white z-50 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between lg:h-20 h-16">
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <img src="https://fnotrader.com/static/media/falcon.fa3b1ec6.png" alt="FNOTrader Logo" className="h-8 w-auto transition-opacity duration-300 opacity-100" loading="lazy" />
            <span className="ml-2.5 text-blue-600 font-semibold text-xl tracking-tight">FNOTrader</span>
          </a>
        </div>
        <div className="hidden lg:flex items-center justify-center flex-1">
          <nav className="flex items-center font-medium space-x-4">
            <Link to="/#hero" className="text-gray-600 hover:bg-neutral-100 rounded-lg px-3 py-2">Home</Link>
            <Link to="/#discover" className="text-gray-600 hover:bg-neutral-100 rounded-lg px-3 py-2">Discover</Link>
            <Link to="/#quicktrade" className="text-gray-600 hover:bg-neutral-100 rounded-lg px-3 py-2">Quicktrade</Link>
            <Link to="/pricing" className="text-gray-600 hover:bg-neutral-100 rounded-lg px-3 py-2">Pricing</Link>
            <Link to="/#education" className="text-gray-600 hover:bg-neutral-100 rounded-lg px-3 py-2">Education</Link>
            <Link to="/contact" className="text-gray-600 hover:bg-neutral-100 rounded-lg px-3 py-2">Contact</Link>
          </nav>
        </div>
        <div className="hidden lg:flex items-center font-medium space-x-4">
          <Link to="/#cta" className="bg-white hover:bg-neutral-100 border border-neutral-200 px-8 py-3 text-center rounded-md">Login</Link>
          <Link to="/#cta" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-center rounded-md">Register</Link>
        </div>

        <div className="lg:hidden">
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isNavOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

    {isNavOpen && <div id="mobile-menu" className='fixed w-full bg-white border-t border-neutral-200'>
      <nav className="flex flex-col space-y-2 font-medium px-4 py-4 shadow-lg">
      <Link to="/#hero" className="text-gray-600 hover:text-blue-600 px-3 py-3">Home</Link>
      <Link to="/#discover" className="text-gray-600 hover:text-blue-600 px-3 py-3">Discover</Link>
      <Link to="/#quicktrade" className="text-gray-600 hover:text-blue-600 px-3 py-3">Quicktrade</Link>
      <Link to="/pricing" className="text-gray-600 hover:text-blue-600 px-3 py-3">Pricing</Link>
      <Link to="/#education" className="text-gray-600 hover:text-blue-600 px-3 py-3">Education</Link>
      <Link to="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-3">Contact</Link>
      <Link to="/#cta" className="bg-white border border-neutral-200 px-4 py-3 h-12 text-center rounded-md">Login</Link>
      <Link to="/#cta" className="bg-blue-600 text-white px-4 py-3 h-12 text-center rounded-md">Register</Link>
      </nav>
    </div>}
  </header>
  )
}

export default Header