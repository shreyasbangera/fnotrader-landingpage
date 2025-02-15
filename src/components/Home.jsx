import React from "react";
import Hero from "./Hero";
// import Products from "./Products";
import Testimonials from "./Testimonials";
import Mission from "./Mission";
import Faq from "./Faq";
import Cta from "./Cta";
import MediaShowcase from "./MediaShowcase";
import orderflowcharting from "../assets/orderflow-charting.png";
import advanceDecline from "../assets/futures/advance-decline.png";
import marketMovers from "../assets/futures/market-movers.png";
import futuresorspotCharts from "../assets/futures/futuresorspot-charts.png";
import futuresEODAnalysis from "../assets/futures/futureseod-analysis.png";
import futuresDashboard from "../assets/futures/futures-dashboard.png";
import indextop10 from "../assets/futures/index-top10.png";
import optionChain from "../assets/options/option-chain.png";
import tradeFinder from "../assets/futures/trade-finder.png";
import optionAction from "../assets/options/option-action.png";
import optionOI from "../assets/options/option-oi.png";
import optionsDashboard from "../assets/options/options-dashboard.png";
import pcrandoiTrend from "../assets/options/pcr&oi-trend.png";
import optionsPremium from "../assets/options/options-premium.png";
import dynamicoptionsAnalysis from "../assets/options/dynamicoptions-analysis.png";
import dynamicAtmstraddle from "../assets/strategy/dynamicatm-straddle.png";
import dynamicAtmstraddleStocks from "../assets/strategy/dynamicatm-straddle-stocks.png";
import straddletableCharts from "../assets/strategy/straddletable-charts.png";
import strangletableCharts from "../assets/strategy/strangletable-charts.png";
import multistrikePrice from "../assets/strategy/multistrike-price.png";
import multistrikeOi from "../assets/strategy/multistrike-oi.png";
import multistrikePcr from "../assets/strategy/multistrike-pcr.png";
import straddleCharts from "../assets/strategy/straddle-charts.png";
import strangleCharts from "../assets/strategy/strangle-charts.png";
import atmstraddlePrices from "../assets/strategy/atmstraddle-prices.png";
import cashmarketActivity from "../assets/fiidii-statistics/cashmarket-activity.png";
import fiiindexActivity from "../assets/fiidii-statistics/fiiindex-activity.png";
import participantopenInterest from "../assets/fiidii-statistics/participantopen-interest.png";
import nsesectorConstituents from "../assets/sector&market-breadth/nsesector-constituents.png";
import newhighsNewlows from "../assets/sector&market-breadth/newhighs-newlows.png";
import highslowsHeatmap from "../assets/sector&market-breadth/highslows-heatmap.png";
import preMarket from "../assets/other-features/pre-market.png";
import seasonality from "../assets/other-features/seasonality.png";
import quickCharts from "../assets/other-features/quick-charts.png";
import advanceCharts from "../assets/other-features/advance-chart.png";
import Feature from "./Feature";
import { quiktradeFeatures } from "../data/quiktradeFeatures";

const Home = () => {
  const discoverFeatures = [
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
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: futuresorspotCharts,
          title: "Futures/Spot Chart",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: futuresDashboard,
          title: "Futures Dashboard",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: tradeFinder,
          title: "Trade Finder",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: futuresEODAnalysis,
          title: "Futures EOD Analysis",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
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
        },
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
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: dynamicAtmstraddleStocks,
          title: "Dynamic ATM Straddle Stocks",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: straddletableCharts,
          title: "Straddle Table Charts",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: strangletableCharts,
          title: "Strangle Table Charts",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: multistrikePrice,
          title: "Multi Strike Price",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: multistrikeOi,
          title: "Multi Strike OI",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: multistrikePcr,
          title: "Multi Strike PCR",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: straddleCharts,
          title: "Straddle Charts",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: strangleCharts,
          title: "Strangle Charts",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: atmstraddlePrices,
          title: "ATM Straddle Prices",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
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
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: newhighsNewlows,
          title: "New Highs & New Lows",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: highslowsHeatmap,
          title: "Highs & Lows Heatmap",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
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
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: fiiindexActivity,
          title: "FII Index Activity",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: participantopenInterest,
          title: "Participant Open Interest",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
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
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: seasonality,
          title: "Seasonality Analysis",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: quickCharts,
          title: "Quick Charts",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          file: advanceCharts,
          title: "Advance Charts",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
      ],
    },
  ];

  return (
    <>
      <Hero />
      <Feature
        features={discoverFeatures}
        title="Discover"
        subtitle="Advanced Insights for smarter trading"
        theme="blue"
      />
      <Feature
        features={quiktradeFeatures}
        title="Quiktrade"
        subtitle="Execute Trades with Precision"
        theme="white"
      />
      {/* <Products /> */}
      <Mission />
      <Testimonials />
      <MediaShowcase />
      <Faq />
      <Cta />
    </>
  );
};

export default Home;
