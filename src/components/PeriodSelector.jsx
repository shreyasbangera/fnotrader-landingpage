import React from 'react';


const PeriodSelector= ({ period, setPeriod }) => {
  const periods = [
    { id: '1m', label: 'Monthly' },
    { id: '6m', label: 'Semi Annual' },
    { id: '12m', label: 'Annual' },
  ];

  return (
    <div className="flex justify-center">
      <div className="flex flex-col sm:flex-row items-center gap-2 p-2 sm:gap-4 mb-12 bg-white rounded-xl shadow-sm border border-gray-200 w-full lg:w-auto">
        {periods.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setPeriod(id)}
            className={`w-full sm:w-auto px-4 sm:px-8 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
              period === id
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PeriodSelector;