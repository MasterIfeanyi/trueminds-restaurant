import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 z-100"
      aria-label="Scroll to top"
    >
      <FaArrowUp className="h-6 w-6" />
    </button>
  );
};

export default ScrollToTop;