import projects from "../Templates/projects.json";
import CarouselKunde from "./CarouselKunde";



const OverviewKunden = ({ title }: { title: string }) => {

  const project = projects.find((project) => project.title === title);

  return ( 
    <section className="py-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 motion-preset-expand ">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">HEY!</h2>
          <p className="text-lg text-brand-primary">
            Das ist {title}!
          </p>
        </div>
        <div className="flex center justify-center grid-cols-1  gap-8 motion-preset-pop">
          {/* Überprüfen, ob das Projekt gefunden wurde */}
          {project ? (
            <div className="group relative max-w-md overflow-hidden rounded-xl bg-[#121620] shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <p className="text-sm text-brand-primary mb-2">{project.category}</p>
                <p className="mt-2 text-text-tertiary">{project.desc}</p>
              </div>

              <img
                  src={project.image}
                  alt={project.image.toString()}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              
            
            </div>
          ) : (
            <p className="text-red-500">Projekt nicht gefunden!</p>
          )}
        </div>
      </div>


    </section>
  );
};

export default OverviewKunden;