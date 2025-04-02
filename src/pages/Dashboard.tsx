import React from 'react';
import { ArrowUpRight, ArrowDownRight, DollarSign, Percent } from 'lucide-react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Market Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Portfolio Value</h3>
            <DollarSign className="h-5 w-5 text-gray-400" />
          </div>
          <p className="text-3xl font-bold">$124,500</p>
          <div className="flex items-center mt-2 text-green-600">
            <ArrowUpRight className="h-4 w-4" />
            <span className="ml-1">+2.5%</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Today's P&L</h3>
            <Percent className="h-5 w-5 text-gray-400" />
          </div>
          <p className="text-3xl font-bold text-green-600">+$3,200</p>
          <div className="flex items-center mt-2 text-green-600">
            <ArrowUpRight className="h-4 w-4" />
            <span className="ml-1">+1.8%</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Available Margin</h3>
            <DollarSign className="h-5 w-5 text-gray-400" />
          </div>
          <p className="text-3xl font-bold">$25,800</p>
          <div className="flex items-center mt-2 text-red-600">
            <ArrowDownRight className="h-4 w-4" />
            <span className="ml-1">-5.2%</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Watchlist</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Symbol</th>
                <th className="text-right py-3 px-4">LTP</th>
                <th className="text-right py-3 px-4">Change</th>
                <th className="text-right py-3 px-4">Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">AAPL</td>
                <td className="text-right py-3 px-4">$182.50</td>
                <td className="text-right py-3 px-4 text-green-600">+1.25%</td>
                <td className="text-right py-3 px-4">5.2M</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">MSFT</td>
                <td className="text-right py-3 px-4">$420.30</td>
                <td className="text-right py-3 px-4 text-red-600">-0.85%</td>
                <td className="text-right py-3 px-4">3.8M</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">GOOGL</td>
                <td className="text-right py-3 px-4">$145.70</td>
                <td className="text-right py-3 px-4 text-green-600">+2.10%</td>
                <td className="text-right py-3 px-4">2.1M</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;