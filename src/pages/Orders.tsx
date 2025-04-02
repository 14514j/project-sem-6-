import React from 'react';

const Orders = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Orders</h1>
      
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-2">
              <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md">
                All
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md">
                Pending
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md">
                Completed
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Time</th>
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Symbol</th>
                  <th className="text-right py-3 px-4">Quantity</th>
                  <th className="text-right py-3 px-4">Price</th>
                  <th className="text-right py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">09:45 AM</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-50 rounded-full">
                      BUY
                    </span>
                  </td>
                  <td className="py-3 px-4">AAPL</td>
                  <td className="text-right py-3 px-4">100</td>
                  <td className="text-right py-3 px-4">$182.50</td>
                  <td className="text-right py-3 px-4">
                    <span className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full">
                      COMPLETE
                    </span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">10:15 AM</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 text-xs font-medium text-red-700 bg-red-50 rounded-full">
                      SELL
                    </span>
                  </td>
                  <td className="py-3 px-4">MSFT</td>
                  <td className="text-right py-3 px-4">50</td>
                  <td className="text-right py-3 px-4">$420.30</td>
                  <td className="text-right py-3 px-4">
                    <span className="px-2 py-1 text-xs font-medium text-yellow-700 bg-yellow-50 rounded-full">
                      PENDING
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;