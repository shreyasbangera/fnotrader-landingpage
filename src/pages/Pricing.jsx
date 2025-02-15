import { Check, Star, X } from 'lucide-react';
import React, { useState, useEffect } from 'react'
import QuikTradeFeatureTable from '../components/QuiktradeFeatureTable';
import DiscoverFeatureTable from '../components/DiscoverFeatureTable';

const Pricing = () => {
  const [activeProduct, setActiveProduct] = useState('quiktrade')
  const [loading, setLoading] = useState(true)
  const [period, setPeriod] = useState("1m")
  const [quiktradePackages, setQuiktradePackages] = useState([])
  const [discoverPackages, setDiscoverPackages] = useState([])

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

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true)
        const [quiktradeResponse, discoverResponse] = await Promise.all([
          fetch("https://trade-api.fnotrader.com/v1/package-list?product_type=qt"),
          fetch("https://trade-api.fnotrader.com/v1/package-list")
        ])
        
        const quiktradeData = await quiktradeResponse.json()
        const discoverData = await discoverResponse.json()
        
        setQuiktradePackages(quiktradeData.data.packages)
        setDiscoverPackages(discoverData.data.packages)
      } catch (error) {
        console.error("Error fetching packages:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPackages()
  }, [])

  const getQuiktradePackagesByType = (type, period) => {
    // console.log(type, period)
    return quiktradePackages.find((pkg) => pkg.planType === type && pkg.planName.includes(period))
  }

  const getDiscoverPackagesByType = (type, period) => {
    const periodMap = {
      "1m": "1 month",
      "6m": "6 month",
      "12m": "1 Year"
    }
    const mappedPeriod = periodMap[period] || period
    return discoverPackages.find((pkg) => 
      pkg.planName === type && pkg.planType.toLowerCase().includes(mappedPeriod.toLowerCase())
    )
  }

  const scalperPackage = getQuiktradePackagesByType("QuikTrade Scalper", period)
  const proPackage = getQuiktradePackagesByType("QuikTrade Pro", period)
  
  const starterPackage = getDiscoverPackagesByType("Starter", period)
  const sixerPackage = getDiscoverPackagesByType("Sixer", period)
  const proDiscoverPackage = getDiscoverPackagesByType("Professional", period)

  console.log(proDiscoverPackage)

  const formatPrice = (price) => {
    return price.toLocaleString("en-IN")
  }

  const calculateMonthlyRate = (pkg) => {
    if (!pkg) return 0
    return Math.round(pkg.price / (pkg.numberOfDays / 30))
  }

  const getTrialDays = () => {
    switch (period) {
      case "1m": return "30 Days";
      case "6m": return "180 Days";
      case "12m": return "360 Days";
      default: return "30 Days";
    }
  }

  return (
<section id="pricing" className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:mb-16 mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">Choose the plan that's right for you</p>
        </div>

        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveProduct('quiktrade')}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
              activeProduct === 'quiktrade'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            QuikTrade
          </button>
          <button
            onClick={() => setActiveProduct('discover')}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
              activeProduct === 'discover'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Discover
          </button>
        </div>
        
        <div className="flex justify-center">
          <div className="flex items-center gap-4 mb-12 bg-white rounded-full p-2 shadow-md">
            <button
              onClick={() => setPeriod("1m")}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                period === "1m" ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPeriod("6m")}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                period === "6m" ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Semi Annual
            </button>
            <button
              onClick={() => setPeriod("12m")}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                period === "12m" ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center">Loading packages...</div>
        ) : (
          <div className={`grid ${activeProduct === 'quiktrade' ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8`}>
            {activeProduct === 'quiktrade' ? (
              <>
                {/* Trial Card */}
                <div className="relative bg-gradient-to-b from-orange-100 to-white rounded-3xl p-8 border transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="absolute -top-3 -right-3">
                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">FREE</span>
                  </div>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4">Trial</h2>
                    <div className="text-4xl font-semibold mb-2">
                      <span className="line-through text-gray-400 mr-2">₹799</span>
                      <span>₹0</span>
                    </div>
                    <p className="text-gray-600">Validity - 7 days</p>
                  </div>
                  <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
                    Start Trial
                  </button>
                </div>

                {/* Scalper Card */}
                <div className="relative bg-gradient-to-b from-blue-100 to-white rounded-3xl p-8 border transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4">QuikTrade Scalper</h2>
                    <div className="text-4xl font-semibold mb-2">₹{formatPrice(calculateMonthlyRate(scalperPackage))}<span className="text-gray-600 text-base">/month</span></div>
                    <p className="text-gray-600">(+ GST)</p>
                    <p className="text-gray-600">Validity - {scalperPackage?.numberOfDays} Days</p>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                    Buy this Plan
                  </button>
                </div>

                {/* Pro Card */}
                <div className="relative bg-gradient-to-b from-green-100 to-white rounded-3xl p-8 border transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star size={14} /> POPULAR
                    </div>
                  </div>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4">QuikTrade Pro</h2>
                    <div className="text-4xl font-semibold mb-2">₹{formatPrice(calculateMonthlyRate(proPackage))}<span className="text-gray-600 text-base">/month</span></div>
                    <p className="text-gray-600">(+ GST)</p>
                    <p className="text-gray-600">Validity - {proPackage?.numberOfDays} Days</p>
                  </div>
                  <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                    Buy this Plan
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Discover Starter */}
               <div className="relative bg-gradient-to-b from-orange-100 to-white rounded-3xl p-8 border transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
          <div className="absolute -top-3 -right-3">
            <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">FREE</span>
          </div>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Trial</h2>
            <div className="text-4xl font-semibold mb-2">
              <span className="line-through text-gray-400 mr-2">₹999</span>
              <span>₹0</span>
            </div>
            <p className="text-gray-600">Validity - 7 days</p>
          </div>
          <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
            Start Trial
          </button>
          </div>

        {/* Starter Card */}
        {starterPackage && <div className="relative bg-gradient-to-b from-blue-100 to-white rounded-3xl p-8 border transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Starter</h2>
            <div className="text-4xl font-semibold mb-2">₹{formatPrice(calculateMonthlyRate(starterPackage))}<span className="text-gray-600 text-base">/month</span></div>
            <p className="text-gray-600">(+ GST)</p>
            <p className="text-gray-600">Validity - {getTrialDays()}</p>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            Buy this Plan
          </button>
        </div>
        }

        {sixerPackage && <div className="relative bg-gradient-to-b from-purple-100 to-white rounded-3xl p-8 border transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Sixer</h2>
            <div className="text-4xl font-semibold mb-2">₹{formatPrice(calculateMonthlyRate(sixerPackage))}<span className="text-gray-600 text-base">/month</span></div>
            <p className="text-gray-600">(+ GST)</p>
            <p className="text-gray-600">Validity - {getTrialDays()}</p>
          </div>
          <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors">
            Buy this Plan
          </button>
        </div>
        }

        {/* Professional Card */}
        {proDiscoverPackage && <div className="relative bg-gradient-to-b from-green-100 to-white rounded-3xl p-8 border transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
          <div className="absolute -top-3 -right-3">
            <div className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
              <Star size={14} /> POPULAR
            </div>
          </div>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Professional</h2>
            <div className="text-4xl font-semibold mb-2">₹{formatPrice(calculateMonthlyRate(proDiscoverPackage))}<span className="text-gray-600 text-base">/month</span></div>
            <p className="text-gray-600">(+ GST)</p>
            <p className="text-gray-600">Validity - {getTrialDays()}</p>
          </div>
          <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
            Buy this Plan
          </button>
        </div>
        }
              </>
            )}
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Feature Comparison
          </h2>
          <p className="text-lg text-gray-600">
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
          <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  )
}

export default Pricing