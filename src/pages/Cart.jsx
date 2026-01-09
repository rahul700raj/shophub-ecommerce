import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center animate-fade-in">
        <ShoppingBag className="w-32 h-32 mx-auto text-gray-300 mb-6" />
        <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some products to get started!</p>
        <Link to="/products" className="btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="card p-6">
              <div className="flex gap-6">
                <img src={item.thumbnail} alt={item.title} className="w-32 h-32 object-cover rounded-lg" />
                <div className="flex-1">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="text-xl font-semibold mb-2 hover:text-purple-600 transition-colors">{item.title}</h3>
                  </Link>
                  <p className="text-gray-600 mb-4">${item.price} each</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-xl font-semibold w-12 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <p className="text-2xl font-bold text-purple-600">${(item.price * item.quantity).toFixed(2)}</p>
                      <button onClick={() => removeFromCart(item.id)} className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="card p-6 sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-xl">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-purple-600">${getCartTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Link to="/checkout" className="btn-primary w-full text-center block">Proceed to Checkout</Link>
            <Link to="/products" className="btn-secondary w-full text-center block mt-4">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;