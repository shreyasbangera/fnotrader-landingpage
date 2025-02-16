import { Check, Star, X } from 'lucide-react';
import React, { useState, useEffect } from 'react'
import QuikTradeFeatureTable from '../components/QuiktradeFeatureTable';
import DiscoverFeatureTable from '../components/DiscoverFeatureTable';
import { quiktradeFeatures } from '../data/pricingdata';
import { discoverFeatures } from '../data/pricingdata';
import ProductSelector from '../components/ProductSelector';
import PeriodSelector from '../components/PeriodSelector';
import PricingCard from '../components/PricingCard';
import { Link } from 'react-router';

const Pricing = () => {
  const [activeProduct, setActiveProduct] = useState('quiktrade')
  const [loading, setLoading] = useState(true)
  const [period, setPeriod] = useState("1m")
  const [quiktradePackages, setQuiktradePackages] = useState([])
  const [discoverPackages, setDiscoverPackages] = useState([])


  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const [quiktradeResponse, discoverResponse] = await Promise.all([
          fetch('https://trade-api.fnotrader.com/v1/package-list?product_type=qt'),
          fetch('https://trade-api.fnotrader.com/v1/package-list'),
        ]);

        const quiktradeData = await quiktradeResponse.json();
        const discoverData = await discoverResponse.json();

        setQuiktradePackages(quiktradeData.data.packages);
        setDiscoverPackages(discoverData.data.packages);
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const getQuiktradePackagesByType = (type, period) => {
    return quiktradePackages.find(
      (pkg) => pkg.planType === type && pkg.planName.includes(period)
    );
  };

  const getDiscoverPackagesByType = (type, period) => {
    const periodMap = {
      '1m': '1 month',
      '6m': '6 month',
      '12m': '1 Year',
    };
    const mappedPeriod = periodMap[period] || period;
    return discoverPackages.find(
      (pkg) =>
        pkg.planName === type &&
        pkg.planType.toLowerCase().includes(mappedPeriod.toLowerCase())
    );
  };

  const scalperPackage = getQuiktradePackagesByType("QuikTrade Scalper", period)
  const proPackage = getQuiktradePackagesByType("QuikTrade Pro", period)
  
  const starterPackage = getDiscoverPackagesByType("Starter", period)
  const sixerPackage = getDiscoverPackagesByType("Sixer", period)
  const proDiscoverPackage = getDiscoverPackagesByType("Professional", period)

  const calculateMonthlyRate = (pkg) => {
    if (!pkg) return 0;
    return Math.round(pkg.price / (pkg.numberOfDays / 30));
  };

  const getTrialDays = () => {
    const daysMap = {
      '1m': '30 Days',
      '6m': '180 Days',
      '12m': '360 Days',
    };
    return daysMap[period] || '30 Days';
  };

  const handlePurchase = (planType) => {
    console.log(`Purchasing ${planType} plan`);
  };

  return (
    <section id="pricing" className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center lg:mb-16 mb-12">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base lg:text-lg text-gray-600">
            Choose the plan that's right for you
          </p>
        </div>

        <ProductSelector
          activeProduct={activeProduct}
          setActiveProduct={setActiveProduct}
        />
        
        <PeriodSelector period={period} setPeriod={setPeriod} />

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          </div>
        ) : (
          <div
            className={`grid ${
              activeProduct === 'quiktrade' ? 'md:grid-cols-3' : 'md:grid-cols-2'
            } gap-8`}
          >
            {activeProduct === 'quiktrade' ? (
              <>
                <PricingCard
                  type="trial"
                  title="Trial"
                  originalPrice={799}
                  price={0}
                  validity="7 days"
                  gradientFrom="orange-100"
                  buttonColor="bg-orange-500 hover:bg-orange-600"
                  onClick={() => handlePurchase('trial')}
                />
                <PricingCard
                  type="standard"
                  title="QuikTrade Scalper"
                  price={calculateMonthlyRate(scalperPackage)}
                  validity={getTrialDays()}
                  gradientFrom="blue-100"
                  buttonColor="bg-blue-600 hover:bg-blue-700"
                  onClick={() => handlePurchase('scalper')}
                />
                <PricingCard
                  type="popular"
                  title="QuikTrade Pro"
                  price={calculateMonthlyRate(proPackage)}
                  validity={getTrialDays()}
                  gradientFrom="green-100"
                  buttonColor="bg-green-600 hover:bg-green-700"
                  onClick={() => handlePurchase('pro')}
                />
              </>
            ) : (
              <>
                <PricingCard
                  type="trial"
                  title="Trial"
                  originalPrice={399}
                  price={0}
                  validity="7 days"
                  gradientFrom="orange-100"
                  buttonColor="bg-orange-500 hover:bg-orange-600"
                  onClick={() => handlePurchase('discover-trial')}
                />
                {starterPackage && (
                  <PricingCard
                    type="standard"
                    title="Starter"
                    price={calculateMonthlyRate(starterPackage)}
                    validity={getTrialDays()}
                    gradientFrom="blue-100"
                    buttonColor="bg-blue-600 hover:bg-blue-700"
                    onClick={() => handlePurchase('starter')}
                  />
                )}
                {sixerPackage && (
                  <PricingCard
                    type="standard"
                    title="Sixer"
                    price={calculateMonthlyRate(sixerPackage)}  
                    validity={getTrialDays()}
                    gradientFrom="purple-100"
                    buttonColor="bg-purple-600 hover:bg-purple-700"
                    onClick={() => handlePurchase('sixer')}
                  />
                )}  
                {proDiscoverPackage && (  
                  <PricingCard
                    type="popular"
                    title="Professional"
                    price={calculateMonthlyRate(proDiscoverPackage)}
                    validity={getTrialDays()}
                    gradientFrom="green-100"
                    buttonColor="bg-green-600 hover:bg-green-700"
                    onClick={() => handlePurchase('pro')}
                  />
                )}
              </>
            )}
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-xl lg:text-3xl font-semibold text-gray-900 mb-4">
            Feature Comparison
          </h2>
          <p className=" text-gray-600">
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
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors ">
            Contact us
          </Link>
        </div>
        <div className="mt-16 space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Terms and Conditions</h2>
          <p className="text-gray-600">We use Official Snapshot data feed from NSE Data & Analytics Ltd & Real-time analysis powered by Broker API data feed.</p>
          <p className="text-gray-600">FNOTrader Discover does not provide buy/sell recommendations; it provides the user with all the insights to make informed decisions.</p>
          <p className="text-gray-600">We are NOT a SEBI registered Advisor, and we are NOT responsible for your trading profits/losses if you use our data for analysis and trading.</p>
          <p className="text-gray-600">FNOTrader Discover and QuikTrade are two different products and are complementary to the trader to find trade opportunities and execute them through broker API.</p>
          <p className="text-gray-600">Prices are exclusive of the applicable GST (which is 18%).</p>
          <p className="text-gray-600">Monthly subscription means a 30-day subscription period.</p>
          <p className="text-gray-600">We may or may not be able to restore any missing data in case of data feed disruptions. We will try our best to restore the missing data.</p>
          <p className="text-gray-600">In case of any major service disruption, we will add hours/days to your subscription/access, but it will not be possible to refund due to the low price we charge for our service.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Disclaimer</h2>
          <p className="text-gray-600">Although information has been obtained from and is based upon sources we believe to be reliable, we do not guarantee its accuracy, and the information may be incomplete or condensed. None of the stock information, data, and company information presented herein constitutes a legally binding recommendation or a solicitation of any offer to buy or sell any securities. Information presented is general information that does not take into account your individual circumstances, financial situation, or needs, nor does it present a personalized recommendation to you. Individual stocks presented may not be suitable for you.</p>
          <p className="text-gray-600">Any opinions, chats, messages, news, research, analyses, prices, or other information contained on this Website are provided as general market information for educational purposes only and do not constitute investment advice. The Website should not be relied upon as a substitute for extensive independent market research before making your actual trading decisions. Opinions, market data, recommendations, or any other content are subject to change at any time without notice. We will not accept liability for any loss or damage, including without limitation to any reduction of profits, which may arise directly or indirectly from the use of or reliance on such information. We are a technology company and not an investment/trading advisor. Please consult a Registered Financial Adviser about the appropriateness of your investment/trading decisions.</p>
        </div>
      </div>
    </section>
  )
}

export default Pricing