import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const Holdings = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Holdings</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Total Investment</p>
              <p className="text-2xl font-bold">$95,400</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Current Value</p>
              <p className="text-2xl font-bold text-green-600">$124,500</p>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Symbol</th>
                <th className="text-right py-3 px-4">Quantity</th>
                <th className="text-right py-3 px-4">Avg. Cost</th>
                <th className="text-right py-3 px-4">LTP</th>
                <th className="text-right py-3 px-4">Current Value</th>
                <th className="text-right py-3 px-4">P&L</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">AAPL</td>
                <td className="text-right py-3 px-4">100</td>
                <td className="text-right py-3 px-4">$175.30</td>
                <td className="text-right py-3 px-4">$182.50</td>
                <td className="text-right py-3 px-4">$18,250</td>
                <td className="text-right py-3 px-4">
                  <div className="flex items-center justify-end text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +$720
                  </div>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">MSFT</td>
                <td className="text-right py-3 px-4">50</td>
                <td className="text-right py-3 px-4">$425.60</td>
                <td className="text-right py-3 px-4">$420.30</td>
                <td className="text-right py-3 px-4">$21,015</td>
                <td className="text-right py-3 px-4">
                  <div className="flex items-center justify-end text-red-600">
                    <TrendingDown className="h-4 w-4 mr-1" />
                    -$265
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Holdings;