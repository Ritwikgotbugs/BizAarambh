'use client';

import React from 'react';

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none z-50"
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}