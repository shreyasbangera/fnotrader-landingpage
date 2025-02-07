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
      name: 'Trade all FNO Stocks & Indices',
      scalper: 'Only Indices',
      pro: 'All FNO Stocks and Indices',
      isText: true,
    },
    {
      name: 'Number of Brokers Allowed to Trade (default) (Additional Broker A/c can be purchased)',
      scalper: '1',
      pro: '1',
      isText: true,
    },
    {
      name: 'QuikTrade (1 Click to Place Orders)',
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
      name: 'Straddle Chain Trading',
      scalper: false,
      pro: true,
    },
    {
      name: 'Strangle Chain Trading',
      scalper: false,
      pro: true,
    },
    {
      name: 'Automatic Slicing of Order Qty per configuration (Customize Freeze Qty per your requirement)',
      scalper: true,
      pro: true,
    },
    {
      name: 'Unlimited Placement Order Qty (Example, execute 1000 lots in 1 click) (limited to broker api usage limits)',
      scalper: true,
      pro: true,
    },
    {
      name: 'Market Order',
      scalper: true,
      pro: true,
    },
    {
      name: 'Limit Order',
      scalper: true,
      pro: true,
    },
    {
      name: 'Limit Order with LTP',
      scalper: true,
      pro: true,
    },
    {
      name: 'Market Protection Order (Limit Order with Customizable buffer %)',
      scalper: true,
      pro: true,
    },
    {
      name: 'Portfolio Level (MTM) - Trailing SL (Manual/Auto)',
      scalper: true,
      pro: true,
    },
    {
      name: 'Portfolio Level (MTM) - Target',
      scalper: true,
      pro: true,
    },
    {
      name: 'Position Level (Individual) - Stop Loss',
      scalper: true,
      pro: true,
    },
    {
      name: 'Position Level (Individual) - Trailing SL (Manual/Auto)',
      scalper: true,
      pro: true,
    },
    {
      name: 'Position Level (Individual) - Target',
      scalper: true,
      pro: true,
    },
    {
      name: '1 Click Position Adjustments (Risk ON/OFF, Add, Exit, Reverse)',
      scalper: false,
      pro: true,
    },
    {
      name: 'Rules based Trading (Futures/Spot/Call Options/Put Options/Time Based/etc)',
      scalper: false,
      pro: true,
    },
    {
      name: 'Trade Multiple Brokers at the same time (1 broker allowed by default, additional brokers accounts can be purchased and traded at the same time)',
      scalper: "Yes(Unlimited)",
      pro: "Yes(Unlimited)",
    },
    {
      name: 'Track Orders, Trades, Funds, Positions in real time',
      scalper: true,
      pro: true,
    },
    {
      name: 'Live Update of Prices and PNL',
      scalper: true,
      pro: true,
    },
    {
      name: 'Configuration Options to set preferences.',
      scalper: true,
      pro: true,
    },
    {
      name: 'Activity Logs',
      scalper: true,
      pro: true,
    },
    {
      name: 'Trade from Anywhere (It\'s browser based WebApp, so you can trade from PC, Tablet, Mobile)',
      scalper: true,
      pro: true,
    },
    {
      name: 'Setup Required (Get started as soon as your payment is confirmed)',
      scalper: false,
      pro: false,
    },
  ];

  const discoverFeatures = [
    {
      name: 'Real time update',
      starter: "Yes (with broker Login)",
      sixer: "Yes (with broker Login)",
      pro: "Yes (with broker Login)",
      isText: true,
    },
    {
      name: 'Data Update Frequency',
      starter: 'Real-time snapshot',
      sixer: 'Real-time snapshot',
      pro: 'Real-time snapshot',
      isText: true,
    },
    {
      name: 'Orderflow Charts',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'OrderFlow Indicators',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Advance/Decline',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Market Movers',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Index Top10',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Trade Finder',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Quick Charts',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Advanced Charts',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Index Watch',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Advanced Option Chain',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Option Chain Charts',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Option Action',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Option OI',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Price vs OI Table',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'PCR and OI Trend',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Options Premium',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Dynamic ATM Straddle (For all Indices)',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Straddle Table & Charts',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Multi Strike Price Charts',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Multi Strike OI Chart',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Options Strategy Charts (Strangle Charts / Spread charts / Iron Condor / Iron Fly / Etc)',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Sector & Constituents',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Intraday New High/Lows',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'New High/Low Heatmap',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'FII/DII Stats - Cash Market',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'FII/DII Stats - Index Activity',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'FII/DII Stats - Participant Wise OI',
      starter: true,
      sixer: true,
      pro: true,
    },
    {
      name: 'Ads Free',
      starter: true,
      sixer: true,
      pro: true,
    },
  ];

  return (
    <section id="pricing" className="py-12 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center lg:mb-16 mb-12">
        <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Simple, Transparent Pricing</h2>
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
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
              Feature Comparison
            </h2>
            <p className="text-base lg:text-lg text-gray-600">
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