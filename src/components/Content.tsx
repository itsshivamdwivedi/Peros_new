import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import "../app/globals.css";

const Content = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      once: false, 
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-screen">
      {/* Product 1 */}
      {/* <section className="flex items-center justify-center bg-gradient-linear from-[#fef7f1] via-blue-200 to-blue-400 h-screen scroll-animate">
        <div className="max-w-full space-x-16 flex flex-col md:flex-row w-full overflow-hidden">
          <div className="md:w-1/2 w-full p-8" data-aos="slide-right" data-aos-duration="1500">
            <img src="/assets/choco.png" alt="Product 1" className="w-full h-full" />
          </div>
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-center items-start" data-aos="slide-left" data-aos-delay="200" data-aos-duration="1500">
            <h2 className="text-5xl font-bold text-green-800">Dark Chocolate</h2>
            <h2 className="text-5xl font-bold text-green-800">Crunchy</h2>
            <button className="bg-gradient-to-r from-green-600 to-green-800 text-white py-3 px-8 my-8 font-semibold rounded-md uppercase transform hover:scale-105 transition">
              Buy Now
            </button>
          </div>
        </div>
      </section> */}
      <section className="flex items-center justify-center bg-gradient-radial from-white via-blue-200 to-blue-400 h-screen scroll-animate">
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
      <section className="flex items-center justify-center bg-gradient-radial from-white via-blue-200 to-blue-400 h-screen scroll-animate">
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
      <section className="flex items-center justify-center bg-gradient-radial from-white via-blue-200 to-blue-400 h-screen scroll-animate">
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
      <section className="scroll-animate">
        <div className="flex flex-col md:flex-row rounded-lg w-full overflow-hidden">
          <div className="md:w-1/2 w-full p-8" data-aos="slide-right" data-aos-duration="1200">
            <img
              src="/assets/home-images/spoon.jpg"
              alt="Product 4"
              className="w-full h-80 object-cover rounded-lg sticky-image"
            />
          </div>
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-center items-start space-y-6" data-aos="fade-up" data-aos-delay="200">
            <p className="text-2xl text-green-800 items-center">
              <u>The exclusivity</u>
            </p>
            <p className="text-xl leading-relaxed text-black">
              Welcome to the Future of breakfast. Peros redefines peanut butter with a commitment to purity and wellness. Experience a new standard of taste and nutrition, crafted to energize your mornings and elevate your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Product 5 */}
      <section className="flex items-center justify-center bg-white scroll-animate">
        <div className="md:w-full w-full p-4 flex flex-col justify-center items-center text-center" data-aos="fade-up" data-aos-delay="200">
          <p className="text-2xl sm:text-3xl leading-relaxed font-bold text-black mt-28">
            Welcome to the Future of breakfast. Peros redefines peanut butter with a commitment to purity and wellness. Experience a new standard of taste and nutrition, crafted to energize your mornings and elevate your lifestyle.
          </p>
          <h2 className="text-40xl sm:text-25xl mt-4 font-bold text-green-800">30</h2>
          <h2 className="text-5xl font-bold text-black">
            <u>Gram of High Quality Protein</u>
          </h2>
        </div>
      </section>

      {/* Features Section */}
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