
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Sparkles } from 'lucide-react';
import HeroBackgroundImage from './HeroBackgroundImage';

const Hero = () => {
 


  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
          <HeroBackgroundImage />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md ">
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
            <Sparkles className="w-6 h-6 text-brand-primary" />
            <span className="text font-medium motion-preset-typewriter-[28] motion-duration-[5s]"> Innovativ. Kreativ. Digital.</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ">
            Ihre Vision,{' '}
            <span className="bg-gradient-to-r from-[#4B91D9] to-[#0b9881] bg-clip-text text-transparent motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur">
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
              className="btn btn-primary group text-bg-primary"
            >
              Projekt Anfrage
              <Rocket className="text-bg-primary ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform motion-preset-pulse motion-duration-2000" />
            </Link>
            <Link
              to="/portfolio"
              className="btn btn-secondary"
            >
              Portfolio entdecken
              
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Tech stack indicators */}
          <div className="mt-12 flex items-center justify-center lg:justify-start space-x-6 text-text-tertiary motion-preset-shrink ">
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
