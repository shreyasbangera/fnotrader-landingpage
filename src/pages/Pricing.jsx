import { Check, X } from 'lucide-react';
import React, { useState } from 'react'
import FeatureTable from '../components/QuiktradeFeatureTable';
import QuikTradeFeatureTable from '../components/QuiktradeFeatureTable';
import DiscoverFeatureTable from '../components/DiscoverFeatureTable';

const Pricing = () => {
  const [activeProduct, setActiveProduct] = useState('quiktrade')

  const quiktradeFeatures = [
    {
      name: 'Paper Trading',
      scalper: true,
      pro: true,
    },
    {
      name: 'Order Placement',
      scalper: 'Unlimited',
      pro: 'Unlimited',
      isText: true,
    },
    {
      name: 'Trading Scope',
      scalper: 'Only Indices',
      pro: 'All FNO Stocks and Indices',
      isText: true,
    },
    {
      name: 'Broker Accounts',
      scalper: '1',
      pro: '1',
      isText: true,
    },
    {
      name: 'QuikTrade',
      scalper: true,
      pro: true,
    },
    {
      name: 'Basket Orders',
      scalper: true,
      pro: true,
    },
    {
      name: 'Option Chain Trading',
      scalper: true,
      pro: true,
    },
    {
      name: 'Straddle Chain',
      scalper: false,
      pro: true,
    },
    {
      name: 'Strangle Chain',
      scalper: false,
      pro: true,
    },
    {
      name: 'Auto Slicing',
      scalper: true,
      pro: true,
    },
    {
      name: 'Unlimited Placement Order Qty (Example, execute 1000 lots in 1 click) (limited to broker api usage limits)',
      scalper: true,
      pro: true,
    },
    {
      name: 'Auto Slicing',
      scalper: true,
      pro: true,
    },
    {
      name: 'Auto Slicing',
      scalper: true,
      pro: true,
    },
    {
      name: 'Auto Slicing',
      scalper: true,
      pro: true,
    },
  ];

  const discoverFeatures = [
    {
      name: 'Paper Trading',
      scalper: true,
      pro: true,
    },
    {
      name: 'Order Placement',
      scalper: 'Unlimited',
      pro: 'Unlimited',
      isText: true,
    },
    {
      name: 'Trading Scope',
      scalper: 'Only Indices',
      pro: 'All FNO Stocks and Indices',
      isText: true,
    },
    {
      name: 'Broker Accounts',
      scalper: '1',
      pro: '1',
      isText: true,
    },
    {
      name: 'QuikTrade',
      description: '1 Click to Place Orders',
      scalper: true,
      pro: true,
    },
    {
      name: 'Basket Orders',
      scalper: true,
      pro: true,
    },
    {
      name: 'Option Chain Trading',
      scalper: true,
      pro: true,
    },
    {
      name: 'Straddle Chain',
      scalper: false,
      pro: true,
    },
    {
      name: 'Strangle Chain',
      scalper: false,
      pro: true,
    },
    {
      name: 'Auto Slicing',
      scalper: true,
      pro: true,
    },
    {
      name: 'Unlimited Placement Order Qty (Example, execute 1000 lots in 1 click) (limited to broker api usage limits)',
      scalper: true,
      pro: true,
    },
    {
      name: 'Auto Slicing',
      scalper: true,
      pro: true,
    },
    {
      name: 'Auto Slicing',
      scalper: true,
      pro: true,
    },
    {
      name: 'Auto Slicing',
      scalper: true,
      pro: true,
    },
  ];

  return (
    <section id="pricing" className="py-12 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-base lg:text-lg text-gray-600">Choose the plan that's right for you</p>
      </div>

      <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveProduct('quiktrade')}
            className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 ${
              activeProduct === 'quiktrade'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            QuikTrade
          </button>
          <button
            onClick={() => setActiveProduct('discover')}
            className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 ${
              activeProduct === 'discover'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Discover
          </button>
        </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl p-8 shadow-xl animate__animated animate__fadeInLeft hover:transform hover:scale-105 transition-all duration-300">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <div className="mb-6">
              <span className="text-4xl font-semibold">₹999</span>
              <span className="text-gray-600">/month</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Basic Analysis Tools
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Standard Execution
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Email Support
            </li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Get Started</button>
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 shadow-xl transform scale-105 animate__animated animate__fadeInUp">
          <div className="absolute -top-4 right-4">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">Popular</span>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Pro</h3>
            <div className="mb-6">
              <span className="text-4xl font-semibold text-white">₹1999</span>
              <span className="text-gray-200">/month</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-white">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Advanced Analysis Tools
            </li>
            <li className="flex items-center text-white">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Priority Execution
            </li>
            <li className="flex items-center text-white">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              24/7 Priority Support
            </li>
          </ul>
          <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Get Started</button>
        </div>

        <div className="bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl p-8 shadow-xl animate__animated animate__fadeInRight hover:transform hover:scale-105 transition-all duration-300">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
            <div className="mb-6">
              <span className="text-4xl font-semibold">₹2999</span>
              <span className="text-gray-600">/month</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Custom Analysis Tools
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Ultra-fast Execution
            </li>
            <li className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Dedicated Account Manager
            </li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Contact Sales</button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Feature Comparison
            </h2>
            <p className="text-xl text-gray-600">
              Compare plans to find the perfect fit for your trading needs
            </p>
          </div>
          {activeProduct === 'quiktrade' ? (
            <QuikTradeFeatureTable features={quiktradeFeatures} />
          ) : (
            <DiscoverFeatureTable features={discoverFeatures} />
          )}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Still not sure which plan is right for you?
            </p>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
  </section>
  )
}

export default Pricing