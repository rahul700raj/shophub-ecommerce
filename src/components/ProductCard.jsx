import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist, wishlist } = useCart();
  const isInWishlist = wishlist.some(item => item.id === product.id);

  return (
    <div className="card p-4 animate-fade-in">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden rounded-lg mb-4 group">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {product.discountPercentage > 0 && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              -{Math.round(product.discountPercentage)}%
            </span>
          )}
        </div>
      </Link>
      
      <div className="space-y-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg hover:text-purple-600 transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>
        
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{product.rating}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-purple-600">${product.price}</p>
          </div>
        </div>
        
        <div className="flex space-x-2 pt-2">
          <button
            onClick={() => addToCart(product)}
            className="flex-1 btn-primary flex items-center justify-center space-x-2 text-sm py-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
          
          <button
            onClick={() => addToWishlist(product)}
            className={`p-2 rounded-lg border-2 transition-all duration-300 ${
              isInWishlist
                ? 'bg-red-500 border-red-500 text-white'
                : 'border-gray-300 hover:border-red-500 hover:text-red-500'
            }`}
          >
            <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;