import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute inset-0 bg-dots opacity-[0.15] -z-10" />
      <div className="absolute top-20 -left-24 w-96 h-96 lg:bg-blue-400 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="lg:block  absolute top-40 right-0  w-96 h-96 lg:bg-purple-400 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float delay-200" />
      <div className="lg:block  absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-96 h-96 lg:bg-pink-400 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float delay-300" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 py-16 lg:py-24 relative">
      <div className="bg-white/80 backdrop-blur-sm rounded-full border border-neutral-100 px-6 py-2 text-sm text-gray-900 font-medium shadow-md shadow-blue-200">
          🚀 Trusted by thousands of traders
        </div>
        <div className="flex flex-col items-center max-w-3xl justify-center space-y-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight lg:leading-tight leading-tight text-gray-900">
          Supercharge your <span className="text-blue-600">Futures &amp; Options</span> Trading
          </h1>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
            Transform your trading with our revolutionary platform for futures
            and options analysis, and execute them at a touch of a button. Don't
            settle for less, join us today.
          </p>
          <div className="flex gap-4">
          <a
              href="#cta"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-blue-700 transition-all duration-300 text-center shadow-md transform"
            >
              Start Trial
            </a>
            <a
              href="#features"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg text-base font-medium border border-neutral-200 hover:bg-neutral-100 transition-all duration-300 text-center shadow-md transform"
            >
              Watch Demo
            </a>
          </div>
        </div>

        <div className="pt-6 lg:pt-12 lg:mt-0">
          <div className="relative">
            <img
              src="https://fnotrader.com/static/media/banner.c89f7456.jpg"
              alt="Trading Platform"
              className="rounded-xl shadow-2xl w-full transition-opacity duration-300 opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
