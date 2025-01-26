"use client"

import React, { useState, useEffect, useRef } from "react";

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null); // Create a ref for the footer

  // Handle footer visibility detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const footer = footerRef.current; // Use the ref to access the footer element
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setIsFooterVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check for footer visibility
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative mt-[6vh]">
      {/* Footer Content */}
      <footer
        id="footer"
        ref={footerRef}
        className="footer bg-white text-black shadow-xl py-16 font-semibold relative z-10"
        style={{
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", // Custom shadow for better visibility
          position: "relative",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid layout for content */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo */}
            <div className="text-left">
              <img
                src="/assets/logo/logo.png"
                alt="Peros Logo"
                width={190}
                height={150}
                className="mb-4"
              />
            </div>

            {/* About Us */}
            <div className="text-left">
              <h4 className="text-xl font-bold font-serif mb-4">About Us</h4>
              <p className="text-gray-400">
                Peros has been making the quality peanut butter since 1805. We
                combine organic, natural, and quality ingredients.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-left">
              <h4 className="text-xl font-bold font-serif mb-4">Quick Links</h4>
              {["Home", "About", "Products", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-black mb-2"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="text-left">
              <h4 className="text-xl font-bold font-serif mb-4">Contact</h4>
              <p className="text-gray-400">Email: contact@peros.com</p>
              <p className="text-gray-400">Phone: +123 456 7890</p>
              <p className="text-gray-400">
                Address: 123 Peros Street, Switzerland
              </p>
            </div>

            {/* Follow Us */}
            <div className="text-left">
              <h4 className="text-xl font-bold font-serif mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { name: "Instagram", url: "/assets/footer/instagram.png" },
                  { name: "Facebook", url: "/assets/footer/facebook.png" },
                  { name: "Twitter", url: "/assets/footer/twitter.png" },
                ].map((icon) => (
                  <a
                    key={icon.name}
                    href={`https://www.${icon.name.toLowerCase()}.com/peros`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="h-6 w-6 animate-bounce"
                      src={icon.url}
                      alt={icon.name}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer bottom text */}
          <div className="text-center mt-8 font-serif font-bold text-black text-sm">
            <p>&copy; 2025 Peros. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Parallax Section BELOW the Footer */}
      <div
        className={`parallax-section absolute top-[50%] left-0 w-full h-[100vh] z-[-1] bg-cover bg-center transition-opacity duration-500 ${
          isFooterVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: "url('/assets/p4.png')",
          backgroundAttachment: "fixed",
        }}
      ></div>
    </div>
  );
};

export default Footer;
