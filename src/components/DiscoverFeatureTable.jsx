import { Check, X } from "lucide-react";

const DiscoverFeatureTable = ({ features }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
    <div className="hidden lg:flex lg:flex-col">
      {/* Desktop Header */}
      <div className="hidden lg:grid lg:grid-cols-9 bg-gray-50 border-b border-gray-200">
        <div className="lg:col-span-3 p-6 border-r border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Features</h3>
        </div>
        <div className="lg:col-span-2 p-6 text-center border-r border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Starter</h3>
        </div>
        <div className="lg:col-span-2 p-6 text-center border-r border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Sixer</h3>
        </div>
        <div className="lg:col-span-2 p-6 text-center">
          <h3 className="text-lg font-medium text-gray-900">Pro</h3>
        </div>
      </div>

      <div>
        {features.map((feature, index) => (
          <div
            key={feature.name}
            className={`grid grid-cols-9 ${
              index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            } hover:bg-gray-100 transition-colors`}
          >
            <div className="col-span-3 p-6 border-r border-gray-200">
              <h4 className="text-gray-900">{feature.name}</h4>
            </div>
            <div className="col-span-2 p-6 flex items-center justify-center border-r border-gray-200">
              {feature.isText ? (
                <span className="text-gray-700">{feature.starter}</span>
              ) : (
                <>
                  {feature.starter ? (
                    <Check className="w-6 h-6 text-green-500" />
                  ) : (
                    <X className="w-6 h-6 text-red-500" />
                  )}
                </>
              )}
            </div>
            <div className="col-span-2 p-6 flex items-center justify-center border-r border-gray-200">
              {feature.isText ? (
                <span className="text-gray-700">{feature.sixer}</span>
              ) : (
                <>
                  {feature.sixer ? (
                    <Check className="w-6 h-6 text-green-500" />
                  ) : (
                    <X className="w-6 h-6 text-red-500" />
                  )}
                </>
              )}
            </div>
            <div className="col-span-2 p-6 flex items-center justify-center">
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
        {features.map((feature, index) => (
          <div key={feature.name} className="border-b border-gray-200 last:border-b-0">
            <div className="p-4 bg-gray-50">
              <h4 className="text-gray-900">{feature.name}</h4>
              {feature.description && (
                <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
              )}
            </div>
            <div className="grid grid-cols-3 divide-x divide-gray-200">
              <div className="p-4 text-center">
                <p className="text-sm text-gray-500 mb-2">Starter</p>
                {feature.isText ? (
                  <span className="text-gray-700 text-sm">{feature.starter}</span>
                ) : (
                  <div className="flex justify-center">
                    {feature.starter ? (
                      <Check className="w-6 h-6 text-green-500" />
                    ) : (
                      <X className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                )}
              </div>
              <div className="p-4 text-center">
                <p className="text-sm text-gray-500 mb-2">Sixer</p>
                {feature.isText ? (
                  <span className="text-gray-700 text-sm">{feature.sixer}</span>
                ) : (
                  <div className="flex justify-center">
                    {feature.sixer ? (
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

  export default DiscoverFeatureTable;