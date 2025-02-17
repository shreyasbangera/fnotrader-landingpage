import React, { useEffect, useState } from 'react'
import DataTable from '../components/DataTable';
import { AlertTriangle } from 'lucide-react';

const HolidayList = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    const holidayListColumns = [
        { header: 'Sr No', accessor: 'srno' },
        { header: 'Date', accessor: 'date' },
        { header: 'Day', accessor: 'day' },
        { header: 'Description', accessor: 'description' },
      ];

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://stock-api2.fnotrader.com/v1/get_exchange_holidays?exchange=nfo');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            console.log(jsonData)
            setData(jsonData);
          } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

      if (loading) {
        return (
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        );
      }
    
      if (error) {
        return (
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-red-50 p-4 rounded-lg flex items-center gap-2 text-red-700">
              <AlertTriangle className="h-5 w-5" />
              <span>Error: {error}</span>
            </div>
          </div>
        );
      }
    
      if (!data) {
        return null;
      }

      const sortedData = data?.data?.NFO?.sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((item, index) => ({
          ...item,
          srno: index + 1
        })) || [];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-7xl mx-auto space-y-6">        
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DataTable
          data={sortedData}
          columns={holidayListColumns}
          title="Holiday List"
          className="col-span-full"
        />
      </div>
    </div>
    </div>
  )
}

export default HolidayList