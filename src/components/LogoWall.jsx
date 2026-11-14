import React from "react";

const technologies = [
  "astro",
  "vue",
  "react",
  "typeScript",
  "tailwindcss",
  "next",
  "nodejs",
  "HTML5",
  "CSS3",
  "javaScript",
  "git",
  "supabase",
  "mysql",
  "bash",
];

const LogoWall = () => {
  return (
    <div className="relative overflow-x-hidden py-4 md:py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-20"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-20"></div>

      <div className="flex animate-scroll w-max will-change-transform">
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex items-center gap-2 pr-8 sm:pr-12 md:pr-16 group transition-all duration-300"
            aria-hidden={index >= technologies.length ? "true" : "false"}
          >
            <img
              src={`/svg/${tech}.svg`}
              alt={tech}
              className="h-5 sm:h-6 md:h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-60"
              width="28"
              height="28"
              loading={index < technologies.length ? "eager" : "lazy"}
              decoding="async"
            />
            <span className="text-sm sm:text-base md:text-lg font-medium text-[var(--white-icon)] whitespace-nowrap">
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoWall;
