import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="gradient-bg text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">🛍️ ShopHub</h3>
            <p className="text-gray-200">Your one-stop destination for amazing products at great prices.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-yellow-300 transition-colors">Products</Link></li>
              <li><Link to="/about" className="hover:text-yellow-300 transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/cart" className="hover:text-yellow-300 transition-colors">Shopping Cart</Link></li>
              <li><Link to="/wishlist" className="hover:text-yellow-300 transition-colors">Wishlist</Link></li>
              <li><Link to="/login" className="hover:text-yellow-300 transition-colors">My Account</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/rahul700raj" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:rm2778643@gmail.com" className="hover:text-yellow-300 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; 2024 ShopHub. Built with ❤️ by Rahul Mishra</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;