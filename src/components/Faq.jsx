import { useState } from "react"

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqData = [
    {
      question: "What is FNOTrader?",
      answer:
        "FNOTrader is a comprehensive platform designed for Futures and Options traders, providing advanced analysis tools and real-time market insights to help traders make informed decisions.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply sign up for a free trial, connect your broker account, and start using our powerful analysis tools. Our platform guides you through the entire process.",
    },
    {
      question: "Which brokers do you support?",
      answer:
        "We support major Indian brokers including Aliceblue, ICICI Direct, 5paisa, and Angel Broking. We're constantly adding more brokers to our platform.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we take security seriously. All data is encrypted and we follow industry-standard security practices to protect your information and trading activities.",
    },
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-blue-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:mb-16 mb-12">
          <h2 className="text-2xl lg:text-4xl font-semibold text-gray-900 lg:mb-4 mb-2">Frequently asked questions</h2>
          <p className="text-base lg:text-lg text-gray-600">Got questions? We've got answers</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-neutral-100 shadow-sm animate__animated animate__fadeInUp">
              <button
                className="faq-button w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12M6 12h12"></path>
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="faq-answer px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq

