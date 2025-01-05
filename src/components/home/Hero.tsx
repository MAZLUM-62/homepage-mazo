import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Rocket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-bg-primary">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, ${
              scrollY > 0 ? '#00A3FF' : '#bc1818'
            } 0%, transparent 50%)`,
            transform: `scale(${1 + scrollY * 0.001})`,
          }}
        />
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"
            style={{
              left: `${30 + i * 20}%`,
              top: `${20 + i * 15}%`,
              transform: `translate(${scrollY * (0.1 + i * 0.05)}px, ${
                scrollY * (0.05 + i * 0.02)
              }px)`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
            <Sparkles className="w-6 h-6 text-brand-secondary" />
            <span className="text-brand-secondary font-medium">Innovativ. Kreativ. Digital.</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Ihre Vision,{' '}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Unsere Innovation
            </span>
          </h1>
          
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
            Wir entwickeln maßgeschneiderte digitale Lösungen, die Ihr Unternehmen 
            in die Zukunft führen. Von der Idee bis zur Umsetzung - wir sind Ihr Partner 
            für die digitale Transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/contact"
              className="btn btn-primary group"
            >
              Projekt Anfrage
              <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="btn btn-secondary group"
            >
              Portfolio entdecken
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Tech stack indicators */}
          <div className="mt-12 flex items-center justify-center lg:justify-start space-x-6 text-text-tertiary">
            <Code className="w-5 h-5" />
            <span>Bingen am Rhein</span>
            <span>•</span>
            <span>Apps, Web - IT Solutions</span>
            <span>•</span>
            <span>Modern</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;