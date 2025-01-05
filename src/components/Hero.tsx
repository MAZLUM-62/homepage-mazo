import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transforming Ideas into
            <span className="text-indigo-600"> Digital Reality</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            We create innovative digital solutions that help businesses thrive in the modern world.
            From mobile apps to enterprise IT solutions, we're your partner in digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;