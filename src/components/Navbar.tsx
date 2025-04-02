import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, LayoutDashboard, BookOpen, Briefcase, Clock } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">TradePro</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`flex items-center ${isActive('/')}`}>
              <LayoutDashboard className="h-5 w-5 mr-1" />
              <span>Dashboard</span>
            </Link>
            <Link to="/orders" className={`flex items-center ${isActive('/orders')}`}>
              <Clock className="h-5 w-5 mr-1" />
              <span>Orders</span>
            </Link>
            <Link to="/holdings" className={`flex items-center ${isActive('/holdings')}`}>
              <BookOpen className="h-5 w-5 mr-1" />
              <span>Holdings</span>
            </Link>
            <Link to="/positions" className={`flex items-center ${isActive('/positions')}`}>
              <Briefcase className="h-5 w-5 mr-1" />
              <span>Positions</span>
            </Link>
          </div>

          <div className="flex items-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Buy / Sell
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;