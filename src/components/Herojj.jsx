import React from "react";

export default function HeroSection() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1500')" }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Optional overlay */}
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">Welcome to Our Website</h1>
          <p className="text-xl mb-8">Your journey to success starts here.</p>
          <a href="#jar" className="bg-teal-500 text-white py-3 px-6 rounded-full text-lg hover:bg-teal-600 transition duration-300">
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );
}
