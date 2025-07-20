"use client";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => (
  <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-blue-500/20 hover:shadow-lg transition-all">
    <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default function ServicesSection() {
  const services = [
    {
      title: "Residential Projects",
      description: "Building quality homes with attention to detail and personalized design solutions.",
    },
    {
      title: "Commercial Construction",
      description: "Creating functional spaces for businesses with modern architecture and sustainable solutions.",
    },
    {
      title: "Renovations",
      description: "Transforming existing structures with innovative designs and quality craftsmanship.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Our Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
