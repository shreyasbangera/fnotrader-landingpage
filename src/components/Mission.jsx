import React from 'react'

const Mission = () => {
  return (
    <section id="mission" className="py-12 lg:py-20 bg-gradient-to-r from-blue-700 to-blue-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center lg:mb-16 mb-12">
        <h2 className="text-2xl text-white lg:text-4xl font-semibold mb-4">Our Mission</h2>
        <p className="text-base lg:text-lg text-gray-100">Learn and Grow with FNOTrader</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="prose prose-lg text-gray-100">
          <p className="mb-6">At FNOTrader, our mission is to empower Futures and Options (F&amp;O) traders with unique market insights, unconventional charts, and other essential tools needed to navigate the markets with unparalleled confidence and success in the dynamic world of F&amp;O Trading.</p>
          <p>We simplify market analysis and trade execution through our trader-focused products, Discover and QuikTrade.</p>
          
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Real-time market analysis</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Advanced trading tools</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Educational resources</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white shadow-md border border-neutral-100 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Getting Started</h3>
                  <p className="text-gray-600 text-sm">Learn the basics of F&amp;O trading</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className= "font-semibold">Advanced Strategies</h3>
                  <p className="text-gray-600">Master complex trading techniques</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className= "font-semibold">Market Analysis</h3>
                  <p className="text-gray-600">Deep dive into market mechanics</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Mission