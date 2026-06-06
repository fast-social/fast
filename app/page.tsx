'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-6">Fast Social</h1>
        <p className="text-xl text-purple-100 mb-12">
          Connect and share with your community
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth"
            className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors shadow-lg text-lg"
          >
            Get Started
          </Link>
          
          <button
            onClick={() => {
              // Scroll to features section
              const element = document.getElementById('features');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-lg"
          >
            Learn More
          </button>
        </div>

        {/* Features Section */}
        <div id="features" className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
            <p className="text-purple-100">Lightning-fast performance optimized for speed</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p className="text-purple-100">Your data is protected with enterprise security</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
            <div className="text-4xl mb-3">👥</div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-purple-100">Connect with millions of people worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
}
