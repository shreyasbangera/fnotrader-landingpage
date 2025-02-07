import React from 'react'
import FivepaisaLogo from '../assets/5paisa-logo.svg'
import aliceblueLogo from '../assets/aliceblue-logo.webp'
import jainamDuck from '../assets/duck-logo.svg'
import angelOneLogo from '../assets/angelone-logo.png'
import dhanLogo from '../assets/dhan-logo.svg'
import flatTradeLogo from '../assets/flattrade-logo.png'
import fyersLogo from '../assets/fyers-logo.svg'
import icicidirectLogo from '../assets/icicidirect-logo.svg'
import shoonyaLogo from '../assets/shoonya-logo.png'
import upstoxLogo from '../assets/upstox-logo.svg'
import zerodhaLogo from '../assets/zerodha-logo.svg'

const Integration = () => {

    const partners = [
        {
            name: "Aliceblue",
            logo: aliceblueLogo
        },
        {
          name: "Angel One",
          logo: angelOneLogo
        },
        {
            name: "Dhan",
            logo: dhanLogo
        },
        {
          name: "Flattrade",
          logo: flatTradeLogo
        },
        {
          name: "Fyers",
          logo: fyersLogo
        },
        {
          name: "ICICIDirect",
          logo: icicidirectLogo
        },
        {
          name: 'JainamDuck',
          logo: jainamDuck
        },
        {
          name: "Shoonya",
          logo: shoonyaLogo
        },
        {
          name: "Upstox",
          logo: upstoxLogo
        },
        {
          name: "Zerodha",
          logo: zerodhaLogo
        },
        {
          name: "5paisa",
          logo: FivepaisaLogo
        },
      ];

  return (
    <section id="integration" className="py-12 lg:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full overflow-hidden">
      <h2 className="text-xl text-gray-900 font-semibold mb-8 text-center">
        Integrates with
      </h2>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex space-x-8 py-4">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px]"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
        <div className="animate-marquee2 flex space-x-8 py-4 absolute top-0">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px]"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}

export default Integration