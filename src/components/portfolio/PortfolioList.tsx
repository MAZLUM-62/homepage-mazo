
const projects = [
  {
    title: 'Webseite oder Online Shop',
    category: 'Web Development',
    description: 'Wir entwickeln moderne und responsiv webseiten und Online Shops.',
    image: 'https://images.unsplash.com/photo-1690192699379-fb68bb749eaa?q=80&w=1470?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    title: 'Mobile App Entwicklung',
    category: 'App Development',
    description: 'Wir entwickeln moderne und responsiv mobile Apps mit nur einer Codebasis für Webanwendungen, iOS, Android, MacOS und Windows.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    title: 'Hardware und Software Beratung',
    category: 'IT Solutions',
    description: 'Wir bieten professionelle Beratung und Support für Hardware und Software.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=600',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">Unser Portfolio</h2>
          <p className="mt-4 text-lg text-brand-primary">
          Vorstellung unserer neuesten Projekte und Erfolgsgeschichten
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-[#121620] shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 ">
                <img
                  src={project.image}
                  alt={project.title}
                  className= "object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-brand-primary mb-2">{project.category}</p>
                <h3 className="text-xl font-semibold text-secondary">{project.title}</h3>
                <p className="mt-2 text-text-tertiary">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;