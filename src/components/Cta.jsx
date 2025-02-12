import { ArrowRight } from 'lucide-react'
import React from 'react'

const Cta = () => {
  return (
    <section id="cta" className="bg-white relative py-12 lg:py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
    <div className="absolute inset-0 opacity-10">
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Trading Like a Pro Today
          </h2>
          <p className="text-base lg:text-lg text-blue-50 mb-8">
            Join thousands of successful traders who have transformed their trading with FNOTrader
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-100 transition-colors duration-300 space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-white bg-blue-800 hover:bg-blue-900 transition-colors duration-300">
              Schedule Demo
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </a>
        </div>
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center text-sm text-blue-50">
        <p className="animate__animated animate__fadeIn">
          Risk Disclaimer: Trading Futures &amp; Options involves substantial risk of loss and is not suitable for all investors. 
          Please ensure you fully understand the risks involved before trading.
        </p>
      </div>
    </div>
  </section>
  )
}

export default Cta