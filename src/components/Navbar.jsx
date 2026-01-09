import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount, wishlist } = useCart();

  return (
    <nav className="gradient-bg text-white shadow-2xl sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-3xl font-bold animate-pulse">
            🛍️ ShopHub
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-yellow-300 transition-colors duration-300">Home</Link>
            <Link to="/products" className="hover:text-yellow-300 transition-colors duration-300">Products</Link>
            <Link to="/about" className="hover:text-yellow-300 transition-colors duration-300">About</Link>
            <Link to="/contact" className="hover:text-yellow-300 transition-colors duration-300">Contact</Link>
            
            <Link to="/wishlist" className="relative hover:scale-110 transition-transform">
              <Heart className="w-6 h-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {wishlist.length}
                </span>
              )}
            </Link>
            
            <Link to="/cart" className="relative hover:scale-110 transition-transform">
              <ShoppingCart className="w-6 h-6" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-purple-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {getCartCount()}
                </span>
              )}
            </Link>
            
            <Link to="/login" className="hover:scale-110 transition-transform">
              <User className="w-6 h-6" />
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <Link to="/" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/products" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/about" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/wishlist" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Wishlist ({wishlist.length})</Link>
            <Link to="/cart" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Cart ({getCartCount()})</Link>
            <Link to="/login" className="block py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Login</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;