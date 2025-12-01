"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";

const LoadingScreen = dynamic(() => import("./components/LoadingScreen"), {
  ssr: false,
});

// Define our background images
const BACKGROUND_IMAGES = [
  "/images/background/1.avif", // Background 1
  "/images/background/2.avif", // Background 2
  "/images/background/3.avif", // Background 3
  "/images/background/4.avif", // Background 4
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Preload images and handle loading state
  useEffect(() => {
    let loadedImages = 0;
    const totalImages = BACKGROUND_IMAGES.length;
    
    // Create an array to preload all images
    const imagePromises = BACKGROUND_IMAGES.map((src) => {
      return new Promise<void>((resolve) => {
        const img = document.createElement('img');
        img.src = src;
        img.onload = () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            // Short timeout for a smoother transition
            setTimeout(() => {
              setIsLoading(false);
            }, 1000); // Longer timeout to see the Three.js animation
          }
          resolve();
        };
        img.onerror = () => {
          loadedImages++;
          console.error(`Failed to load image: ${src}`);
          resolve();
        };
      });
    });
    
    Promise.all(imagePromises).then(() => {
      console.log("All images preloaded");
    });
    
    return () => {
      // Cleanup if component unmounts during loading
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Advanced Three.js Loading Screen */}
      <LoadingScreen isLoading={isLoading} />
      
      {/* Hero Section with Background Image */}
      <HeroSection images={BACKGROUND_IMAGES} />

      {/* Services Section */}
      <ServicesSection />
    </div>
  );
}
