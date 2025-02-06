import React, { useState } from 'react'
import { Link } from 'react-router'

const Header = () => {
  const [isNavOpen, setIsNavopen ] = useState(false)
  return (
    <header id="header" className="sticky top-0 left-0 w-full bg-white z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <img src="https://fnotrader.com/static/media/falcon.fa3b1ec6.png" alt="FNOTrader Logo" className="h-8 w-auto transition-opacity duration-300 opacity-100" loading="lazy" />
            <span className="ml-2 text-blue-600 font-semibold text-xl">FNOTrader</span>
          </a>
        </div>
        <div className="hidden lg:block">
          <nav className="ml-10 flex items-center space-x-4">
            <Link to="/#hero" className="text-gray-600 hover:text-blue-600 px-3 py-2">Home</Link>
            <Link to="/#discover" className="text-gray-600 hover:text-blue-600 px-3 py-2">Discover</Link>
            <Link to="/#quicktrade" className="text-gray-600 hover:text-blue-600 px-3 py-2">Quicktrade</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-blue-600 px-3 py-2">Pricing</Link>
            <Link to="/#education" className="text-gray-600 hover:text-blue-600 px-3 py-2">Education</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2">Contact</Link>
            <Link to="/#cta" className="bg-white border border-blue-600 px-4 py-2 text-center rounded-md">Login</Link>
            <Link to="/#cta" className="bg-blue-600 text-white px-4 py-2 text-center rounded-md">Register</Link>
          </nav>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsNavopen(!isNavOpen)} id="mobile-menu-button" className="text-gray-600" aria-label="Main menu" aria-expanded="false">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path className="open" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path className="close hidden" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    {isNavOpen && <div id="mobile-menu" className='bg-white'>
      <div className="flex flex-col space-y-2 px-4 py-4">
      <Link to="/#hero" className="text-gray-600 hover:text-blue-600 px-3 py-2">Home</Link>
      <Link to="/#discover" className="text-gray-600 hover:text-blue-600 px-3 py-2">Discover</Link>
      <Link to="/#quicktrade" className="text-gray-600 hover:text-blue-600 px-3 py-2">Quicktrade</Link>
      <Link to="/pricing" className="text-gray-600 hover:text-blue-600 px-3 py-2">Pricing</Link>
      <Link to="/#education" className="text-gray-600 hover:text-blue-600 px-3 py-2">Education</Link>
      <Link to="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2">Contact</Link>
      <Link to="/#cta" className="bg-white border border-blue-600 px-4 py-2 text-center rounded-md">Login</Link>
      <Link to="/#cta" className="bg-blue-600 text-white px-4 py-2 text-center rounded-md">Register</Link>
      </div>
    </div>}
  </header>
  )
}

export default Header