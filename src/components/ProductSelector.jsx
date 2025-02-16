import React from "react";

const ProductSelector = ({ activeProduct, setActiveProduct }) => {

  const products = [
    { id: "quiktrade", label: "QuikTrade" },
    { id: "discover", label: "Discover" },
  ];

  return (
    <div className="flex justify-center mb-12">
    <div className="flex items-center gap-4 bg-white rounded-xl p-2 shadow-sm border border-gray-200">
      {products.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setActiveProduct(id)}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
            activeProduct === id
              ? "bg-blue-600 text-white shadow-lg scale-105"
              : "bg-white text-gray-600 hover:bg-gray-50"
          }`}
        >
          {label}
        </button>
      ))}
      </div>
    </div>
  );
};

export default ProductSelector;
