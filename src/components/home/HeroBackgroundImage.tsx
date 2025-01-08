import React from "react";

const HeroBackgroundImage: React.FC = () => {
  const icons = ["{ .. }", "[ ... ]", "{   }", "{ .... }"];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hintergrund Gradient */}
      <div
        className="absolute inset-0 opacity-70 blur-2xl"
        style={{
          backgroundImage: `linear-gradient(360deg, rgba(17, 173, 212, 0) 0%, rgba(53, 163, 226, 0.14) 100%)`,
        }}
      />

      {/* Animierte Icons */}
      <div className="absolute inset-0 blur-sm">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-white text-xl motion-preset-blur-right motion-duration-[5s] motion-delay-[0.5s]/blur"
            style={{
              margin: "10px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {icons[Math.floor(Math.random() * icons.length)]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBackgroundImage;
