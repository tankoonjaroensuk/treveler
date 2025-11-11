"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Carousel() {
  const images = [
    "/Images/Banner/DSC_6538.jpg",
    "/Images/Banner/DSC_6897.jpg",
    "/Images/Banner/DSC_6954.jpg",
  ];

  const [current, setCurrent] = useState(0);

//Auto Silding every 3 m.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${idx + 1}`}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>

      {/* Prev / Next */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50"
        onClick={prevSlide}
      >
        ◀
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50"
        onClick={nextSlide}
      >
        ▶
      </button>
    </div>
  );
}
