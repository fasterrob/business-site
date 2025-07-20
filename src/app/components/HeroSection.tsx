"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  images: string[];
}

export default function HeroSection({ images }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Handle image rotation
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsZoomed(true); // Start zoomed in for each new image
    }, 7000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images]);

  // Handle zoom effect
  useEffect(() => {
    setIsZoomed(true);
    const timer = setTimeout(() => {
      setIsZoomed(false); // Zoom out over time
    }, 500);

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Images with Transitions */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== currentImageIndex}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <Image
              src={src}
              alt={`Background ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
              style={{
                transform: isZoomed ? "scale(1.1)" : "scale(1)",
                transition: "transform 7s ease-out",
              }}
            />
            {/* Overlay gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
          </div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 drop-shadow-lg">
          Building a Better Tomorrow
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl mb-8 drop-shadow-md">
          Quality construction services with dedication to excellence and innovation
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/ourservices" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
            Our Services
          </Link>
          <Link href="/contact" className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-lg transition-colors">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
