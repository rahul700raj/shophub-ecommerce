import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center animate-fade-in">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary inline-flex items-center justify-center space-x-2">
            <Home className="w-5 h-5" />
            <span>Go to Homepage</span>
          </Link>
          <Link to="/products" className="btn-secondary inline-flex items-center justify-center space-x-2">
            <Search className="w-5 h-5" />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;