"use client";
import Image from "next/image";
import Link from "next/link";

export default function Vision() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-black flex items-center">
        <div className="absolute inset-0 overflow-hidden z-0">
          <Image
            src="/images/background/2.avif"
            alt="Vision Banner"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              วิสัยทัศน์ของเรา
            </h1>
            <p className="text-xl text-white/80">
              สะท้อนความมุ่งมั่นของเราในการส่งมอบงานก่อสร้างคุณภาพ ผ่านคุณค่าและผลงานที่พิสูจน์ได้
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">วิสัยทัศน์</h2>
          <p className="text-lg text-slate-600 mb-8">
            เรามุ่งสู่การเป็นผู้นำด้านงานก่อสร้าง ด้วยมาตรฐานคุณภาพ นวัตกรรม และความยั่งยืนในทุกโครงการ
            เป้าหมายของเราคือเปลี่ยนพื้นที่ให้ใช้งานได้จริง สวยงาม และคงทนในระยะยาว
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
              <div className="text-orange-500 text-4xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Quality</h3>
              <p className="text-slate-600">
                We never compromise on quality, ensuring every detail meets our
                high standards.
              </p>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
              <div className="text-orange-500 text-4xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Innovation</h3>
              <p className="text-slate-600">
                We embrace new technologies and methods to deliver cutting-edge
                solutions.
              </p>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
              <div className="text-orange-500 text-4xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                Sustainability
              </h3>
              <p className="text-slate-600">
                We design with the environment in mind, creating sustainable
                structures for the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Section instead of Projects */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">ความสำเร็จของเรา</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-orange-500 text-4xl mb-4 font-bold">25+</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                Years of Experience
              </h3>
              <p className="text-slate-600">
                Delivering exceptional building services with expertise and
                precision.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-orange-500 text-4xl mb-4 font-bold">500+</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                Projects Completed
              </h3>
              <p className="text-slate-600">
                Successfully delivered projects across commercial and
                residential sectors.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-orange-500 text-4xl mb-4 font-bold">15</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                Industry Awards
              </h3>
              <p className="text-slate-600">
                Recognized for excellence in design, sustainability, and
                innovation.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-orange-500 text-4xl mb-4 font-bold">100%</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                Client Satisfaction
              </h3>
              <p className="text-slate-600">
                Our commitment to quality ensures happy clients and successful
                projects.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/project"
              className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
            >
              ดูผลงานโครงการ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional section could go here if needed */}

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            พร้อมเริ่มโครงการของคุณแล้วหรือยัง?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            ให้เราช่วยเปลี่ยนไอเดียของคุณให้เป็นผลงานจริง ด้วยทีมงานมืออาชีพและความใส่ใจในคุณภาพ
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              Contact Us
            </button>
            <Link
              href="/project"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
