import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-4">
      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 max-w-md text-center animate-fade-in">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-red-700 mb-2">Oops! Something went wrong</h3>
        <p className="text-red-600">{message || 'Failed to load data. Please try again later.'}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;