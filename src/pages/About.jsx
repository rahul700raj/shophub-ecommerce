import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="animate-fade-in">
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About ShopHub</h1>
          <p className="text-xl max-w-2xl mx-auto">Your trusted destination for quality products and exceptional shopping experiences</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">At ShopHub, we're committed to providing our customers with the best online shopping experience. We carefully curate our product selection to ensure quality, value, and variety for every shopper.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-8 text-center">
              <Award className="w-16 h-16 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold mb-2">Quality Products</h3>
              <p className="text-gray-600">Only the best for our customers</p>
            </div>
            <div className="card p-8 text-center">
              <Users className="w-16 h-16 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold mb-2">Customer First</h3>
              <p className="text-gray-600">Your satisfaction is our priority</p>
            </div>
            <div className="card p-8 text-center">
              <Globe className="w-16 h-16 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-gray-600">Shipping worldwide</p>
            </div>
            <div className="card p-8 text-center">
              <Heart className="w-16 h-16 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold mb-2">Made with Love</h3>
              <p className="text-gray-600">Passion in everything we do</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;