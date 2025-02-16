import { Check, X } from "lucide-react";

const QuikTradeFeatureTable = ({ features }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    {/* Desktop Version */}
    <div className="hidden lg:flex lg:flex-col">
      <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200">
        <div className="col-span-6 p-6 border-r border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Features</h3>
        </div>
        <div className="col-span-3 p-6 text-center border-r border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">QuikTrade Scalper</h3>
        </div>
        <div className="col-span-3 p-6 text-center">
          <h3 className="text-lg font-medium text-gray-900">QuikTrade Pro</h3>
        </div>
      </div>

      {/* Scrollable Content */}
      <div>
        {features.map((feature, index) => (
          <div
            key={feature.name}
            className={`grid grid-cols-12 ${
              index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            } hover:bg-gray-100 transition-colors`}
          >
            <div className="col-span-6 p-6 border-r border-gray-200">
              <h4 className=" text-gray-900">{feature.name}</h4>
              {feature.description && (
                <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
              )}
            </div>
            <div className="col-span-3 p-6 flex items-center justify-center border-r border-gray-200">
              {feature.isText ? (
                <span className="text-gray-700">{feature.scalper}</span>
              ) : (
                <>
                  {feature.scalper ? (
                    <Check className="w-6 h-6 text-green-500" />
                  ) : (
                    <X className="w-6 h-6 text-red-500" />
                  )}
                </>
              )}
            </div>
            <div className="col-span-3 p-6 flex items-center justify-center">
              {feature.isText ? (
                <span className="text-gray-700">{feature.pro}</span>
              ) : (
                <>
                  {feature.pro ? (
                    <Check className="w-6 h-6 text-green-500" />
                  ) : (
                    <X className="w-6 h-6 text-red-500" />
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Mobile Version */}
    <div className="lg:hidden flex flex-col">

      {/* Scrollable Content */}
      <div>
        {features.map((feature) => (
          <div key={feature.name} className="border-b border-gray-200 last:border-b-0">
            <div className="p-4 bg-gray-50">
              <h4 className="text-gray-900">{feature.name}</h4>
              {feature.description && (
                <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
              )}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-200">
              <div className="p-4 text-center">
                <p className="text-sm text-gray-500 mb-2">Scalper</p>
                {feature.isText ? (
                  <span className="text-gray-700 text-sm">{feature.scalper}</span>
                ) : (
                  <div className="flex justify-center">
                    {feature.scalper ? (
                      <Check className="w-6 h-6 text-green-500" />
                    ) : (
                      <X className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                )}
              </div>
              <div className="p-4 text-center">
                <p className="text-sm text-gray-500 mb-2">Pro</p>
                {feature.isText ? (
                  <span className="text-gray-700 text-sm">{feature.pro}</span>
                ) : (
                  <div className="flex justify-center">
                    {feature.pro ? (
                      <Check className="w-6 h-6 text-green-500" />
                    ) : (
                      <X className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default QuikTradeFeatureTable