import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f3f4f6]">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-gray-500 mb-6">Page not found</p>
        <a
          href="/"
          className="bg-green-900 text-white px-4 py-2 rounded-lg"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;