import React, { useState, useEffect } from "react";
import { portfolioData as data } from "../data";

const projects = [
  {
    title: "Koreal Mobile App",
    category: "Mobile Apps",
    isMobile: true,
    previewScreens: [
      "/assets/images/koreal-app/koreal-screen-1.jpeg",
      "/assets/images/koreal-app/koreal-screen-3.jpeg",
    ],
    image: "/assets/images/koreal-app/koreal-screen-1.jpeg",
    link: "https://github.com/colloceo",
    preview: "https://koreal.app",
    status: "Live App",
    technologies: ["Flutter", "Dart", "Google Maps", "REST API"],
    description:
      "Cross-platform mobile application for real estate and short-stay BnB property discovery in Kenya. Features interactive map search, dynamic filtering (price, amenities, bedrooms), instant booking flows, and host communication.",
    screenshots: [
      { src: "/assets/images/koreal-app/koreal-screen-1.jpeg", title: "Map & Nearby Property Discovery" },
      { src: "/assets/images/koreal-app/koreal-screen-2.jpeg", title: "Interactive Search & Map Pins" },
      { src: "/assets/images/koreal-app/koreal-screen-3.jpeg", title: "Property Details & Media Showcase" },
      { src: "/assets/images/koreal-app/koreal-screen-4.jpeg", title: "Booking Confirmation & Dates" },
      { src: "/assets/images/koreal-app/koreal-screen-5.jpeg", title: "Search Filters & Price Range" },
      { src: "/assets/images/koreal-app/koreal-screen-6.jpeg", title: "Short-Stay BnB & Amenities" },
      { src: "/assets/images/koreal-app/koreal-screen-7.jpeg", title: "User Profile & Saved Listings" },
      { src: "/assets/images/koreal-app/koreal-screen-8.jpeg", title: "Property Location & Neighborhood" },
      { src: "/assets/images/koreal-app/koreal-screen-9.jpeg", title: "Host Contact & Inquiries" },
      { src: "/assets/images/koreal-app/koreal-screen-10.jpeg", title: "Explore Categories & Highlights" },
      { src: "/assets/images/koreal-app/koreal-screen-11.jpeg", title: "Reviews & Verified Guest Ratings" },
      { src: "/assets/images/koreal-app/koreal-screen-12.jpeg", title: "Listing Management & Calendar" },
      { src: "/assets/images/koreal-app/koreal-screen-13.jpeg", title: "Instant Booking Summary" },
      { src: "/assets/images/koreal-app/koreal-screen-14.jpeg", title: "Mobile Navigation & Settings" },
    ],
  },
  {
    title: "Silica Mobile Apps (Client & Drive)",
    category: "Mobile Apps",
    isMobile: true,
    previewScreens: [
      "/assets/images/silica/screens/client/track-live.jpg",
      "/assets/images/silica/screens/drive/dashboard.jpg",
    ],
    image: "/assets/images/silica/screens/client/track-live.jpg",
    link: "https://github.com/colloceo",
    preview: "https://silica.ke",
    status: "Live Apps",
    technologies: ["Flutter", "Dart", "Live GPS", "WebSockets", "M-Pesa"],
    description:
      "Cross-platform mobile application suite powering Silica logistics: Silica Client (instant delivery quotes, doorstep package dispatch, live GPS driver tracking) and Silica Drive (turn-by-turn route dispatch, digital POD, and automated mobile money reconciliation).",
    screenshots: [
      { src: "/assets/images/silica/screens/client/track-live.jpg", title: "Silica Client: Live Route Tracking & Driver ETA" },
      { src: "/assets/images/silica/screens/drive/dashboard.jpg", title: "Silica Drive: Driver Active Route Dashboard" },
      { src: "/assets/images/silica/screens/client/new-delivery.jpg", title: "Silica Client: Instant Package Dispatch & Quote" },
      { src: "/assets/images/silica/screens/drive/job-offers.jpg", title: "Silica Drive: One-Tap Job Acceptance & Payouts" },
    ],
  },
  {
    title: "Shopit by Silica",
    category: "E-Commerce",
    isMobile: true,
    previewScreens: [
      "/assets/images/silica/screens/shopit/home.jpg",
      "/assets/images/silica/screens/shopit/product.jpg",
    ],
    image: "/assets/images/silica/screens/shopit/home.jpg",
    link: "https://github.com/colloceo",
    preview: "https://shopit.silica.ke/",
    status: "Deployed",
    technologies: ["Next.js", "React", "Tailwind CSS", "Mobile Commerce"],
    description:
      "Instant retail & e-commerce shopping platform powered by Silica. Transforms local supermarkets (like Tumaini Stores) and retail inventory into online deliverable storefronts with real-time driver proximity shipping, digital catalogs, and mobile payments.",
    screenshots: [
      { src: "/assets/images/silica/screens/shopit/home.jpg", title: "Shopit Storefront: Mobile Catalog & Categories" },
      { src: "/assets/images/silica/screens/shopit/product.jpg", title: "Shopit Product View & Cart Addition" },
      { src: "/assets/images/silica/screens/shopit/order-tracking.jpg", title: "Shopit Live Order Tracking & Dispatch" },
    ],
  },
  {
    title: "More Classifieds",
    category: "Web Platforms",
    isMobile: false,
    image: "/assets/images/morecoke.png",
    link: "https://github.com/colloceo",
    preview: "https://more.co.ke",
    status: "Deployed",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    description:
      "Kenya's digital marketplace connecting 13,000+ SMEs with buyers. Unified seller dashboards, product catalogues, direct customer messaging, and branch analytics.",
  },
  {
    title: "AuraMovies",
    category: "Web Platforms",
    isMobile: false,
    image: "/assets/images/auramovies.png",
    link: "https://github.com/colloceo",
    preview: "https://auramovies.top/",
    status: "Deployed",
    technologies: ["React", "TypeScript", "FastAPI", "Supabase"],
    description:
      "High-performance video streaming aggregator handling 17,800+ requests in a single day at 100% uptime with custom firewall rules, bot-protection logic, and zero ads.",
  },
  {
    title: "More Trade",
    category: "Web Platforms",
    isMobile: false,
    image: "/assets/images/trademore.png",
    link: "https://github.com/colloceo",
    preview: "https://trade.more.co.ke/",
    status: "Deployed",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    description:
      "Request for Quote (RFQ) B2B trade portal connecting verified wholesale suppliers and commercial buyers across Kenya.",
  },
  {
    title: "Silica Platform & Console",
    category: "Web Platforms",
    isMobile: false,
    image: "/assets/images/silica.png",
    link: "https://github.com/colloceo",
    preview: "https://silica.ke",
    status: "Deployed",
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    description:
      "Centralized logistics, local shopping, and fleet operations platform. Replaces fragmented GPS trackers and spreadsheets with live vehicle maps, automated dispatch, and financial ledger settlement.",
    screenshots: [
      { src: "/assets/images/silica/screens/console/dashboard.jpg", title: "Silica Console: Executive Dashboard & Metrics" },
      { src: "/assets/images/silica/screens/console/fleetops-map.jpg", title: "FleetOps: Live Map & Vehicle Dispatch" },
      { src: "/assets/images/silica/screens/console/orders-board.jpg", title: "Orders Board: Real-time Dispatch Flow" },
      { src: "/assets/images/silica/screens/console/ledger.jpg", title: "Ledger: Multi-currency Financial Settlement" },
    ],
  },
  {
    title: "Koreal Web",
    category: "Web Platforms",
    isMobile: false,
    image: "/assets/images/koreal.png",
    link: "https://github.com/colloceo",
    preview: "https://koreal.app",
    status: "Deployed",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    description:
      "Real estate and short-stay property discovery web platform in Kenya with interactive map search, BnB, rent, and buy listings.",
  },
  {
    title: "Locus Journal",
    category: "Web Platforms",
    isMobile: false,
    image: "/assets/images/locusjournal.png",
    link: "https://github.com/colloceo",
    preview: "https://locusjournal.com",
    status: "Deployed",
    technologies: ["React", "TypeScript", "Mapbox"],
    description:
      "A private map journal for capturing places, experiences, and the stories behind them with local-first privacy.",
  },
  {
    title: "News254",
    category: "Web Platforms",
    isMobile: false,
    image: "/assets/images/news254.png",
    link: "https://github.com/colloceo",
    preview: "https://news254ke.co.ke/",
    status: "Deployed",
    technologies: ["PHP", "MySQL", "JavaScript"],
    description:
      "Digital news and media platform delivering breaking news, politics, business, tech trends, and stories across Kenya.",
  },
  {
    title: "MiniDB",
    category: "Systems",
    isMobile: false,
    image: "/assets/images/react.png",
    link: "https://github.com/colloceo/MiniDB",
    preview: "https://github.com/colloceo/MiniDB",
    status: "Open Source",
    technologies: ["Python", "Flask", "RDBMS", "ACID"],
    description:
      "Custom RDBMS built from scratch with O(N) Hash Joins, ACID-compliant Atomic Writes, B-Tree Indexing concepts, and a Flask admin dashboard.",
  },
];

const CATEGORIES = ["All", "Mobile Apps", "Web Platforms", "E-Commerce", "Systems"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null); // { projectTitle, screenshots, index, isMobile }

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const openLightbox = (project, index = 0) => {
    if (project.screenshots && project.screenshots.length > 0) {
      setLightbox({
        projectTitle: project.title,
        screenshots: project.screenshots,
        index,
        isMobile: project.isMobile,
      });
    }
  };

  const closeLightbox = () => setLightbox(null);

  const prevImage = () => {
    if (!lightbox) return;
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.screenshots.length) % prev.screenshots.length,
    }));
  };

  const nextImage = () => {
    if (!lightbox) return;
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.screenshots.length,
    }));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightbox]);

  return (
    <section
      id="projects"
      className="py-8 md:py-12 border-t border-[#ffffff10] text-[var(--white)]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-6 md:mb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
            <div>
              <h2 className="text-sm md:text-lg text-[var(--sec)] mb-1 shiny-sec">
                Featured Portfolio
              </h2>
              <h3 className="text-3xl md:text-4xl font-medium">
                Selected Work &amp; Creations
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[var(--white-icon)] md:max-w-md md:text-right leading-relaxed">
              High-performance mobile apps, digital marketplaces, e-commerce storefronts, and full-stack systems.
            </p>
          </div>

          {/* Category Filter Pills (Full width, single clean row) */}
          <div className="flex items-center gap-2 overflow-x-auto py-1.5 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;
              if (count === 0) return null;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs sm:text-sm px-4 py-2 rounded-full transition duration-200 border whitespace-nowrap flex-shrink-0 ${
                    isActive
                      ? "border-[var(--sec)] bg-[#a476ff22] text-white font-medium shadow-sm"
                      : "border-[var(--white-icon-tr)] bg-[#1414149c] text-[var(--white-icon)] hover:text-white hover:border-[#ffffff30]"
                  }`}
                >
                  {cat}{" "}
                  <span className="opacity-60 text-[11px] ml-1">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-[#1414149c] border border-[var(--white-icon-tr)] hover:border-[#ffffff25] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-lg"
            >
              <div>
                {/* Visual Preview Container */}
                {project.isMobile && project.previewScreens ? (
                  /* ==========================================================
                     Mobile App Showcase: Sleek Dual Phone Mockups
                     ========================================================== */
                  <div
                    onClick={() => openLightbox(project, 0)}
                    className="relative h-60 sm:h-64 md:h-72 bg-gradient-to-b from-[#191628] via-[#111018] to-[#0a0a0e] p-4 flex items-center justify-center overflow-hidden border-b border-[var(--white-icon-tr)] cursor-pointer group/img select-none"
                  >
                    {/* Ambient Radial Glow */}
                    <div className="absolute w-48 h-48 rounded-full bg-purple-600/15 blur-3xl pointer-events-none"></div>

                    {/* Twin Floating Phones */}
                    <div className="flex items-center justify-center -space-x-5 sm:-space-x-6 transition-transform duration-300 group-hover/img:scale-105">
                      {/* Phone 1 */}
                      <div className="relative w-[114px] sm:w-[128px] md:w-[138px] aspect-[9/18.5] bg-black rounded-[1.2rem] sm:rounded-[1.4rem] p-1 shadow-2xl border-[2.5px] border-[#38334c] overflow-hidden -rotate-3 transform transition-transform duration-300 group-hover/img:-rotate-4 group-hover/img:-translate-x-1">
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-2 bg-black rounded-full z-10"></div>
                        <img
                          src={project.previewScreens[0]}
                          alt={`${project.title} Screen 1`}
                          className="w-full h-full object-cover object-top rounded-[0.95rem] sm:rounded-[1.1rem]"
                          loading="lazy"
                        />
                      </div>

                      {/* Phone 2 */}
                      <div className="relative w-[114px] sm:w-[128px] md:w-[138px] aspect-[9/18.5] bg-black rounded-[1.2rem] sm:rounded-[1.4rem] p-1 shadow-2xl border-[2.5px] border-[#38334c] overflow-hidden rotate-3 transform transition-transform duration-300 group-hover/img:rotate-4 group-hover/img:translate-x-1 z-10">
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-2 bg-black rounded-full z-10"></div>
                        <img
                          src={project.previewScreens[1]}
                          alt={`${project.title} Screen 2`}
                          className="w-full h-full object-cover object-top rounded-[0.95rem] sm:rounded-[1.1rem]"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Single Clean Badge in Top-Right */}
                    <div className="absolute top-3 right-3 pointer-events-none z-20">
                      <span className="text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-full bg-black/80 text-[#c4b5fd] border border-purple-500/30 backdrop-blur-md">
                        {project.category === "E-Commerce" ? "Mobile Store" : "Mobile App"}
                      </span>
                    </div>

                    {/* Hover Hint Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3 pointer-events-none z-20">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-black/85 text-white border border-white/20 backdrop-blur-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-4 text-[var(--sec)]"
                        >
                          <path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z" />
                        </svg>
                        View {project.screenshots.length} Screens
                      </span>
                    </div>
                  </div>
                ) : (
                  /* ==========================================================
                     Web Platform Showcase: Sleek Browser Window Mockup
                     ========================================================== */
                  <div className="relative overflow-hidden bg-[#0d0d12] border-b border-[var(--white-icon-tr)] group/img">
                    {/* Browser Chrome Header Dots */}
                    <div className="h-6 bg-[#16161c] border-b border-white/5 flex items-center px-3 gap-1.5">
                      <div className="size-2 rounded-full bg-[#ff5f56]/70"></div>
                      <div className="size-2 rounded-full bg-[#ffbd2e]/70"></div>
                      <div className="size-2 rounded-full bg-[#27c93f]/70"></div>
                      <div className="ml-2 h-2.5 w-24 sm:w-32 rounded-full bg-white/5"></div>
                    </div>

                    {project.screenshots ? (
                      <button
                        type="button"
                        onClick={() => openLightbox(project, 0)}
                        className="w-full text-left cursor-pointer block relative focus:outline-none"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-44 sm:h-48 md:h-56 object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-black/80 text-white border border-white/20 backdrop-blur-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-4 text-[var(--sec)]"
                            >
                              <path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z" />
                            </svg>
                            View {project.screenshots.length} Screens
                          </span>
                        </div>
                      </button>
                    ) : (
                      <a
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block focus:outline-none"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-44 sm:h-48 md:h-56 object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </a>
                    )}

                    {/* Single Clean Badge in Top-Right */}
                    <div className="absolute top-8 right-3 pointer-events-none z-20">
                      <span className="text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-full bg-black/75 text-[var(--sec)] border border-[var(--sec)]/30 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>
                  </div>
                )}

                {/* Card Body */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--white)] leading-tight">
                      {project.title}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--white-icon)] leading-relaxed mb-3 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-[#ffffff0c] text-[var(--white-icon)] border border-[#ffffff10]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 flex items-center justify-between gap-2 border-t border-[#ffffff0a] mt-auto">
                {project.screenshots ? (
                  <button
                    type="button"
                    onClick={() => openLightbox(project, 0)}
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--sec)] hover:text-white transition duration-200 py-1.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                    <span>Screenshots ({project.screenshots.length})</span>
                  </button>
                ) : (
                  <span className="text-xs text-[var(--white-icon)] opacity-60">
                    {project.category}
                  </span>
                )}

                <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    aria-label={`GitHub repo for ${project.title}`}
                    className="size-9 sm:size-10 flex justify-center items-center text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-1.5 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"
                    title="Source Code"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 sm:size-5"
                    >
                      <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z" />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.preview}
                    aria-label={`Live preview of ${project.title}`}
                    className="size-9 sm:size-10 flex justify-center items-center text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-1.5 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"
                    title="Live Preview"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 sm:size-5"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub link button at the bottom */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={data.socials.github}
          aria-label="GitHub"
          className="w-full flex items-center justify-center gap-2 mt-6 md:mt-8 text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-2.5 md:p-3 rounded-full bg-[#1414149c] hover:bg-[var(--white-icon-tr)] hover:scale-[1.01]"
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

      {/* Interactive Screenshot Lightbox Modal */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full h-[90vh] flex flex-col justify-between items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between text-white pb-3 border-b border-white/10 px-2">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white">
                  {lightbox.projectTitle}
                </h4>
                <p className="text-xs text-[var(--sec)]">
                  {lightbox.screenshots[lightbox.index].title || `Screen ${lightbox.index + 1}`}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-[var(--white-icon)] bg-white/10 px-2.5 py-1 rounded-full">
                  {lightbox.index + 1} / {lightbox.screenshots.length}
                </span>
                <button
                  onClick={closeLightbox}
                  aria-label="Close modal"
                  className="size-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Main Image Stage */}
            <div className="relative flex-1 w-full flex items-center justify-center p-2 sm:p-4 overflow-hidden">
              {/* Prev button */}
              {lightbox.screenshots.length > 1 && (
                <button
                  onClick={prevImage}
                  aria-label="Previous screenshot"
                  className="absolute left-2 sm:left-4 z-20 size-10 sm:size-12 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition backdrop-blur-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-6"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
              )}

              {/* Image Frame */}
              <div
                className={`max-h-full flex items-center justify-center ${
                  lightbox.isMobile
                    ? "h-full max-w-[340px] sm:max-w-[380px] p-2 bg-[#121212] rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
                    : "h-full max-w-full rounded-xl overflow-hidden border border-white/10"
                }`}
              >
                <img
                  src={lightbox.screenshots[lightbox.index].src}
                  alt={
                    lightbox.screenshots[lightbox.index].title ||
                    `${lightbox.projectTitle} screen ${lightbox.index + 1}`
                  }
                  className="max-h-full max-w-full object-contain rounded-2xl"
                />
              </div>

              {/* Next button */}
              {lightbox.screenshots.length > 1 && (
                <button
                  onClick={nextImage}
                  aria-label="Next screenshot"
                  className="absolute right-2 sm:right-4 z-20 size-10 sm:size-12 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition backdrop-blur-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-6"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              )}
            </div>

            {/* Thumbnail Bottom Navigation */}
            {lightbox.screenshots.length > 1 && (
              <div className="w-full flex items-center justify-center gap-2 overflow-x-auto py-2 px-4 max-w-full no-scrollbar">
                {lightbox.screenshots.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      setLightbox((prev) => ({ ...prev, index: idx }))
                    }
                    className={`relative flex-shrink-0 rounded-lg overflow-hidden border-2 transition ${
                      lightbox.index === idx
                        ? "border-[var(--sec)] scale-105"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={s.src}
                      alt={`Thumbnail ${idx + 1}`}
                      className="size-12 sm:size-14 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
