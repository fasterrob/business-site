"use client";
import { useState } from "react";
import Image from "next/image";

// Mock data for completed projects
const COMPLETED_PROJECTS = [
  {
    id: 1,
    title: "Modern Office Building",
    location: "Bangkok, Thailand",
    year: "2024",
    description:
      "A 12-story commercial building with modern design elements and energy-efficient features.",
    image: "/images/background/1.avif",
    category: "Commercial",
    features: [
      "LEED Certified",
      "Smart Building Technology",
      "Eco-friendly Materials",
    ],
  },
  {
    id: 2,
    title: "Luxury Condominium Complex",
    location: "Phuket, Thailand",
    year: "2023",
    description:
      "Premium residential complex featuring 120 units with oceanfront views and world-class amenities.",
    image: "/images/background/2.avif",
    category: "Residential",
    features: ["Infinity Pool", "Smart Home Integration", "24/7 Security"],
  },
  {
    id: 3,
    title: "Shopping Mall Renovation",
    location: "Chiang Mai, Thailand",
    year: "2024",
    description:
      "Complete renovation and modernization of a 20-year-old shopping mall, improving accessibility and energy efficiency.",
    image: "/images/background/3.avif",
    category: "Renovation",
    features: ["Solar Panels", "Improved Traffic Flow", "Modern Food Court"],
  },
  {
    id: 4,
    title: "Hotel & Resort",
    location: "Koh Samui, Thailand",
    year: "2022",
    description:
      "Luxury beach resort featuring 45 private villas, 3 restaurants, and a world-class spa.",
    image: "/images/background/4.avif",
    category: "Hospitality",
    features: [
      "Sustainable Design",
      "Private Beach Access",
      "Rainwater Harvesting",
    ],
  },
];

// Categories for filtering projects
const CATEGORIES = [
  "All",
  "Commercial",
  "Residential",
  "Renovation",
  "Hospitality",
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof COMPLETED_PROJECTS)[0] | null
  >(null);

  // Filter projects by category
  const filteredProjects =
    activeCategory === "All"
      ? COMPLETED_PROJECTS
      : COMPLETED_PROJECTS.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="min-h-screen bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-black flex items-center">
        <div className="absolute inset-0 overflow-hidden z-0">
          <Image
            src="/images/background/3.avif"
            alt="Work Banner"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Projects
            </h1>
            <p className="text-xl text-white/80">
              Explore our portfolio of completed projects across various sectors
              and locations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Completed Projects
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 border border-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/20 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {project.title}
                    </h3>
                    <span className="bg-blue-900 text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">
                    {project.location} | {project.year}
                  </p>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <button className="text-blue-400 font-medium hover:text-blue-300">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in working with us? Contact our team to discuss your
            project requirements.
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
            Contact Us
          </button>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-xl shadow-blue-500/10">
            <div className="relative h-80">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black/80"
                onClick={() => setSelectedProject(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h2>
                <span className="bg-blue-900 text-blue-300 text-sm font-semibold px-2.5 py-0.5 rounded">
                  {selectedProject.category}
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                {selectedProject.location} | {selectedProject.year}
              </p>
              <p className="text-gray-300 mb-6">
                {selectedProject.description}
              </p>

              <h3 className="font-semibold text-lg mb-2 text-white">
                Key Features:
              </h3>
              <ul className="list-disc pl-5 mb-6">
                {selectedProject.features.map((feature, i) => (
                  <li key={i} className="text-gray-300">
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
