"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-blue-900 border-b border-blue-950/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/logo_white.png"
                alt="logo"
                height={50}
                width={100}
                style={{ height: "auto", width: "auto" }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center space-x-4">
            {[
              { href: "/vision", label: "วิสัยทัศน์" },
              { href: "/ourservices", label: "บริการ" },
              { href: "/project", label: "ผลงาน" },
              { href: "/contact", label: "ติดต่อ" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-orange-500 hover:bg-white/10 px-4 py-2 rounded-md text-base font-medium transition duration-200 relative group"
              >
                <span className="z-10 relative">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60 transition"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                // Close icon
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 bg-blue-900 shadow-lg z-50 ${
          mobileOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        } rounded-b-xl`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col items-center gap-2 px-4 pt-3 pb-6">
          {[
            { href: "/", label: "หน้าแรก" },
            { href: "/vision", label: "วิสัยทัศน์" },
            { href: "/ourservices", label: "บริการ" },
            { href: "/project", label: "ผลงาน" },
            { href: "/contact", label: "ติดต่อ" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-full text-center text-white/90 hover:bg-white/10 hover:text-orange-500 px-3 py-2 rounded-md text-lg font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 w-full text-center bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold px-4 py-2 rounded-lg transition shadow"
            onClick={() => setMobileOpen(false)}
          >
            ขอใบเสนอราคา
          </Link>
        </div>
      </div>
    </nav>
  );
}
