import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const Positions = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Positions</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Day's Profit & Loss</p>
              <p className="text-2xl font-bold text-green-600">+$3,200</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Open Positions</p>
              <p className="text-2xl font-bold">5</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Used Margin</p>
              <p className="text-2xl font-bold">$45,800</p>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Symbol</th>
                <th className="text-right py-3 px-4">Type</th>
                <th className="text-right py-3 px-4">Quantity</th>
                <th className="text-right py-3 px-4">Entry</th>
                <th className="text-right py-3 px-4">LTP</th>
                <th className="text-right py-3 px-4">P&L</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">AAPL</td>
                <td className="text-right py-3 px-4">
                  <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-50 rounded-full">
                    LONG
                  </span>
                </td>
                <td className="text-right py-3 px-4">100</td>
                <td className="text-right py-3 px-4">$175.30</td>
                <td className="text-right py-3 px-4">$182.50</td>
                <td className="text-right py-3 px-4">
                  <div className="flex items-center justify-end text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +$720
                  </div>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">MSFT</td>
                <td className="text-right py-3 px-4">
                  <span className="px-2 py-1 text-xs font-medium text-red-700 bg-red-50 rounded-full">
                    SHORT
                  </span>
                </td>
                <td className="text-right py-3 px-4">50</td>
                <td className="text-right py-3 px-4">$425.60</td>
                <td className="text-right py-3 px-4">$420.30</td>
                <td className="text-right py-3 px-4">
                  <div className="flex items-center justify-end text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +$265
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

export default Positions;