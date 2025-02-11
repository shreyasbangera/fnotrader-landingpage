import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Srikanth",
      rating: 5,
      text: "FNOTrader.com is an exceptional platform for Futures and Options analysis. Thanks to their real-time Options analysis, my profitability has doubled. Key features like OI Action and Option chain offer timely and accurate information, aiding in making informed trading decisions."
    },
    {
      name: "Vinayak", 
      rating: 5,
      text: "My trading has greatly improved after I started using FNOTrader.com. They have some unique features that are super powerful for option buyers."
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="bg-blue-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:mb-16 mb-12">
          <h2 className="text-2xl lg:text-4xl font-semibold text-gray-900 lg:mb-4 mb-2">Loved by traders from across India</h2>
          <p className="text-base lg:text-lg text-gray-600">Thousand of traders trust FNOTrader on a daily basis</p>
        </div>

        <div className="relative">
          <div className="swiper-container">
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-8 border border-neutral-100 shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                      <div className="flex items-center mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials