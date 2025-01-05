import React from 'react';
import { Smartphone, Globe, Server } from 'lucide-react';

const services = [
  {
    icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
  },
  {
    icon: <Globe className="h-8 w-8 text-indigo-600" />,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
  },
  {
    icon: <Server className="h-8 w-8 text-indigo-600" />,
    title: 'IT Solutions',
    description: 'Custom enterprise solutions, cloud services, and IT infrastructure optimization.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Unsere Leistungen</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;