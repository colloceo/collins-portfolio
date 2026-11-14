import React from "react";
import LikeButton from "./LikeButton";
import { portfolioData as data } from "../data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: data.socials.github,
      label: "GitHub",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 md:size-7"
        >
          <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
        </svg>
      ),
    },
    {
      href: data.socials.linkedin,
      label: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 md:size-7"
        >
          <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
        </svg>
      ),
    },
    {
      href: `mailto:${data.email}`,
      label: "Email",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="size-6 md:size-7"
        >
          <path
            fill="currentColor"
            d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64"
          />
        </svg>
      ),
    },
  ];

  const techStack = [
    {
      desc: "Built with",
      name: "React",
      icon: "/svg/react.svg",
      alt: "React Logo",
    },
    {
      desc: "Styled with",
      name: "TailwindCSS",
      icon: "/svg/tailwindcss.svg",
      alt: "TailwindCSS Logo",
    },
    {
      desc: "Deployed on",
      name: "Netlify",
      icon: "/svg/vercel.svg",
      alt: "Netlify Logo",
    },
  ];

  return (
    <footer className="w-full py-8 md:py-10 border-t border-[#ffffff10]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          <div className="flex flex-col lg:items-start items-center gap-4">
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center group"
                  aria-label={link.label}
                >
                  <div className="text-[var(--white-icon)] hover:text-[var(--white)] transition duration-300 ease-in-out">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
            <LikeButton />
          </div>

          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 gap-2.5 w-full max-w-xs py-1">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-center lg:justify-normal space-x-3"
                >
                  <span className="text-[var(--white-icon)] text-xs sm:text-sm">
                    {tech.desc}
                  </span>
                  <img
                    src={tech.icon}
                    alt={tech.alt}
                    className="h-4 w-4 sm:h-5 sm:w-5 object-contain filter brightness-0 invert opacity-50"
                    loading="lazy"
                  />
                  <span className="text-[var(--white-icon)] text-xs sm:text-sm">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <div className="w-full max-w-xs">
              <iframe
                title="Spotify Playlist"
                style={{ borderRadius: "12px", border: 0 }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
                className="w-full h-24 sm:h-36"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-[#ffffff10]">
          <p className="text-center text-xs sm:text-sm text-[var(--white-icon)]">
            <span className="block sm:inline">
              Copyright © {currentYear} {data.name}. All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
