import { useState } from "react";

import imageCandyDealer from "../images/Projekte/CandyDealer/Candy-frontJPG.jpg";
import imageAroGeruest from "../images/Projekte/AroGerüstbau/Aro-front.jpg";

const projects = [
  { id: 1, category: "Online-Shops", title: "Candy-Dealer.EU", image: imageCandyDealer },
  { id: 2, category: "Webentwicklung", title: "Aro Gerüstbau", image: imageAroGeruest },
  { id: 3, category: "Apps", title: "UpToDating", image: "/images/app1.jpg" },
  { id: 4, category: "Designen", title: "Logo Design", image: "/images/design1.jpg" },
  { id: 5, category: "Webentwicklung", title: "Blog Website", image: "/images/portfolio2.jpg" },
  { id: 6, category: "Online-Shops", title: "WooCommerce Store", image: "/images/shop2.jpg" },
  { id: 7, category: "Apps", title: "Fitness App", image: "/images/app2.jpg" },
  { id: 8, category: "Designen", title: "Brand Identity", image: "/images/design2.jpg" },
];

const categories = ["Alle", "Webentwicklung", "Online-Shops", "Apps", "Designen"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const filteredProjects =
    selectedCategory === "Alle"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Responsive Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full font-semibold ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
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
