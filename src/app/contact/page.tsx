"use client";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setService("");
    setMessage("");
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <section className="px-4 pt-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://www.facebook.com/buildingservices"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors p-5 flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/15">
                  <svg
                    className="w-7 h-7 text-white"
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
                </span>
                <div>
                  <p className="text-2xl font-bold">Facebook</p>
                  <p className="text-sm text-blue-100">ติดต่อผ่าน Facebook</p>
                </div>
              </div>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white/90">
                ไปยังหน้าเพจ →
              </span>
            </a>

            <a
              href="https://line.me/ti/p/@buildingservices"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl bg-green-600 hover:bg-green-700 transition-colors p-5 flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/15">
                  <Image
                    src="/images/social/line.svg"
                    alt="LINE"
                    width={28}
                    height={28}
                  />
                </span>
                <div>
                  <p className="text-2xl font-bold">LINE</p>
                  <p className="text-sm text-green-100">ทักเราใน LINE</p>
                </div>
              </div>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white/90">
                เปิด LINE →
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Get in touch</h2>
              <div className="space-y-4">
                <a
                  href="tel:+6623456789"
                  className="flex items-center gap-3 text-blue-400 hover:text-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                  +66 2 345 6789
                </a>
                <a
                  href="mailto:info@buildingservices.com"
                  className="flex items-center gap-3 text-blue-400 hover:text-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                  info@buildingservices.com
                </a>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-400"
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
                  <div>
                    <p className="text-sm">123 Sukhumvit Road, Bangkok</p>
                    <p className="text-xs text-gray-400">
                      Mon-Fri 9:00-18:00 | Sat 9:00-13:00
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <a
                    href="https://www.facebook.com/buildingservices"
                    className="text-blue-400 hover:text-blue-300"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
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
                    aria-label="Line"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .345-.281.63-.63.63h-2.386c-.345 0-.627-.285-.627-.63V10.5c0-.346.282-.631.63-.631l2.386-.006zm-7.378 4.773c.345 0 .63.28.63.63 0 .346-.285.63-.63.63H9.602c-.349 0-.632-.284-.632-.63V10.5c0-.346.283-.631.632-.631.346 0 .63.285.63.631v3.504h1.755zm3.754-4.773c.346 0 .63.285.63.631 0 .346-.284.63-.63.63h-1.755v4.141c0 .345-.282.63-.63.63-.345 0-.63-.285-.63-.63V10.5c0-.346.285-.631.63-.631h2.385zm-9.388-.414C2.465 2.84 8.03 0 12 0c3.97 0 9.535 2.84 9.535 8.949 0 4.95-4.388 9.051-9.535 9.051-1.106 0-2.165-.143-3.177-.419-.341-.082-.66-.159-.93-.232l-1.587.887c-.451.253-.962.326-1.395.172-.573.195-.755.682-.755 1.139v-2.488c-1.26-1.086-2.15-2.627-2.251-4.343 0-.024-.004-.048-.004-.072C1.89 9.787 1.9 9.197 1.9 8.949zm2.94 5.282z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="md:col-span-2 bg-gray-800 rounded-xl p-6 shadow-lg">
                <h2 className="text-xl font-bold mb-4">Send a message</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  {submitted ? (
                    <div className="bg-green-900/30 border border-green-800 text-green-300 p-2 rounded text-sm flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-400"
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
                      We received your message.
                    </div>
                  ) : null}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-gray-700 border border-gray-600 text-white rounded w-full p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Your name *"
                      required
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-700 border border-gray-600 text-white rounded w-full p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Your email *"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-gray-700 border border-gray-600 text-white rounded w-full p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Phone"
                    />
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="bg-gray-700 border border-gray-600 text-white rounded w-full p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Company"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="bg-gray-700 border border-gray-600 text-white rounded w-full p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">
                        Residential construction
                      </option>
                      <option value="commercial">
                        Commercial construction
                      </option>
                      <option value="renovation">
                        Renovation and remodeling
                      </option>
                      <option value="design">Architectural design</option>
                      <option value="management">Project management</option>
                    </select>
                  </div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-gray-700 border border-gray-600 text-white rounded w-full p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 min-h-[120px]"
                    placeholder="Tell us about your project *"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-xl overflow-hidden bg-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5957299802857!2d100.55995031531878!3d13.737524890355506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee94a8c28a7%3A0xfc69e2df4ab3b3b4!2sSukhumvit%20Rd%2C%20Khlong%20Toei%2C%20Bangkok%2C%20Thailand!5e0!3m2!1sen!2us!4v1622585347076!5m2!1sen!2us"
              className="w-full h-[320px] border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
