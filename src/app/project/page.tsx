"use client";
import { useState } from 'react';
import Image from 'next/image';

const COMPLETED_PROJECTS = [
  {
    id: 1,
    title: "Modern Office Building",
    location: "Bangkok, Thailand",
    year: "2024",
    description: "A 12-story commercial building with modern design elements and energy-efficient features.",
    image: "/images/background/1.avif",
    category: "Commercial",
    features: ["LEED Certified", "Smart Building Technology", "Eco-friendly Materials"],
  },
  {
    id: 2,
    title: "Luxury Condominium Complex",
    location: "Phuket, Thailand",
    year: "2023",
    description: "Premium residential complex featuring 120 units with oceanfront views and world-class amenities.",
    image: "/images/background/2.avif",
    category: "Residential",
    features: ["Infinity Pool", "Smart Home Integration", "24/7 Security"],
  },
  {
    id: 3,
    title: "Shopping Mall Renovation",
    location: "Chiang Mai, Thailand",
    year: "2024",
    description: "Complete renovation and modernization of a 20-year-old shopping mall, improving accessibility and energy efficiency.",
    image: "/images/background/3.avif",
    category: "Renovation",
    features: ["Solar Panels", "Improved Traffic Flow", "Modern Food Court"],
  },
  {
    id: 4,
    title: "Hotel & Resort",
    location: "Koh Samui, Thailand",
    year: "2022",
    description: "Luxury beach resort featuring 45 private villas, 3 restaurants, and a world-class spa.",
    image: "/images/background/4.avif",
    category: "Hospitality",
    features: ["Sustainable Design", "Private Beach Access", "Rainwater Harvesting"],
  },
];

const CATEGORIES = ["All", "Commercial", "Residential", "Renovation", "Hospitality"];

export default function Project() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof COMPLETED_PROJECTS[0] | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? COMPLETED_PROJECTS
      : COMPLETED_PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <main className="min-h-screen bg-gray-900 pt-16">
      <section className="relative h-[32vh] bg-black flex items-center">
        <div className="absolute inset-0 overflow-hidden z-0">
          <Image
            src="/images/background/3.avif"
            alt="Projects Banner"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Projects</h1>
            <p className="text-lg text-white/70">Selected work across sectors and locations.</p>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10 text-white">Portfolio</h2>

          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  activeCategory === category
                    ? "bg-neutral-800 border-neutral-700 text-white"
                    : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-750"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-850 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-800 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-56">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <span className="bg-neutral-900 text-neutral-300 text-xs font-medium px-2.5 py-0.5 rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1 mb-3">
                    {project.location} | {project.year}
                  </p>
                  <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  <button className="text-neutral-200 font-medium hover:text-white">View Details →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 shadow-xl">
            <div className="relative h-80">
              <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
              <button
                className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black/80"
                onClick={() => setSelectedProject(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold text-white">{selectedProject.title}</h2>
                <span className="bg-neutral-900 text-neutral-300 text-sm font-medium px-2.5 py-0.5 rounded">
                  {selectedProject.category}
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                {selectedProject.location} | {selectedProject.year}
              </p>
              <p className="text-gray-300 mb-6">{selectedProject.description}</p>
              <h3 className="font-semibold text-lg mb-2 text-white">Key Features</h3>
              <ul className="list-disc pl-5 mb-6">
                {selectedProject.features.map((feature, i) => (
                  <li key={i} className="text-gray-300">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex justify-end mt-4">
                <button className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-white" onClick={() => setSelectedProject(null)}>
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
