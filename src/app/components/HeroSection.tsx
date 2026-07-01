"use client";
import Link from "next/link";
import HeroHouseCanvas from "./HeroHouseCanvas";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-blue-950">
      <HeroHouseCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/85 via-blue-950/45 to-slate-50/70" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 drop-shadow-lg">
          สร้างคุณภาพ สร้างความมั่นใจ
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl mb-8 drop-shadow-md">
          บริการก่อสร้างครบวงจร วางแผน-ออกแบบ-ก่อสร้าง ด้วยทีมงานมืออาชีพ มาตรฐานงานคุณภาพ
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/ourservices" className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors">
            บริการของเรา
          </Link>
          <Link href="/contact" className="px-8 py-3 bg-transparent border-2 border-white/70 hover:border-white hover:bg-white/10 text-white font-medium rounded-lg transition-colors">
            ติดต่อเรา
          </Link>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
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
