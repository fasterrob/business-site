"use client";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your server
    console.log({ name, email, phone, message });

    // Show success message
    setSubmitted(true);

    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  // Calculate main content height by subtracting fixed elements
  // Navbar (from layout.tsx) is typically 64px (or adjust to match your actual navbar height)
  const navbarHeight = 64; // adjust this value based on your actual navbar height
  
  return (
    <main className="h-[calc(100vh-64px)] flex flex-col bg-gray-900 text-white overflow-hidden">
      {/* Page Header */}
      <div className="bg-gray-900 border-b border-gray-800 py-1 md:py-2">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-2xl font-bold text-white">Contact Us</h1>
        </div>
      </div>

      {/* Quick Contact Bar */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto max-w-6xl px-4 py-1">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-4">
              <a
                href="tel:+6623456789"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 text-xs md:text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +66 2 345 6789
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/buildingservices"
                className="text-blue-400 hover:text-blue-300"
                title="Facebook"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://line.me/ti/p/@buildingservices"
                className="text-blue-400 hover:text-blue-300"
                title="Line"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .345-.281.63-.63.63h-2.386c-.345 0-.627-.285-.627-.63V10.5c0-.346.282-.631.63-.631l2.386-.006zm-7.378 4.773c.345 0 .63.28.63.63 0 .346-.285.63-.63.63H9.602c-.349 0-.632-.284-.632-.63V10.5c0-.346.283-.631.632-.631.346 0 .63.285.63.631v3.504h1.755zm3.754-4.773c.346 0 .63.285.63.631 0 .346-.284.63-.63.63h-1.755v4.141c0 .345-.282.63-.63.63-.345 0-.63-.285-.63-.63V10.5c0-.346.285-.631.63-.631h2.385zm-9.388-.414C2.465 2.84 8.03 0 12 0c3.97 0 9.535 2.84 9.535 8.949 0 4.95-4.388 9.051-9.535 9.051-1.106 0-2.165-.143-3.177-.419-.341-.082-.66-.159-.93-.232l-1.587.887c-.451.253-.962.326-1.395.172-.573-.195-.755-.682-.755-1.139v-2.488c-1.26-1.086-2.15-2.627-2.251-4.343 0-.024-.004-.048-.004-.072C1.89 9.787 1.9 9.197 1.9 8.949zm2.94 5.282z"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Content - Full Height */}
      <section className="flex-grow px-4 py-2 bg-gray-900 overflow-hidden">
        <div className="container mx-auto h-full max-w-5xl">
          <div className="bg-gray-800 rounded-lg shadow-lg h-full overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 h-full">
              {/* Left Sidebar - Contact Info */}
              <div className="bg-gray-900 p-3 md:p-4 overflow-auto">
                <h2 className="text-lg font-bold mb-3 text-white border-b border-gray-700 pb-1">
                  Contact Details
                </h2>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-gray-800 rounded-full p-1.5 mr-2">
                      <svg
                        className="h-3 w-3 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white">Phone</p>
                      <a
                        href="tel:+6623456789"
                        className="text-xs text-blue-400 hover:text-blue-300"
                      >
                        +66 2 345 6789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-800 rounded-full p-1.5 mr-2">
                      <svg
                        className="h-3 w-3 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white">Email</p>
                      <a
                        href="mailto:info@buildingservices.com"
                        className="text-xs text-blue-400 hover:text-blue-300"
                      >
                        info@buildingservices.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-800 rounded-full p-1.5 mr-2">
                      <svg
                        className="h-3 w-3 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white">Address</p>
                      <p className="text-xs text-gray-300">
                        123 Sukhumvit Road, Bangkok
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-800 rounded-full p-1.5 mr-2">
                      <svg
                        className="h-3 w-3 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white">Hours</p>
                      <p className="text-xs text-gray-300">M-F: 9AM-6PM | S: 9AM-1PM</p>
                    </div>
                  </div>
                </div>

                {/* Map - Small Version */}
                <div className="mt-3 h-[100px] md:h-[120px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5957299802857!2d100.55995031531878!3d13.737524890355506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee94a8c28a7%3A0xfc69e2df4ab3b3b4!2sSukhumvit%20Rd%2C%20Khlong%20Toei%2C%20Bangkok%2C%20Thailand!5e0!3m2!1sen!2sus!4v1622585347076!5m2!1sen!2sus"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* Right Content - Contact Form (Optimized Size) */}
              <div className="col-span-2 p-2 md:p-3 overflow-auto">
                <h2 className="text-base font-bold mb-2 text-white border-b border-gray-700 pb-1">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="h-full flex flex-col">
                  {submitted ? (
                    <div className="bg-green-900/30 border border-green-800 text-green-300 p-1.5 rounded mb-2 text-xs flex items-center">
                      <svg
                        className="w-3 h-3 mr-1 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Thanks! We'll respond soon.
                    </div>
                  ) : null}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                    <div>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-gray-700 border border-gray-600 text-white rounded block w-full p-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Your Name *"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-700 border border-gray-600 text-white rounded block w-full p-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Your Email *"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-gray-700 border border-gray-600 text-white rounded block w-full p-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Your Phone (optional)"
                    />
                  </div>

                  <div className="flex-grow mb-2">
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-gray-700 border border-gray-600 text-white rounded block w-full p-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 h-full min-h-[60px]"
                      placeholder="How can we help you? *"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors focus:outline-none self-start"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="py-2 px-4 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <div className="mb-1 md:mb-0">
              <p>© 2023 Building Services Co., Ltd. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400">
                Careers
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
