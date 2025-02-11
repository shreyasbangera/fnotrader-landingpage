import { ArrowRight, Mail, Youtube } from 'lucide-react'
import React from 'react'

const ContactUs = () => {
  const contactMethods = [
    {
      icon: <Mail className='text-white h-6 w-6'/>,
      title: "Email Us",
      description: "Get support via email",
      link: "mailto:support@fnotrader.com",
      linkText: "support@fnotrader.com"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-white' viewBox="0 0 432 432"><path fill="currentColor" d="M364.5 65Q427 127 427 214.5T364.5 364T214 426q-54 0-101-26L0 429l30-109Q2 271 2 214q0-87 62-149T214 3t150.5 62zM214 390q73 0 125-51.5T391 214T339 89.5T214 38T89.5 89.5T38 214q0 51 27 94l4 6l-18 65l67-17l6 3q42 25 90 25zm97-132q9 5 10 7q4 6-3 25q-3 8-15 15.5t-21 9.5q-18 2-33-2q-17-6-30-11q-8-4-15.5-8.5t-14.5-9t-13-9.5t-11.5-10t-10.5-10.5t-8.5-9.5t-7-8.5t-5.5-7t-3.5-5L128 222q-22-29-22-55q0-24 19-44q6-7 14-7q6 0 10 1q8 0 12 9q2 3 6 13l7 17.5l3 8.5q3 5 1 9q-3 7-5 9l-3 3l-3 3.5l-2 2.5q-6 6-3 11q13 22 30 37q13 11 43 26q7 3 11-1q12-15 17-21q4-6 12-3q6 3 36 17z"/></svg>,
      title: "WhatsApp",
      description: "Chat with us on WhatsApp", 
      link: "https://wa.me/+918885635467",
      linkText: "+91 888 563 5467"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-white' viewBox="0 0 32 32"><path fill="currentColor" d="M26.07 3.996a2.974 2.974 0 0 0-.933.223h-.004c-.285.113-1.64.683-3.7 1.547l-7.382 3.109c-5.297 2.23-10.504 4.426-10.504 4.426l.062-.024s-.359.118-.734.375a2.03 2.03 0 0 0-.586.567c-.184.27-.332.683-.277 1.11c.09.722.558 1.155.894 1.394c.34.242.664.355.664.355h.008l4.883 1.645c.219.703 1.488 4.875 1.793 5.836c.18.574.355.933.574 1.207c.106.14.23.257.379.351a1.119 1.119 0 0 0 .246.106l-.05-.012c.015.004.027.016.038.02c.04.011.067.015.118.023c.773.234 1.394-.246 1.394-.246l.035-.028l2.883-2.625l4.832 3.707l.11.047c1.007.442 2.027.196 2.566-.238c.543-.437.754-.996.754-.996l.035-.09l3.734-19.129c.106-.472.133-.914.016-1.343a1.807 1.807 0 0 0-.781-1.047a1.872 1.872 0 0 0-1.067-.27zm-.101 2.05c-.004.063.008.056-.02.177v.011l-3.699 18.93c-.016.027-.043.086-.117.145c-.078.062-.14.101-.465-.028l-5.91-4.531l-3.57 3.254l.75-4.79l9.656-9c.398-.37.265-.448.265-.448c.028-.454-.601-.133-.601-.133l-12.176 7.543l-.004-.02l-5.836-1.965v-.004l-.015-.003a.27.27 0 0 0 .03-.012l.032-.016l.031-.011s5.211-2.196 10.508-4.426c2.652-1.117 5.324-2.242 7.379-3.11a807.312 807.312 0 0 1 3.66-1.53c.082-.032.043-.032.102-.032z"/></svg>,
      title: "Telegram",
      description: "Join our Telegram community",
      link: "https://t.me/fnotrader_com",
      linkText: "Join Telegram"
    },
    {
      icon: <Youtube className='text-white h-6 w-6'/>,
      title: "YouTube",
      description: "Watch trading tutorials",
      link: "https://www.youtube.com/channel/UCZawT_YUYCmK3fT9FLd6TPA",
      linkText: "Visit Channel"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>,
      title: "Blog",
      description: "Read latest articles",
      link: "https://www.blog.fnotrader.com/",
      linkText: "Visit Blog"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>,
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
            <div key={index} className="bg-white p-6 border border-neutral-100 shadow-md rounded-lg h-full">
              <div className='flex items-center gap-4 mb-6'>
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              </div>
              <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
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