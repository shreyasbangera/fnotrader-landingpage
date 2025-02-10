import { ArrowRight, BarChart3, BookOpen, CheckCircle, Zap } from 'lucide-react'
import React from 'react'

const Mission = () => {
  return (
    <section id="mission" className="py-12 lg:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center lg:mb-16 mb-12">
        <h2 className="text-2xl text-white lg:text-4xl font-semibold lg:mb-4 mb-2">Our Mission</h2>
        <p className="text-base lg:text-lg text-gray-100">Learn and Grow with FNOTrader</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
        <div className="prose prose-lg text-blue-50">
          <p className="mb-6">At FNOTrader, our mission is to empower Futures and Options (F&amp;O) traders with unique market insights, unconventional charts, and other essential tools needed to navigate the markets with unparalleled confidence and success in the dynamic world of F&amp;O Trading.</p>
          <p>We simplify market analysis and trade execution through our trader-focused products, Discover and QuikTrade.</p>
          </div>
          
          <div className="grid gap-4">
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/20">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Real-time Analysis</h3>
                  <p className="text-blue-100 text-sm">Advanced market insights and data visualization</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/20">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Professional Tools</h3>
                  <p className="text-blue-100 text-sm">Enterprise-grade trading and analysis tools</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/20">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Learning Resources</h3>
                  <p className="text-blue-100 text-sm">Comprehensive educational content and mentorship</p>
                </div>
              </div>
            </div>
          </div>

        <div className="relative">
          <div className="bg-white rounded-2xl lg:px-8 py-8 px-4">
            <div className="space-y-4">
            <div className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-blue-50">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-600 rounded-xl p-3 shadow-lg transition-all duration-300 group-hover:scale-110">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Getting Started</h3>
                    <p className="text-gray-600 text-sm mt-1">Learn the basics of F&O trading</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-blue-50">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-600 rounded-xl p-3 shadow-lg transition-all duration-300 group-hover:scale-110">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Advanced Strategies</h3>
                    <p className="text-gray-600 text-sm mt-1">Master complex trading techniques</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-blue-50">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-600 rounded-xl p-3 shadow-lg transition-all duration-300 group-hover:scale-110">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Market Analysis</h3>
                    <p className="text-gray-600 text-sm mt-1">Deep dive into market mechanics</p>
                  </div>
                </div>
              </div>

              <button className="group w-full mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Mission