import React from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    title: 'Fitness Tracking App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    title: 'Cloud Infrastructure',
    category: 'IT Solutions',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=600',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Unsere Leistung</h2>
          <p className="mt-4 text-lg text-gray-600">
            Showcasing our latest projects and success stories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-indigo-600 mb-2">{project.category}</p>
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;