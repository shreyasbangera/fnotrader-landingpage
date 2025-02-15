import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer id="footer" className="bg-blue-50 text-gray-600 relative overflow-hidden border-t border-gray-200">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 opacity-[0.02] -z-10" />
      <div className="absolute inset-0 bg-dots opacity-[0.02] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section - Takes up 3 columns */}
          <div className="space-y-6 animate-fade-in lg:col-span-3">
            <div className="flex items-center">
            <img src="https://fnotrader.com/static/media/falcon.fa3b1ec6.png" alt="FNOTrader Logo" className="h-8 w-auto transition-opacity duration-300 opacity-100 filter grayscale" loading="lazy"/>
              <span className="ml-2 font-bold text-xl">FNOTrader</span>
            </div>
            <p className="text-sm leading-relaxed">
            At FNOTrader, our mission is to empower Futures and Options (F&O) traders with unique market insights, unconventional charts, and other essential tools needed to navigate the markets with unparalleled confidence and success in the dynamic world of F&O Trading. We simplify market analysis and trade execution through our trader-focused products, Discover and QuikTrade.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  href: "https://www.youtube.com/@FNOTrader-com",
                  icon: <svg className='w-6 h-6 grayscale' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 461.001 461.001" xmlSpace="preserve" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style={{fill: "#F61C0D" }} d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"></path> </g> </g></svg>
                },
                {
                  href: "https://twitter.com/fnotrader_com", 
                  icon: <svg className='w-6 h-6 grayscale' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
                },
                {
                  href: "https://t.me/fnotrader_com",
                  icon: <svg className='w-6 h-6 grayscale' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M2.14753 11.8099C7.3949 9.52374 10.894 8.01654 12.6447 7.28833C17.6435 5.20916 18.6822 4.84799 19.3592 4.83606C19.5081 4.83344 19.8411 4.87034 20.0567 5.04534C20.2388 5.1931 20.2889 5.39271 20.3129 5.5328C20.3369 5.6729 20.3667 5.99204 20.343 6.2414C20.0721 9.08763 18.9 15.9947 18.3037 19.1825C18.0514 20.5314 17.5546 20.9836 17.0736 21.0279C16.0283 21.1241 15.2345 20.3371 14.2221 19.6735C12.6379 18.635 11.7429 17.9885 10.2051 16.9751C8.42795 15.804 9.58001 15.1603 10.5928 14.1084C10.8579 13.8331 15.4635 9.64397 15.5526 9.26395C15.5637 9.21642 15.5741 9.03926 15.4688 8.94571C15.3636 8.85216 15.2083 8.88415 15.0962 8.9096C14.9373 8.94566 12.4064 10.6184 7.50365 13.928C6.78528 14.4212 6.13461 14.6616 5.55163 14.649C4.90893 14.6351 3.67265 14.2856 2.7536 13.9869C1.62635 13.6204 0.730432 13.4267 0.808447 12.8044C0.849081 12.4803 1.29544 12.1488 2.14753 11.8099Z"></path></svg>
                }
              ].map((social) => (
                <a key={social.href} href={social.href} target='_blank' className="p-2 rounded-xl hover:bg-gray-100 transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links - Takes up 1 column */}
          <div className="space-y-6 md:col-span-1">
            <h3 className= "text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              {[
                { name: 'About us', link: '/about-us' },
                { name: 'Contact us', link: '/contact' },
                { name: 'Terms and Conditions', link: '/terms-condition' },
                { name: 'Privacy Policy', link: '/privacy-policy' },
                { name: 'Refund Policy', link: '/refund-policy' },
                { name: 'Pricing', link: '/pricing' }
              ].map((item) => (
                <li className='list-none' key={item.name}>
                  <Link to={item.link} className="hover:text-blue-600 transition-colors duration-300 flex items-center group">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links - Takes up 1 column */}
          <div className="space-y-6 md:col-span-1">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-3">
              {[
                { name: 'QuikTrade', link: '/#quiktrade' },
                { name: 'Discover', link: '/#discover' },
                { name: 'Pricing', link: '/pricing' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.link} className="hover:text-blue-600 transition-colors duration-300 flex items-center group">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

          {/* Risk Disclaimer */}
          <div className="mt-12">
            <h3 className= "text-lg font-semibold mb-6">Risk Disclaimer</h3>
              <p className="text-sm leading-relaxed">
              Trading Futures & Options involves substantial risk of loss and is not suitable for all investors. Before engaging in any trading activities, individuals should carefully consider their financial situation and risk tolerance. It's important to understand that past performance is not indicative of future results. Trading in these markets may result in significant financial losses, and individuals should only trade with capital they can afford to lose. FNOTrader.com does not guarantee any specific outcome or profitability, and individuals are solely responsible for their trading decisions. It is highly recommended to seek advice from a qualified financial advisor.
              </p>
          </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
            All Rights Reserved | 2025 © Sukrisa Technologies LLP | <a className="text-gray-600 opacity-85" href="https://fnotrader.com" target="_blank" rel="noopener noreferrer">FNOTrader</a>®
            </p>
            <p className="text-sm text-gray-600"> Charts powered by <a className="text-gray-600 opacity-85" href="http://tradingview.com/" target="_blank" rel="noopener noreferrer">Tradingview</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;