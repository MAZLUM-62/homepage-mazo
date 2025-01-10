import React, { useState, useRef } from "react";
import { Smartphone, Globe, Server, Store, Cloudy} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Smartphone className="h-8 w-8 text-brand-primary" />,
    title: "Mobile Apps",
    description:
      "Wir entwickeln maßgeschneiderte, plattformübergreifende mobile Apps für iOS, Android, Web, macOS und Windows – alles mit einer einzigen Codebasis.",
    link: "/leistungen/mobile",
  },
  {
    icon: <Globe className="h-8 w-8 text-brand-primary" />,
    title: "Web Development",
    description:
      "Moderne und performante Webseiten, die überzeugen. Wir setzen auf zukunftssichere Technologien und Frameworks für optimale Ergebnisse.",
    link: "/leistungen/web",
  },
  {
    icon: <Store className="h-8 w-8 text-brand-primary" />,
    title: "Online Shops",
    description:
      "Professionelle E-Commerce-Lösungen für Ihren Erfolg. Wir nutzen Plattformen wie Shopify, WooCommerce und Magento für leistungsstarke Online Shops.",
    link: "/leistungen/web-shop",
  },
  {
    icon: <Server className="h-8 w-8 text-brand-primary" />,
    title: "IT Solutions",
    description:
      "Individuelle IT-Beratung und zuverlässiger Support – von Hardware über Software bis hin zur Infrastruktur.",
    link: "/leistungen/it-solutions",
  },
  {
    icon: <Cloudy className="h-8 w-8 text-brand-primary" />,
    title: "Cloud Solutions",
    description:
      "Smarte Cloud-Lösungen, die Ihr Unternehmen flexibel, effizient und sicher machen.",
    link: "/leistungen/cloud-solutions",
  },
];

const FeaturedServices = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Ref für jede Card
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLAnchorElement>,
    index: number
  ) => {
    if (cardRefs.current[index]) {
      // Mausposition relativ zur Card
      const cardBounds = cardRefs.current[index]!.getBoundingClientRect();
      const x = event.clientX - cardBounds.left;
      const y = event.clientY - cardBounds.top;
      
      setMousePosition({ x, y });
    }
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 motion-preset-expand">
          <h2 className="text-7xl font-bold  ">
            <span className="stroke-2 stroke-primary text-transparent">Unsere digitalen Lösungen</span>
            <br />
            <span className="text-text-white"> für Ihren Erfolg</span>
          </h2>
          
          <p className="mt-4 text-lg text-brand-primary font-semibold">
            Alles, was Sie für Ihre digitale Transformation brauchen – an einem
            Ort.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 motion-preset-pop">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="card group hover:border-brand-primary intersect:motion-preset-fade relative"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Glow Effekt */}
              {hoveredCard === index && (
                <div
                  className="absolute inset-0 rounded-lg pointer-events-none motion-preset-focus"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x + 25}px ${mousePosition.y +25}px, rgba(56, 165, 228, 0.42), transparent 80%)`,
                    transition: "background 0.2s ease",
                  }}
                ></div>
              )}

              <div
                ref={(el) => (cardRefs.current[index] = el)} // Setze den Ref für jede Karte
                className="relative z-10"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-brand-primary">
                  {service.title}
                </h3>
                <p className="text-text-secondary">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
