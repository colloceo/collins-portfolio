import React from "react";
import { portfolioData as data } from "../data";

const projects = [
  {
    title: "More Classifieds",
    image: "/assets/images/morecoke.png",
    link: "https://github.com/colloceo",
    preview: "https://more.co.ke",
    status: "Deployed",
  },
  {
    title: "More Trade",
    image: "/assets/images/trademore.png",
    link: "https://github.com/colloceo",
    preview: "https://trade.more.co.ke/",
    status: "Deployed",
  },
  {
    title: "Koreal",
    image: "/assets/images/koreal.png",
    link: "https://github.com/colloceo",
    preview: "https://koreal.app",
    status: "Deployed",
  },
  {
    title: "Silica",
    image: "/assets/images/silica.png",
    link: "https://github.com/colloceo",
    preview: "https://silica.ke",
    status: "Deployed",
  },
  {
    title: "Locus Journal",
    image: "/assets/images/locusjournal.png",
    link: "https://github.com/colloceo",
    preview: "https://locusjournal.com",
    status: "Deployed",
  },
  {
    title: "News254",
    image: "/assets/images/news254.png",
    link: "https://github.com/colloceo",
    preview: "https://news254ke.co.ke/",
    status: "Deployed",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-8 md:py-12 border-t border-[#ffffff10] text-[var(--white)]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm md:text-lg text-[var(--sec)] mb-1 shiny-sec">
          My work
        </h2>
        <h3 className="text-3xl md:text-4xl font-medium mb-5 md:mb-8">
          Projects
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7">
          {projects.map((project) => (
            <div key={project.title} className="group">
              <a
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-2.5 md:mb-3 border border-[var(--white-icon-tr)] bg-[#1414149c]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-44 md:h-56 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </a>
              <div className="flex items-center justify-between gap-2 px-1 sm:px-2">
                <div className="min-w-0 flex-grow">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold truncate">
                    {project.title}
                  </h4>
                  <span className="block text-xs sm:text-sm text-[var(--white-icon)]">
                    {project.status}
                  </span>
                </div>
                <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    aria-label="GitHub"
                    className="size-10 sm:size-11 md:size-12 flex justify-center items-center text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-1 border-[var(--white-icon-tr)] p-2 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5 md:size-6"
                    >
                      <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z" />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.preview}
                    aria-label="Preview"
                    className="size-10 sm:size-11 md:size-12 flex justify-center items-center text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-1 border-[var(--white-icon-tr)] p-2 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5 md:size-6"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={data.socials.github}
          aria-label="GitHub"
          className="w-full flex items-center justify-center gap-2 mt-6 md:mt-8 text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-2.5 md:p-3 rounded-full bg-[#1414149c] hover:bg-[var(--white-icon-tr)] hover:scale-[1.02]"
        >
          <span className="text-sm md:text-base">More projects on</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5 md:size-6"
          >
            <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Projects;
