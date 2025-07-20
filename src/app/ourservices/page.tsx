"use client";
import Image from 'next/image';

export default function OurServices() {
  // Services data
  const services = [
    {
      id: 1,
      title: "Residential Construction",
      description: "High-quality construction services for homes of all sizes, from cozy cottages to luxury estates.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      features: [
        "Custom home design and construction",
        "Renovations and additions",
        "Kitchen and bathroom remodels",
        "Energy-efficient upgrades",
        "Interior and exterior finishing"
      ]
    },
    {
      id: 2,
      title: "Commercial Construction",
      description: "End-to-end commercial construction services to bring your business vision to life.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        "Office buildings and retail spaces",
        "Industrial facilities and warehouses",
        "Restaurants and hospitality venues",
        "Healthcare facilities",
        "Educational institutions"
      ]
    },
    {
      id: 3,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our comprehensive renovation and remodeling services.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      features: [
        "Complete interior renovations",
        "Historical building restoration",
        "Commercial space remodeling",
        "Structural upgrades and repairs",
        "Space optimization and reconfiguration"
      ]
    },
    {
      id: 4,
      title: "Architectural Design",
      description: "Expert architectural design services to create functional and aesthetically pleasing spaces.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      features: [
        "Custom architectural designs",
        "3D modeling and visualization",
        "Sustainable and eco-friendly design",
        "Building code compliance",
        "Collaborative design process"
      ]
    },
    {
      id: 5,
      title: "Project Management",
      description: "Comprehensive project management services to ensure your project is delivered on time and within budget.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      features: [
        "Full-cycle project management",
        "Budget planning and control",
        "Schedule development and tracking",
        "Risk assessment and mitigation",
        "Quality assurance and control"
      ]
    },
    {
      id: 6,
      title: "Sustainable Building",
      description: "Environmentally conscious construction practices for a greener, more sustainable future.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        "LEED certification assistance",
        "Energy-efficient systems",
        "Sustainable material sourcing",
        "Solar and renewable energy integration",
        "Water conservation systems"
      ]
    }
  ];

  // Process types with benefits
  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We start by understanding your vision, requirements, and budget to create a solid foundation for your project."
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "Our architects and designers develop comprehensive plans and 3D visualizations for your approval."
    },
    {
      number: "03",
      title: "Permitting & Preparation",
      description: "We handle all necessary permits and prepare the site for construction to ensure smooth progress."
    },
    {
      number: "04",
      title: "Construction",
      description: "Our skilled craftsmen bring your project to life with attention to detail and quality workmanship."
    },
    {
      number: "05",
      title: "Quality Assurance",
      description: "Rigorous inspections throughout the process ensure everything meets our high standards."
    },
    {
      number: "06",
      title: "Project Completion",
      description: "Final walkthrough, documentation, and handover of your beautifully completed project."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-black flex items-center">
        <div className="absolute inset-0 overflow-hidden z-0">
          <Image 
            src="/images/background/3.avif" 
            alt="Services Banner"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-xl text-white/80">
              Comprehensive building and construction services tailored to your specific needs and vision.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive range of services covers all aspects of building and construction, ensuring a seamless experience from concept to completion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-blue-500/20 hover:-translate-y-1 hover:shadow-xl">
                <div className="p-8">
                  <div className="text-blue-400 mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a structured approach to ensure your project is delivered efficiently and to the highest standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl relative">
                <span className="text-5xl font-bold text-blue-500/20 absolute top-4 right-4">{step.number}</span>
                <h3 className="text-xl font-bold mb-3 mt-6">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it – hear from some of our satisfied clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "The team's attention to detail and commitment to quality was evident throughout our office building project. They met deadlines, stayed within budget, and delivered an exceptional result."
              </p>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-gray-400 text-sm">CEO, Tech Innovations Inc.</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "From design to completion, our home renovation exceeded all expectations. The team was professional, communicative, and truly brought our vision to life."
              </p>
              <div>
                <p className="font-semibold">Michael Chang</p>
                <p className="text-gray-400 text-sm">Homeowner</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project needs and how we can bring your vision to life.
          </p>
          <button className="px-8 py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-colors">
            Contact Us Today
          </button>
        </div>
      </section>
    </main>
  );
}
