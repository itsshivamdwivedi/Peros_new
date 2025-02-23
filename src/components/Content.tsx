import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import "../app/globals.css";

import ExportedImage from "next-image-export-optimizer";
import { useState } from "react";
const Content = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      once: false, 
    });
   

  }, []);
  const images = [
    "/assets/jar.png", 
    "/assets/jar.png",
    "/assets/jar.png",
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);
  
  

  return (
    <div className="flex flex-col items-center justify-center  min-h-screen">
           <section className="flex items-center justify-center bg-white scroll-animate md:hidden">
        <div className="md:w-full w-full p-4 flex flex-col justify-center items-center text-center" data-aos="fade-up" data-aos-delay="200">
          <p className="text-2xl sm:text-3xl leading-relaxed font-bold text-black mt-28">
            Welcome to the Future of breakfast. Peros redefines peanut butter with a commitment to purity and wellness. Experience a new standard of taste and nutrition, crafted to energize your mornings and elevate your lifestyle.
          </p>
        </div>
      </section>
      <div>
        <div className="image md:hidden">
         <ExportedImage src="/assets/Image2.png"
         unoptimized={true}
         alt ="shivam"
         width={500}
         height={300}
        objectFit="cover"  
         
         />
        
        </div>
      </div>
   
      <section className="flex items-center justify-center bg-gradient-radial from-white via-blue-200 to-blue-400 h-screen scroll-animate hidden sm:flex">
        <div className="max-w-full space-x-16 flex flex-col md:flex-row w-full overflow-hidden">
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-center items-start" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1500">
            <h2 className="text-5xl font-bold text-green-800">Dark Chocolate</h2>
            <h2 className="text-5xl font-bold text-green-800">Crunchy</h2>
            <button className="bg-gradient-to-r from-green-600 to-green-800 text-white py-3 px-8 my-8 font-semibold rounded-md uppercase transform hover:scale-105 transition">
              Buy Now
            </button>
          </div>
          <div className="md:w-1/2 w-full p-8" data-aos="slide-left" data-aos-duration="1500" data-aos-delay="200">
            <img src="/assets/creamy.png" alt="Product 2" className="w-full h-full" />
          </div>
        </div>
      </section>


      {/* Product 2 */}
      <section className="flex items-center justify-center bg-gradient-radial from-white via-blue-200 to-blue-400 h-screen scroll-animate hidden sm:flex">
        <div className="max-w-full space-x-16 flex flex-col md:flex-row w-full overflow-hidden">
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-center items-start" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1500">
            <h2 className="text-5xl font-bold text-green-800">Dark Chocolate</h2>
            <h2 className="text-5xl font-bold text-green-800">Crunchy</h2>
            <button className="bg-gradient-to-r from-green-600 to-green-800 text-white py-3 px-8 my-8 font-semibold rounded-md uppercase transform hover:scale-105 transition">
              Buy Now
            </button>
          </div>
          <div className="md:w-1/2 w-full p-8" data-aos="slide-left" data-aos-duration="1500" data-aos-delay="200">
            <img src="/assets/creamy.png" alt="Product 2" className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Product 3 */}
      <section className="flex items-center justify-center bg-gradient-radial from-white via-blue-200 to-blue-400 h-screen scroll-animate hidden sm:flex">
        <div className="max-w-full space-x-16 flex flex-col md:flex-row w-full overflow-hidden">
          <div className="md:w-1/2 w-full p-8" data-aos="slide-right" data-aos-duration="1200">
            <img src="/assets/classic.png" alt="Product 3" className="w-full h-full" />
          </div>
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-center items-start" data-aos="slide-left" data-aos-delay="200" data-aos-duration="1200">
            <h2 className="text-5xl font-bold text-green-800">Dark Chocolate</h2>
            <h2 className="text-5xl font-bold text-green-800">Classic</h2>
            <button className="bg-gradient-to-r from-green-600 to-green-800 text-white py-3 px-8 my-8 font-semibold rounded-md uppercase transform hover:scale-105 transition">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* Product 4 */}
      <section className="scroll-animate bg-black ">
        <div className="flex flex-col md:flex-row rounded-lg w-full overflow-hidden">
          <div className="md:w-1/2 w-full p-8" data-aos="slide-right" data-aos-duration="1200">
            <img
              src="/assets/home-images/spoon.jpg"
              alt="Product 4"
              className="w-full h-80 object-cover rounded-lg sticky-image"
            />
          </div>
          <div className="md:w-1/2 w-full p-12 flex flex-col justify-center items-start space-y-6 mb-12" data-aos="fade-up" data-aos-delay="200">
            <p className="text-2xl text-green-800 items-center">
              <u>The exclusivity</u>
            </p>
            <p className="text-xl leading-relaxed text-white">
              Welcome to the Future of breakfast. Peros redefines peanut butter with a commitment to purity and wellness. Experience a new standard of taste and nutrition, crafted to energize your mornings and elevate your lifestyle.
            </p>
          </div>
        </div>
      </section>
      <div>
        <div className="image md:hidden">
         <ExportedImage src="/assets/gymgirl.png"
         unoptimized={true}
         alt ="shivam"
         width={420}
         height={400}
        objectFit="cover"  
         
         />
        
        </div>
      </div>
      {/* For mobile */}
      <section className="scroll-animate bg-black md:hidden">
        <div className="flex flex-col md:flex-row rounded-lg w-full overflow-hidden ">
      
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-center items-start space-y-6 mb-12" data-aos="fade-up" data-aos-delay="200">
            <p className="text-2xl text-white items-center">
              <u>Our Vision</u>
            </p>
            <p className="text-xl leading-relaxed text-white">
               Peros is more than just a peanut butter brand--its a commitment to health , fitness, and survival of the fittest. As we grow, we plan to introduce more healthy and delicious products that align with our mission of promoting a stranger , healthier lifestyle.
            </p>
            <p className="text-xl text-white"> 
              Join the Peros Revolution 
            </p>
          </div>
        </div>
      </section>
    {/*  For mobile devices */}
      <div>
        <div className="image md:hidden">
         <ExportedImage src="/assets/jarimg.png"
         unoptimized={true}
         alt ="shivam"
         width={420}
         height={500}
        objectFit="cover"  
         
         />
        
        </div>
      </div>

      {/* Ui for mobile */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-black py-12">
      {/* Heading Section */}
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-5xl font-bold text-white">3x  Flavours</h1>
       
      </div>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-4">
        {/* Text Content */}
      

        {/* Image Carousel */}
        <div className="md:w-1/2 w-full p-8 flex flex-col items-center">
          <div className="relative w-full max-w-md">
            <img
              src={images[currentIndex]}
              alt="Flavor variant"
              className="w-full h-auto object-cover rounded-lg transition-opacity duration-300"
            />
            
            {/* Dots Indicator */}
            <div className="flex justify-center space-x-3 mt-8">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-white' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
            <div className="md:w-1/2 w-full p-8 text-center md:text-left">
          <h3 className="text-2xl md:text-5xl font-bold text-white mb-6">
            Dark Chocolate
            Rs.299
          </h3>
          <button className="bg-white text-black py-2 px-6 text-lg font-semibold rounded-full hover:bg-gray-200 transition-colors">
            Buy Now
          </button>
        </div>
          </div>
        </div>
      </div>
    </section>








      {/* Product 5 */}
      <section className="flex items-center justify-center bg-white scroll-animate">
        <div className="md:w-full w-full p-4 flex flex-col justify-center items-center text-center" data-aos="fade-up" data-aos-delay="200">
          <p className="text-2xl sm:text-2xl leading-relaxed font-bold text-black mt-28 ">
          At Peros, Believe that great Health starts with great Ingredients. Our Premium Peanut Butter is made from the finest handpicked peanuts found only in the southern part of Asia, ensuring an unmatched taste and nutrition in every spoonful.
          </p>
          <h2 className="text-40xl sm:text-25xl mt-4 font-bold text-black">30</h2>
          <h2 className="text-5xl font-bold text-black">
          </h2>
        </div>
      </section>

      <section className="flex justify-center items-center h-full m-8">
        <div className="flex gap-8 flex-wrap justify-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="text-center" key={index}>
              <div className="inline-flex items-center justify-center border-4 border-r-transparent border-green-600 rounded-full px-6 py-1 text-green-600 font-bold text-2xl mb-2" data-aos="fade-up" data-aos-delay="200">
                Zero
              </div>
              <div className="text-black text-base font-bold">
                Zero Cholesterol is simply dummy text of the printing and typesetting.
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Content;