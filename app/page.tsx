import React from "react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="container max-w-lg p-8 bg-white rounded-lg shadow-lg text-center transform transition-transform hover:translate-y-[-5px] hover:shadow-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-4">We'll Be Back Soon!</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">
          Our website is currently undergoing scheduled maintenance. Thank you for your patience.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-700">
          Meanwhile, contact us at <a href="tel:+16729668750" className="text-green-700 font-bold">+1 672 966 8750</a> or via email at <a href="mailto:info@leostarimmigration.ca" className="text-green-700 font-bold">info@leostarimmigration.ca</a>
        </p>
      </div>
    </div>
  );
}