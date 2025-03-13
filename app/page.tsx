import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center space-y-8 transform hover:scale-[1.01] transition-all duration-300">
        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent pb-2">
            We'll Be Right Back
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
            Our website is currently undergoing scheduled maintenance to provide you with an improved experience. We'll be back shortly.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-12 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a 
              href="tel:+16729668750"
              className="group flex items-center space-x-2 text-gray-600 hover:text-red-700 transition-colors"
            >
              <svg 
                className="w-6 h-6 group-hover:scale-110 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-lg">+1 672 966 8750</span>
            </a>

            <a 
              href="mailto:info@leostarimmigration.ca"
              className="group flex items-center space-x-2 text-gray-600 hover:text-red-700 transition-colors"
            >
              <svg 
                className="w-6 h-6 group-hover:scale-110 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-lg">info@leostarimmigration.ca</span>
            </a>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mt-12 flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-500">We'll be back online soon</span>
        </div>
      </div>
    </div>
  );
}