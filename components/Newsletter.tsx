"use client";

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Thanks for subscribing! Check your email for confirmation.');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 dark:text-white">Stay Updated</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Subscribe to our newsletter to receive the latest updates, articles, and exclusive content directly in your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-grow relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading' || status === 'success'}
              />
              {status === 'error' && (
                <p className="absolute left-0 -bottom-6 text-sm text-red-500 text-left">{message}</p>
              )}
            </div>
            <button
              type="submit"
              className={`px-6 py-3 rounded-lg font-medium text-white transition-colors ${
                status === 'loading' 
                  ? 'bg-blue-400 cursor-wait' 
                  : status === 'success'
                  ? 'bg-green-500'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' 
                ? 'Subscribing...' 
                : status === 'success' 
                ? 'Subscribed!' 
                : 'Subscribe'}
            </button>
          </form>
          
          {status === 'success' && (
            <p className="text-green-600 dark:text-green-400 mt-3">{message}</p>
          )}
          
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}