import React from "react";

const Products = () => {
  return (
<section id="features" className="py-12 lg:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16 animate__animated animate__fadeIn">
      <h2 className="text-3xl font-semibold text-black sm:text-4xl">
        Advanced Options Analysis Tools
      </h2>
      <p className="mt-4 text-base lg:text-lg text-gray-600">
        Everything you need to make informed trading decisions
      </p>
    </div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="relative p-6 rounded-lg border border-blue-600 hover:transform hover:scale-105 transition duration-300">
        <div className="relative">
          <div className="h-12 w-12 bg-blue-500 rounded-md flex items-center justify-center mb-4">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-medium text-black mb-2">Real-time Options Chain</h3>
          <p className="text-gray-600">Live streaming of options data including Greeks, IV, and volume analysis with instant updates.</p>
        </div>
      </div>

      <div className="relative p-6 rounded-lg border border-blue-600 hover:transform hover:scale-105 transition duration-300">
        <div className="relative">
          <div className="h-12 w-12 bg-blue-500 rounded-md flex items-center justify-center mb-4">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-medium text-black mb-2">Strategy Builder</h3>
          <p className="text-gray-600">Build and analyze complex options strategies with our intuitive visual strategy builder.</p>
        </div>
      </div>

      <div className="relative p-6 rounded-lg border border-blue-600 hover:transform hover:scale-105 transition duration-300">
        <div className="relative">
          <div className="h-12 w-12 bg-blue-500 rounded-md flex items-center justify-center mb-4">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-medium text-black mb-2">Advanced Charts</h3>
          <p className="text-gray-600">Professional-grade charting with Straddle/Strangle visualizations and technical indicators.</p>
        </div>
      </div>

      <div className="relative p-6 rounded-lg border border-blue-600 hover:transform hover:scale-105 transition duration-300">
        <div className="relative">
          <div className="h-12 w-12 bg-blue-500 rounded-md flex items-center justify-center mb-4">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </div>
          <h3 className="text-xl font-medium text-black mb-2">Risk Analysis</h3>
          <p className="text-gray-600">Comprehensive risk metrics and position sizing recommendations based on your portfolio.</p>
        </div>
      </div>

      <div className="relative p-6 rounded-lg border border-blue-600 hover:transform hover:scale-105 transition duration-300">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br rounded-lg"></div>
        <div className="relative">
          <div className="h-12 w-12 bg-blue-500 rounded-md flex items-center justify-center mb-4">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-medium text-black mb-2">Position Monitoring</h3>
          <p className="text-gray-600">Real-time tracking of your options positions with automated alerts and notifications.</p>
        </div>
      </div>

      <div className="relative p-6 rounded-lg border border-blue-600 hover:transform hover:scale-105 transition duration-300">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br rounded-lg"></div>
        <div className="relative">
          <div className="h-12 w-12 bg-blue-500 rounded-md flex items-center justify-center mb-4">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
            </svg>
          </div>
          <h3 className="text-xl font-medium text-black mb-2">Historical Data</h3>
          <p className="text-gray-600">Access to extensive historical options data for backtesting and strategy development.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Products;
