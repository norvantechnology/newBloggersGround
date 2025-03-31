"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Discover Insights on Tech, Fashion, Health, and More
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Join our community of writers and readers passionate about sharing knowledge and experiences across diverse topics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/blog"
              className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-colors"
            >
              Explore Articles
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/signup"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-colors"
            >
              Join Bloggers Ground
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background pattern/decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-blue-500 opacity-20"></div>
        <div className="absolute -left-20 top-1/2 w-72 h-72 rounded-full bg-indigo-500 opacity-20"></div>
        <div className="absolute right-1/4 bottom-0 w-80 h-80 rounded-full bg-blue-400 opacity-20"></div>
      </div>
      
      {/* Close button */}
      <button 
        className="absolute top-4 right-4 text-white p-1 rounded-full hover:bg-white/10"
        onClick={() => setIsVisible(false)}
        aria-label="Close banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}