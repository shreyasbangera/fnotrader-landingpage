import React, { useEffect, useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import DataTable  from '../components/DataTable';

const formatPercentage = (value) => `${value.toFixed(2)}%`;

const banListColumns = [
  { header: 'Symbol', accessor: 'nseSymbol' },
  { header: 'MWPL %', accessor: 'mwplPercentage', format: formatPercentage },
  { header: 'Prev MWPL %', accessor: 'prevMwplPercentage', format: formatPercentage },
];

const mwplChangeColumns = [
  { header: 'Symbol', accessor: 'nseSymbol' },
  { header: 'MWPL %', accessor: 'mwplPercentage', format: formatPercentage, sortable: true },
  { header: 'Prev MWPL %', accessor: 'prevMwplPercentage', format: formatPercentage, sortable: true },
  { 
    header: 'Difference', 
    accessor: 'mwplDifference', 
    format: (value) => (value > 0 ? '+' : '') + value?.toFixed(2) + '%',
    sortable: true 
  }
];

function BanList() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://stock-api2.fnotrader.com/v1/fno-mwpl?ban=true&date=${new Date().toISOString().split('T')[0]}&entrants=true&exits=true`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        
        // Calculate MWPL difference for each instrument
        const instrumentsWithDifference = jsonData.data.instrumentsWithMwplChange.map(instrument => ({
          ...instrument,
          mwplDifference: instrument.mwplPercentage - instrument.prevMwplPercentage
        }));
        
        setData({
          ...jsonData,
          data: {
            ...jsonData.data,
            instrumentsWithMwplChange: instrumentsWithDifference
          }
        });
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

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <DataTable
            data={data?.data?.banList || []}
            columns={banListColumns}
            title="Ban List"
            className="lg:col-span-1"
          />
          
          <DataTable
            data={data?.data?.entrantsList || []}
            columns={banListColumns}
            title="Posiible Entrants"
            className="lg:col-span-1"
          />
          
          <DataTable
            data={data?.data?.exitsList || []}
            columns={banListColumns}
            title="Possible Exits"
            className="lg:col-span-1"
          />
        </div>

        <DataTable
          data={data.data.instrumentsWithMwplChange}
          columns={mwplChangeColumns}
          title="All Instruments with MWPL Change"
          className="col-span-full"
          defaultSort={{ field: 'mwplPercentage', direction: 'asc' }}
          searchable={true}
          maxHeight="max-h-[36rem]"
        />
      </div>
    </div>
  );
}

export default BanList;