import React from "react";
import { Users, ChevronRight, PlayCircle } from "lucide-react";
import Integration from "./Integration";

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="absolute top-20 -left-24 w-96 h-96 lg:bg-blue-400 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="lg:block absolute top-40 right-0 w-96 h-96 lg:bg-purple-400 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float delay-200" />
      <div className="lg:block absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-96 h-96 lg:bg-pink-400 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float delay-300" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col items-center gap-8 py-16 lg:py-20 relative">
        <div className="flex flex-col items-center max-w-3xl justify-center space-y-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight lg:leading-tight leading-tight text-gray-900">
          Supercharge your <span className="text-blue-600">Futures &amp; Options</span> Trading
          </h1>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl">
            Transform your trading with our revolutionary platform for futures
            and options analysis, and execute them at a touch of a button. Don't
            settle for less, join us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
            <a
              href="https://fnotrader.com/authentication/login"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-blue-700 transition-all duration-300 text-center shadow-md  group"
            >
              Start Free Trial <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="https://fnotrader.com/authentication/login"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-xl text-base font-medium border border-gray-200 hover:bg-gray-100 transition-all duration-300 text-center shadow-md">
              <PlayCircle className="mr-2 w-5 h-5 text-blue-600" /> Watch Demo
            </a>
          </div>
          <div className="flex flex-col items-center space-y-4 pt-4">
          <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&auto=format"
                  alt="Professional Trader"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=40&h=40&fit=crop&auto=format"
                  alt="Professional Trader"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&auto=format"
                  alt="Professional Trader"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="text-sm text-gray-600">
                 Trusted by thousands of traders
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 lg:py-10 w-full max-w-4xl">
          <div className="relative">
            <img
              src="https://fnotrader.com/static/media/banner.c89f7456.jpg"
              alt="Trading Platform"
              className="relative rounded-xl shadow-xl w-full transition-opacity duration-300 opacity-100"
            />
          </div>
        </div>
      <Integration />
      </div>
    </section>
  );
};

export default Hero;