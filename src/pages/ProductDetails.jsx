import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ShoppingCart, Heart, Star, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart, addToWishlist, wishlist } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return <ErrorMessage message="Product not found" />;

  const isInWishlist = wishlist.some(item => item.id === product.id);

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <Link to="/products" className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-800 mb-6">
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Products</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="card p-4 mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.title}
              className="w-full h-96 object-contain rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`card p-2 ${selectedImage === index ? 'ring-4 ring-purple-600' : ''}`}
              >
                <img src={image} alt={`${product.title} ${index + 1}`} className="w-full h-20 object-contain rounded" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-lg font-medium">{product.rating}</span>
            </div>
          </div>

          <div className="border-t border-b py-6">
            <div className="flex items-baseline space-x-4">
              <span className="text-5xl font-bold text-purple-600">${product.price}</span>
              {product.discountPercentage > 0 && (
                <span className="bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                  -{Math.round(product.discountPercentage)}% OFF
                </span>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          <div className="flex space-x-4">
            <button onClick={() => addToCart(product)} className="flex-1 btn-primary flex items-center justify-center space-x-2 text-lg py-4">
              <ShoppingCart className="w-6 h-6" />
              <span>Add to Cart</span>
            </button>
            
            <button
              onClick={() => addToWishlist(product)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                isInWishlist ? 'bg-red-500 border-red-500 text-white' : 'border-gray-300 hover:border-red-500 hover:text-red-500'
              }`}
            >
              <Heart className={`w-6 h-6 ${isInWishlist ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;