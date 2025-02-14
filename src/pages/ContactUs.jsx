import { ArrowRight, Mail } from 'lucide-react'
import React from 'react'
import whatsappIcon from '../assets/whatsapp-logo.png'
import telegramIcon from '../assets/telegram-logo.png'
import youtubeIcon from '../assets/youtube-logo.png'
import emailIcon from '../assets/email-logo.svg'
import phoneIcon from '../assets/phone-icon.svg'
import blogIcon from '../assets/blog-icon.svg'

const ContactUs = () => {
  const contactMethods = [
    {
      icon: emailIcon,
      title: "Email Us",
      description: "Get support via email",
      link: "mailto:support@fnotrader.com",
      linkText: "support@fnotrader.com"
    },
    {
      icon: whatsappIcon,
      title: "WhatsApp",
      description: "Chat with us on WhatsApp", 
      link: "https://wa.me/+918885635467",
      linkText: "+91 888 563 5467"
    },
    {
      icon: telegramIcon,
      title: "Telegram",
      description: "Join our Telegram community",
      link: "https://t.me/fnotrader_com",
      linkText: "Join Telegram"
    },
    {
      icon: youtubeIcon,
      title: "YouTube",
      description: "Watch trading tutorials",
      link: "https://www.youtube.com/channel/UCZawT_YUYCmK3fT9FLd6TPA",
      linkText: "Visit Channel"
    },
    {
      icon: blogIcon,
      title: "Blog",
      description: "Read latest articles",
      link: "https://www.blog.fnotrader.com/",
      linkText: "Visit Blog"
    },
    {
      icon: phoneIcon,
      title: "Phone Support",
      description: "Call us for support",
      link: "tel:+918885635467",
      linkText: "+91 888 563 5467"
    }
  ];

  return (
    <section id="contact" className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:mb-16 mb-12">
          <h2 className="text-2xl lg:text-4xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-base lg:text-lg text-gray-600">We're here to help! Reach out to us for any questions or support needs</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white p-6 border border-gray-200 shadow-md rounded-lg h-full">
              <div className='flex items-center gap-4 mb-6'>
                  <img src={method.icon} alt={method.title} className='w-8 h-8 ml-1' />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              </div>
              <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
              >
                {method.linkText}
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactUs