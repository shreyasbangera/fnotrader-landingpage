import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Srikanth",
      rating: 5,
      text: "FNOTrader.com is an exceptional platform for Futures and Options analysis. Thanks to their real-time Options analysis, my profitability has doubled. Key features like OI Action and Option chain offer timely and accurate information, aiding in making informed trading decisions.",
    },
    {
      name: "Vinayak",
      rating: 5,
      text: "My trading has greatly improved after I started using FNOTrader.com. They have some unique features that are super powerful for option buyers.",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 text-blue-600"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="bg-blue-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center lg:mb-16 mb-12">
          <h2 className="text-2xl lg:text-4xl font-semibold text-gray-900 lg:mb-4 mb-2">
            Loved by traders from across India
          </h2>
          <p className="text-base lg:text-lg text-gray-600">
            Thousand of traders trust FNOTrader on a daily basis
          </p>
        </div>

        <div className="relative">
          <div className="swiper-container">
            <div className="grid lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 relative border border-gray-200 shadow-sm"
                >
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 bg-blue-200/20 rounded-full filter blur-xl"></div>
                  <div className="relative">
                    <svg
                      className="h-8 w-8 text-blue-600 mb-4"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                    </svg>
                    <p className="text-gray-600 mb-6 text-sm lg:text-base leading-relaxed">{testimonial.text}</p>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                          <span className="text-white font-medium">{testimonial.name.charAt(0)}</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-black font-medium">{testimonial.name}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          <div class="mt-16 flex flex-col items-center">
          <div class="flex items-center space-x-1 mb-4">
          {renderStars(5)}
          </div>
          <p class="text-xl font-medium text-black">4.9 out of 5 stars</p>
          <p class="mt-2 text-gray-600">from over 500 reviews</p>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
