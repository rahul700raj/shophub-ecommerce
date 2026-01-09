import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn } from 'lucide-react';
import { saveToLocalStorage } from '../utils/localStorage';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveToLocalStorage('user', formData);
    alert('Login successful! (Demo only)');
  };

  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <div className="max-w-md mx-auto">
        <div className="card p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <LogIn className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
            <p className="text-gray-600">Login to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-600 focus:outline-none transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input type="password" name="password" required value={formData.password} onChange={handleChange} placeholder="••••••••" className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-600 focus:outline-none transition-colors" />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full text-lg py-3">Login</button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">Don't have an account? <Link to="/signup" className="text-purple-600 font-semibold hover:text-purple-800">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;