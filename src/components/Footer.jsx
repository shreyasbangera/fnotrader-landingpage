import React from 'react';
import { Youtube, Twitter, Send, BarChart2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-white text-gray-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 opacity-[0.02] -z-10" />
      <div className="absolute inset-0 bg-dots opacity-[0.02] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center">
            <img src="https://fnotrader.com/static/media/falcon.fa3b1ec6.png" alt="FNOTrader Logo" className="h-8 w-auto transition-opacity duration-300 opacity-100 filter grayscale" loading="lazy"/>
              <span className="ml-2 font-bold text-xl">FNOTrader</span>
            </div>
            <p className="text-sm">
              Empowering traders with cutting-edge technology and real-time analytics since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full">
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className= "text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              {['About us', 'Contact us', 'Terms and Conditions', 'Privacy Policy', 'Refund Policy', 'Pricing'].map((item) => (
                <li className='list-none' key={item}>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300 flex items-center group">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-3">
              {['QuikTrade', 'Discover', 'Pricing', 'Features'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300 flex items-center group">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

          {/* Risk Disclaimer */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Risk Disclaimer</h3>
            <div className="p-6 rounded-xl bg-gray-100">
              <p className="text-sm leading-relaxed">
                Trading Futures & Options involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results. Only trade with capital you can afford to lose.
              </p>
            </div>
          </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2025 FNOTrader. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;