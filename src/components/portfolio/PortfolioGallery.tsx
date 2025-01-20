import { useState } from "react";

// Importiere deine Bilder
import imageCandyDealer from "../images/Projekte/CandyDealer/candydealerpage.jpg";
import imageAroGeruest from "../images/Projekte/AroGerüstbau/Aro-front.jpg";
import imageUpToDating from "../images/Projekte/AppUpToDating/homescreen.png";
import imageFindYourBalance from "../images/Projekte/JenFindYouBalance/jenfindyourbalance.png";
import imageKayaGeruestbau from "../images/Projekte/GerüstbauKaya/mockupkaya.png";
import imageUnderCoverShishaBingen from "../images/Projekte/UndercoverShishaBingen/undercover-homepage.png";
import ImagesCentralV from "../images/Projekte/CentralV/homepage.png";
import imageMazoDesign from "../images/Projekte/MazoOffiziell/logo_small_icon_only.png";
import imagesMeenzerSportsbar from "../images/Projekte/DesignSportsbar/sportsbarkarte.png";
import imagesTomBuchCover from "../images/Projekte/BuchTom/BuchTomMockup.png";
import imagesProjektmanagementCover from "../images/Projekte/BuchProjektmanagementBasis/Mockup1.png";
import imagesAtesReinigung from "../images/Projekte/AtesReinigung/logo.png";
import { useNavigate } from "react-router-dom";

// Definiere ein Interface für ein Projekt


// Projekte
const projects = [
  {
    id: 1,
    category: "Online-Shops",
    desc: "Wir begleiteten das gesamte Projekt Candy-Dealer, von der Designentwicklung bis zum fertigen Online-Shop mit einem Konfigurator-System für individuelle Süßigkeiten-Tüten.",
    title: "Candy-Dealer.EU",
    image: imageCandyDealer,
  },
  {
    id: 2,
    category: "Webentwicklung",
    desc: "Das Projekt wurde gemeinsam mit dem Kunden entwickelt. Von der Logo-Gestaltung bis zur finalen Website war uns ein schlichtes und effektives Design wichtig, ganz nach den Wünschen des Kunden.",
    title: "Aro-Gerüstbau",
    image: imageAroGeruest,
    image2: "",
    image3: "",
  },
  {
    id: 3,
    category: "Apps",
    desc: "UpToDating ist ein Universitätsprojekt von drei Studierenden. Die App, noch in der Testphase, wurde mit dem Flutter Framework entwickelt. Design und Konzeption entstanden in enger Zusammenarbeit mit dem Team.",
    title: "UpToDating",
    image: imageUpToDating,
    image2: "",
    image3: "",
  },
  {
    id: 4,
    category: "Webentwicklung",
    desc: "Eine simple, informative Website, die alle wichtigen Informationen auf einen Blick zeigt – entwickelt, um Menschen zu motivieren, wieder fit zu werden.",
    title: "Jen-FindYourBalance",
    image: imageFindYourBalance,
    image2: "",
    image3: "",
  },
  {
    id: 5,
    category: "Webentwicklung",
    desc: "Ein umfassendes Projekt zur Überarbeitung des Internetauftritts unseres Kunden. Dazu gehörten die Integration digitaler Rechnungen und die Entwicklung einer Cloud-Lösung zur internen Datenverwaltung und Kommunikation.",
    title: "Gerüstbau-Kaya",
    image: imageKayaGeruestbau,
    image2: "",
    image3: "",
  },
  {
    id: 6,
    category: "Webentwicklung",
    desc: "Für UnderCover Bingen haben wir eine digitale Speisekarte entwickelt. Mit einem Moderator-Login kann der Betreiber Inhalte und Preise selbstständig aktualisieren. Das Projekt startete in React und wurde später in WordPress übertragen.",
    title: "UnderCover-Bingen",
    image: imageUnderCoverShishaBingen,
    image2: "", 
    image3: "",
  },
  {
    id: 7,
    category: "Webentwicklung",
    desc: "In Zusammenarbeit mit dem CentralV-Team entstand eine Community-Website mit Datenbankanbindung, die Nutzern die Erstellung von Profilen ermöglichte. Zusätzlich entwickelten wir ein Logo, ein Ticketsystem und ein Dashboard als Webanwendung.",
    title: "CentralV",
    image: ImagesCentralV,
    image2: "",
    image3: "",
  },
  {
    id: 8,
    category: "Designen",
    desc: "Entwicklung eines modernen und ansprechenden Logos für das Unternehmen Mazo.",
    title: "Mazo.",
    image: imageMazoDesign,
    image2: "",
    image3: "",
  },
  {
    id: 9,
    category: "Designen",
    desc: "Gestaltung einer Speisekarte für eine Sportbar in Mainz sowie eine Shishabar in Mainz-Kastel.",
    title: "Meenzer Sportsbar",
    image: imagesMeenzerSportsbar,
    image2: "",
    image3: "",
  },
  {
    id: 10,
    category: "Designen",
    desc: "Entwicklung eines Buchcovers in Kombination mit künstlicher Intelligenz – ein innovatives Projekt für unseren Kunden.",
    title: "Buch-Cover-Tom",
    image: imagesTomBuchCover,
    image2: "",
    image3: "",
  },
  {
    id: 11,
    category: "Designen",
    desc: "Ein modernes und ansprechendes Cover für ein Projektmanagement-Buch, entwickelt in enger Zusammenarbeit mit der Autorin.",
    title: "Projektmanagement-Cover",
    image: imagesProjektmanagementCover,
    image2: "",
    image3: "",
  },
  {
    id: 12,
    category: "Designen",
    desc: "Minimalistisches und modernes Logo-Design für die Ates Reinigung, perfekt abgestimmt auf die Unternehmenswerte.",
    title: "Ates-Reinigung-Logo",
    image: imagesAtesReinigung,
    image2: "",
    image3: "",
  },
];

const categories = ["Alle", "Webentwicklung", "Online-Shops", "Apps", "Designen"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Alle");
  const navigate = useNavigate(); // useNavigate Hook initialisieren




  const filteredProjects =
    selectedCategory === "Alle"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full font-semibold ${selectedCategory === category
              ? "bg-brand-primary text-black"
              : "bg-gray-200 hover:bg-brand-primary text-black focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
              }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => navigate(`/portfolio/kunde/${project.title}`)} // Navigiere zu /portfolio/kunde/xyz
            >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <h3 className="text-white text-lg font-bold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
