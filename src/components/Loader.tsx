"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [isExiting, setIsExiting] = useState(false);
  const text = "Survival Of Fittest";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2200); // Matches text animation duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-1000 ease-in-out"
      style={{
        clipPath: isExiting ? "inset(0 0 100% 0)" : "inset(0 0 0 0)", // Changed clip-path values
      }}
    >
      <div className="inline-flex">
        {text.split("").map((char, index) => {
          if (char === " ") {
            return (
              <span key={index} className="inline-block" style={{ width: "1rem" }} />
            );
          }
          return (
            <span
              key={index}
              className={`text-white text-2xl md:text-4xl font-semibold ${
                isExiting ? "opacity-0" : "animate-letter"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          );
        })}
      </div>
      
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
          animation: fadeInLetter 0.5s forwards;
        }
      `}</style>
    </div>
  );
}