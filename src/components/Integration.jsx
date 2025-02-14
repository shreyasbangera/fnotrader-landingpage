import React from 'react'
import FivepaisaLogo from '../assets/5paisa-logo.svg'
import aliceblueLogo from '../assets/aliceblue-logo.webp'
import jainamDuck from '../assets/duck-logo.svg'
import angelOneLogo from '../assets/angelone-logo.png'
import dhanLogo from '../assets/dhan-logo.svg'
import flatTradeLogo from '../assets/flattrade-logo.png'
import fyersLogo from '../assets/fyers-logo.svg'
import icicidirectLogo from '../assets/icicidirect-logo.svg'
import shoonyaLogo from '../assets/shoonya-logo.webp'
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
    <div className="py-4 lg:py-8 w-full">
      <h2 className="text-xl lg:text-2xl text-gray-900 font-semibold lg:mb-16 mb-12 text-center">
      Integrates with leading brokers
      </h2>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex gap-8 pr-8 items-center">
          {partners?.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center bg-white rounded-xl py-6 px-8 shadow-sm min-w-[200px]"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
        <div className="animate-marquee2 flex items-center gap-8 pr-8 absolute top-0">
          {partners?.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center bg-white rounded-xl py-6 px-8 shadow-sm min-w-[200px]"
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
  )
}

export default Integration