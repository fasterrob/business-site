"use client";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />
    </div>
  );
}
