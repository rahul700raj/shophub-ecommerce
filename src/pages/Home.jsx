import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, TrendingUp, Shield, Truck } from 'lucide-react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products?limit=4');
        setFeaturedProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="animate-fade-in">
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              Welcome to ShopHub
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Discover amazing products at unbeatable prices
            </p>
            <Link to="/products" className="btn-primary inline-flex items-center space-x-2 text-lg animate-slide-up">
              <ShoppingBag className="w-6 h-6" />
              <span>Shop Now</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <Truck className="w-16 h-16 mx-auto mb-4 text-purple-600 animate-bounce-slow" />
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over $50</p>
            </div>
            <div className="card p-8 text-center">
              <Shield className="w-16 h-16 mx-auto mb-4 text-purple-600 animate-bounce-slow" />
              <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure transactions</p>
            </div>
            <div className="card p-8 text-center">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 text-purple-600 animate-bounce-slow" />
              <h3 className="text-xl font-bold mb-2">Best Prices</h3>
              <p className="text-gray-600">Guaranteed lowest prices</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Products
          </h2>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="text-center mt-12">
                <Link to="/products" className="btn-primary">
                  View All Products
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;