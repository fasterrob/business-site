"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 shadow-md">
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
              { href: "/vision", label: "Vision" },
              { href: "/ourservices", label: "Our Services" },
              { href: "/work", label: "Work" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:bg-gray-800 hover:text-blue-400 px-4 py-2 rounded-md text-base font-medium transition duration-200 relative group"
              >
                <span className="z-10 relative">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
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
        className={`md:hidden transition-all duration-300 bg-gray-900 shadow-lg z-50 ${
          mobileOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        } rounded-b-xl`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col items-center gap-2 px-4 pt-3 pb-6">
          {[
            { href: "/", label: "Home" },
            { href: "/vision", label: "Vision" },
            { href: "/ourservices", label: "Our Services" },
            { href: "/work", label: "Work" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-full text-center text-white hover:bg-gray-800 hover:text-blue-400 px-3 py-2 rounded-md text-lg font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 w-full text-center bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold px-4 py-2 rounded-lg transition shadow"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
