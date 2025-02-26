"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [isExiting, setIsExiting] = useState(false);
  const text = "Survival Of Fittest";

  useEffect(() => {
    // Trigger exit animation after 3 seconds
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-transform duration-1000 ${
        isExiting ? "translate-y-[-100vh]" : ""
      }`}
      style={{ willChange: "transform" }}
    >
      {/* Letter-by-letter container */}
      <div className="inline-flex">
        {text.split("").map((char, index) => {
          // Insert a gap for spaces
          if (char === " ") {
            return (
              <span key={index} className="inline-block" style={{ width: "1rem" }} />
            );
          }

          // Animate letters
          return (
            <span
              key={index}
              className="text-white text-2xl md:text-4xl font-semibold animate-letter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes fadeInLetter {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-letter {
          opacity: 0;
          animation: fadeInLetter 0.5s forwards;
        }
      `}</style>
    </div>
  );
}
