
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
 


  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(188, 24, 24, 0.09) 0%, rgba(0, 163, 255, 0.5) 100%)`,
          }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
            <Sparkles className="w-6 h-6 text-brand-primary" />
            <span className="text font-medium">Innovativ. Kreativ. Digital.</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Ihre Vision,{' '}
            <span className="bg-gradient-to-r from-[#4B91D9] to-[#0b9881] bg-clip-text text-transparent">
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
              to="/kontakt"
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
