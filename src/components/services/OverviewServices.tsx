import { Smartphone, Globe, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Smartphone className="h-8 w-8 text-brand-primary" />,
    title: 'Mobile Apps',
    description: 'Wir entwickeln moderne und responsiv mobile Apps mit nur einer Codebasis für Webanwendungen, iOS, Android, MacOS und Windows.',
    link: '/leistungen/mobile',
  },
  {
    icon: <Globe className="h-8 w-8 text-brand-primary" />,
    title: 'Web Development',
    description: 'Wir entwickeln moderne und responsiv webseiten und Online Shops.',
    link: '/leistungen/web',
  },
  {
    icon: <Server className="h-8 w-8 text-brand-primary" />,
    title: 'IT Solutions',
    description: 'Wir bieten professionelle Beratung und Support für Hardware und Software.',
    link: '/leistungen/it-solutions',
  },
  {
    icon: <Server className="h-8 w-8 text-brand-primary" />,
    title: 'Cloud Solutions',
    description: 'Wir bieten moderne Cloud Lösungen für Ihr Unternehmen.',
    link: '/leistungen/cloud-solutions',
  },
];

const FeaturedServices = () => {
  return (
    <section className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">Unsere Leistungen</h2>
          <p className="mt-4 text-lg text-text-secondary">
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="card group hover:border-brand-primary"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-brand-primary">
                {service.title}
              </h3>
              <p className="text-text-secondary">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;