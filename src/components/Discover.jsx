import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import orderflowcharting from "../assets/orderflow-charting.png";
import advanceDecline from "../assets/futures/advance-decline.png";
import marketMovers from "../assets/futures/market-movers.png";
import futuresorspotCharts from "../assets/futures/futuresorspot-charts.png";
import futuresEODAnalysis from "../assets/futures/futureseod-analysis.png";
import futuresDashboard from "../assets/futures/futures-dashboard.png";
import indextop10 from "../assets/futures/index-top10.png";
import optionChain from "../assets/options/option-chain.png";
import tradeFinder from "../assets/futures/trade-finder.png";
import optionAction from "../assets/options/option-action.png"
import optionOI from "../assets/options/option-oi.png"
import optionsDashboard from "../assets/options/options-dashboard.png"
import pcrandoiTrend from "../assets/options/pcr&oi-trend.png"
import optionsPremium from "../assets/options/options-premium.png"
import ChartsModal from "./ChartsModal";
import dynamicoptionsAnalysis from "../assets/options/dynamicoptions-analysis.png"
import dynamicAtmstraddle from "../assets/strategy/dynamicatm-straddle.png";
import dynamicAtmstraddleStocks from "../assets/strategy/dynamicatm-straddle-stocks.png";
import straddletableCharts from "../assets/strategy/straddletable-charts.png"
import strangletableCharts from "../assets/strategy/strangletable-charts.png"
import multistrikePrice from "../assets/strategy/multistrike-price.png"
import multistrikeOi from "../assets/strategy/multistrike-oi.png"
import multistrikePcr from "../assets/strategy/multistrike-pcr.png"
import straddleCharts from "../assets/strategy/straddle-charts.png"
import strangleCharts from "../assets/strategy/strangle-charts.png"
import atmstraddlePrices from "../assets/strategy/atmstraddle-prices.png"
import cashmarketActivity from "../assets/fiidii-statistics/cashmarket-activity.png";
import fiiindexActivity from "../assets/fiidii-statistics/fiiindex-activity.png"
import participantopenInterest from "../assets/fiidii-statistics/participantopen-interest.png"
import nsesectorConstituents from "../assets/sector&market-breadth/nsesector-constituents.png";
import newhighsNewlows from "../assets/sector&market-breadth/newhighs-newlows.png"
import highslowsHeatmap from "../assets/sector&market-breadth/highslows-heatmap.png"
import preMarket from "../assets/other-features/pre-market.png"
import seasonality from "../assets/other-features/seasonality.png"
import quickCharts from "../assets/other-features/quick-charts.png"
import advanceCharts from "../assets/other-features/advance-chart.png"

const Discover = () => {
  const [activeSection, setActiveSection] = useState("orderflowchartings");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const sections = [
    {
      id: "orderflowchartings",
      title: "Orderflow Chartings",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      images: [
        {
          file: orderflowcharting,
          title: "Orderflow Chart",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
      ],
    },
    {
      id: "futures",
      title: "Futures",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      images: [
        {
          file: advanceDecline,
          title: "Advance/Decline",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since ",
        },
        {
          file: marketMovers,
          title: "Market Movers",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: indextop10,
          title: "Index Top 10",
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: futuresorspotCharts,
          title: "Futures/Spot Chart",
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: futuresDashboard,
          title: "Futures Dashboard",
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: tradeFinder,
          title: "Trade Finder",
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: futuresEODAnalysis,
          title: "Futures EOD Analysis",
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
      ],
    },
    {
      id: "options",
      title: "Options",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      images: [
        {
          file: optionChain,
          title: "Option Chain",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: optionAction,
          title: "Option Action",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: optionOI,
          title: "Option OI",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: optionsDashboard,
          title: "Options Dashboard",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: pcrandoiTrend,
          title: "PCR & OI Trend",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: optionsPremium,
          title: "Options Premium",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: dynamicoptionsAnalysis,
          title: "Dynamic Options Analysis",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        }
      ],
    },
    {
      id: "strategy",
      title: "Strategy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      images: [
        {
          file: dynamicAtmstraddle,
          title: "Dynamic ATM Straddle",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        },
        {
          file: dynamicAtmstraddleStocks,
          title: "Dynamic ATM Straddle Stocks",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        },
        {
          file: straddletableCharts,
          title: "Straddle Table Charts",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        },
        {
          file: strangletableCharts,
          title: "Strangle Table Charts",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        },
        {
          file: multistrikePrice,
          title: "Multi Strike Price",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        },
        {
          file: multistrikeOi,
          title: "Multi Strike OI",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        },
        {
          file: multistrikePcr,
          title: "Multi Strike PCR",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        },
        {
          file: straddleCharts,
          title: "Straddle Charts",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        },
        {
          file: strangleCharts,
          title: "Strangle Charts",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        },
        {
          file: atmstraddlePrices,
          title: "ATM Straddle Prices",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        },
      ],
    },
    {
      id: "sector&marketbreadth",
      title: "Sector & Market Breadth",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      images: [
        {
          file: nsesectorConstituents,
          title: "NSE Sector & Constituents",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        },
        {
          file: newhighsNewlows,
          title: "New Highs & New Lows",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        },
        {
          file: highslowsHeatmap,
          title: "Highs & Lows Heatmap",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        }
      ],
    },
    {
      id: "fii/dii",
      title: "FII/DII Statistics",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      images: [
        {
          file: cashmarketActivity,
          title: "Cash Market Activity",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        },
        {
          file: fiiindexActivity,
          title: "FII Index Activity",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        },
        {
          file: participantopenInterest,
          title: "Participant Open Interest",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        }
      ],
    },
    {
      id: "otheruniquefeatures",
      title: "Other Unique Features",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      images: [
        {
          file: preMarket,
          title: "Pre Market Analysis",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        },
        {
          file: seasonality,
          title: "Seasonality Analysis",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        },
        {
          file: quickCharts,
          title: "Quick Charts",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        },
        {
          file: advanceCharts,
          title: "Advance Charts",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        }
      ],
    },
  ];

  useEffect(() => {
    setCurrentImageIndex(0);
  }, []);

  const activeImages =
    sections.find((s) => s.id === activeSection)?.images || [];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === activeImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? activeImages.length - 1 : prevIndex - 1
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSwitchSection = (id) => {
    setCurrentImageIndex(0)
    setActiveSection(id)
  }

  return (
    <section id="discover" className="py-12 lg:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center lg:mb-16 mb-12">
          <h2 className="text-2xl lg:text-4xl font-semibold text-white lg:mb-4 mb-2">
            Discover
          </h2>
          <p className="text-base lg:text-lg text-gray-100">
          Gain an edge with our advanced trading tools and analytics
          </p>
        </div>
        <div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 items-center gap-8 lg:gap-0 lg:justify-between">
          {/* Left sidebar with sections */}
          <div className="w-full lg:max-w-sm space-y-2 overflow-y-auto max-h-[31.5rem] lg:pr-4 lg:discover-scrollbar">
            {sections.map((section) => (
              <div
                key={section.id}
                onClick={() => handleSwitchSection(section.id)}
                className={`px-6 py-4 rounded-xl cursor-pointer border transition-all duration-300 group 
                ${
                  activeSection === section.id
                    ? "bg-white shadow-lg"
                    : "bg-white/10 border-white/20 hover:bg-white/20"
                }`}
              >
                  <h3 className={`text-lg font-semibold mb-2 transition-colors
                  ${activeSection === section.id ? "text-blue-600" : "text-white"}`}>
                  {section.title}
                </h3>
                <p className={`text-sm leading-relaxed transition-colors
                  ${activeSection === section.id ? "text-gray-600" : "text-blue-100"}`}>
                  {section.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right side image */}
          <div className="max-w-3xl">
            <div className="bg-white rounded-2xl shadow-md border border-neutral-100 h-full relative">
              {activeImages.length > 0 && (
                <div className="lg:px-16 py-2 px-4 lg:h-[440px] xl:h-[480px] h-[370px] sm:h-[505px] min-w-[250px]">
                  <h3 className="text-lg lg:text-xl text-gray-900 font-medium text-center py-4">
                    {activeImages[currentImageIndex]?.title}
                  </h3>
                  <img
                    onClick={openModal}
                    onLoad={() => setIsImageLoaded(true)}
                    src={
                      activeImages[currentImageIndex]?.file || "/placeholder.svg"
                    }
                    alt={activeImages[currentImageIndex]?.title}
                    className={`w-full p-2 shadow-lg cursor-pointer object-contain rounded-lg transition-opacity duration-300 ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
                  />

                  {activeImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-all duration-200 group"
                      >
                        <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-all duration-200 group"
                      >
                        <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                      </button>
                    </>
                  )}
                  <p className="absolute bottom-2 lg:left-16 left-4 lg:right-16 right-4 text-gray-900 text-sm py-4 mt-4 leading-6">
                    {activeImages[currentImageIndex]?.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ChartsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={activeImages[currentImageIndex]?.file || "/placeholder.svg"}
        imageTitle={activeImages[currentImageIndex]?.title}
      />
    </section>
  );
};

export default Discover;
