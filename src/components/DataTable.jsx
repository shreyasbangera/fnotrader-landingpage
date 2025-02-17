import { ArrowUpDown } from 'lucide-react';
import React, { useState } from 'react'

const DataTable = ({   data, 
    columns, 
    title, 
    className = '',
    defaultSort,
    searchable = false,
    maxHeight}) => {
    const [sortConfig, setSortConfig] = useState(defaultSort || { field: '', direction: 'asc' });
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSort = (field) => {
      setSortConfig(current => ({
        field,
        direction: current.field === field && current.direction === 'asc' ? 'desc' : 'asc'
      }));
    };
  
    const sortedData = [...data].sort((a, b) => {
      if (!sortConfig.field) return 0;
      
      const aValue = a[sortConfig.field];
      const bValue = b[sortConfig.field];
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      return sortConfig.direction === 'asc' 
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  
    const filteredData = sortedData.filter(item => 
      searchTerm === '' || 
      item.nseSymbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden ${className}`}>
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          {searchable && (
            <div className="mt-2 flex justify-end">
              <input
                type="text"
                placeholder="Search by symbol..."
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className={`overflow-x-auto ${maxHeight ? `overflow-y-auto ${maxHeight}` : ''}`}>
          {filteredData.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No data available
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center gap-2">
                        {column.header}
                        {column.sortable && (
                          <button
                            onClick={() => handleSort(column.accessor)}
                            className={`p-1 rounded hover:bg-gray-200 ${
                              sortConfig.field === column.accessor ? 'text-blue-600' : ''
                            }`}
                          >
                            <ArrowUpDown className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50">
                    {columns.map((column, colIndex) => (
                      <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {column.format
                          ? column.format(row[column.accessor])
                          : row[column.accessor]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }

export default DataTable