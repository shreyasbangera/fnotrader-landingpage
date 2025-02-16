const PricingCard = ({
    type,
    title,
    originalPrice,
    price,
    validity,
    gradientFrom,
    buttonColor,
    onClick,
  }) => {
    return (
      <div className={`relative bg-gradient-to-b from-${gradientFrom} to-white rounded-3xl p-8 border transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}>
        {type === 'trial' && (
          <div className="absolute -top-3 -right-3">
            <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              FREE
            </span>
          </div>
        )}
        {type === 'popular' && (
          <div className="absolute -top-3 -right-3">
            <div className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
             POPULAR
            </div>
          </div>
        )}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <div className="text-3xl font-semibold mb-2">
            {originalPrice && (
              <p className="line-through text-gray-400 mr-2">
                ₹{originalPrice.toLocaleString('en-IN')}
              </p>
            )}
            <span>₹{price.toLocaleString('en-IN')}</span>
            {price > 0 && <span className="text-gray-600 text-base">/month</span>}
          </div>
          {price > 0 && <p className="text-gray-600 mb-4">(+ GST)</p>}
          <p className="text-gray-600">Validity - {validity}</p>
        </div>
        <button
          onClick={onClick}
          className={`w-full ${buttonColor} text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-colors`}
        >
          {type === 'trial' ? 'Start Trial' : 'Buy this Plan'}
        </button>
      </div>
    );
  };
  
  export default PricingCard;