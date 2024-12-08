"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutHero: React.FC = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1200, once: true });

    // GSAP Animations
    const heroTimeline = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
    });

    heroTimeline
      .fromTo(
        ".hero-heading",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, delay: 0.5 }
      )
      .fromTo(
        ".hero-subtext",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        "-=0.5"
      )
      .fromTo(
        ".hero-button",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 },
        "-=0.5"
      );

    // GSAP Animations for sections
    gsap.utils.toArray(".fade-in-section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.utils.toArray(".fade-in-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('assets/about-images/bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>
        <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col items-center justify-center text-center h-full text-white">
          <h1 className="hero-heading text-5xl md:text-7xl font-bold tracking-wide mb-6">
            Welcome to Peros
          </h1>
          <p className="hero-subtext text-xl md:text-3xl font-light max-w-2xl">
            We believe in creating a world where health, quality, and passion
            come together to make life better for everyone.
          </p>
          <a
            href="#our-values"
            className="hero-button mt-8 bg-green-500 hover:bg-yellow-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
          >
            Explore Our Journey
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-20 fade-in-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Peros, we are more than just a brand – we are a movement
                dedicated to healthy living. With a foundation built on trust,
                sustainability, and innovation, we bring you the best in
                premium food products.
              </p>
              <a
                href="#learn-more"
                className="bg-black text-white py-3 px-6 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
              >
                Learn More
              </a>
            </div>
            <div data-aos="fade-left">
              <img
                src="assets/about-images/about-2.jpg"
                alt="About Us"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="our-values" className="py-20 bg-white">
        <div className="container mx-auto text-center fade-in-section">
          <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { title: "Health", description: "Prioritizing your well-being." },
              { title: "Quality", description: "Delivering the finest." },
              {
                title: "Exclusivity",
                description: "Creating experiences tailored for you.",
              },
              { title: "Enthusiasm", description: "Passionately innovating." },
            ].map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center fade-in-card"
                data-aos="zoom-in"
              >
                <div className="bg-yellow-100 rounded-full p-6 mb-4 shadow-md">
                  <img
                    src={`assets/about-images/healthy.png?${value.title.toLowerCase()}`}
                    alt={`${value.title} Icon`}
                    className="w-40 h-40"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story, Mission, Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Our Journey</h2>
            <p className="text-gray-600 mt-4">
              Discover the essence of Peros through our story, mission, and
              vision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {["Our Story", "Our Mission", "Our Vision"].map((section, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md fade-in-card"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-semibold mb-4">{section}</h3>
                <img
                  src={`assets/about-images/about-2.jpg?${section
                    .toLowerCase()
                    .replace(" ", ",")}`}
                  alt={section}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600">
                  {`Learn more about ${section.toLowerCase()}.`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
