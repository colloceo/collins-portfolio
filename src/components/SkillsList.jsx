import React, { useState } from "react";

const CategoryIcons = {
  "Full-Stack Web & Backend": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-app-window-mac text-[var(--sec)] flex-shrink-0"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 8h.01" />
      <path d="M10 8h.01" />
      <path d="M14 8h.01" />
    </svg>
  ),
  "Mobile & Cross-Platform Apps": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-tablet-smartphone text-[var(--sec)] flex-shrink-0"
    >
      <rect width="10" height="14" x="3" y="8" rx="2" />
      <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
      <path d="M8 18h.01" />
    </svg>
  ),
  "Security, Mentorship & Systems": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-spline-pointer text-[var(--sec)] flex-shrink-0"
    >
      <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" />
      <path d="M5 17A12 12 0 0 1 17 5" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  const skills = {
    "Full-Stack Web & Backend": [
      "React & TypeScript platforms (Aura Movies, More Classifieds for 13,000+ Kenyan SMEs)",
      "Python/FastAPI services & high-concurrency APIs",
      "Laravel/MySQL backends (Digital Leap Africa LMS with gamification & certifications)",
    ],
    "Mobile & Cross-Platform Apps": [
      "Cross-platform mobile apps with Flutter for Android & iOS (Koreal Real Estate & Silica Delivery Suite: Client & Drive)",
      "Live GPS map tracking, dynamic route navigation & automated driver dispatch",
      "Mobile commerce & storefront platforms (Shopit) with real-time driver proximity shipping",
      "Mobile money (M-Pesa) integration & digital proof of delivery (POD)",
    ],
    "Security, Mentorship & Systems": [
      "Custom firewall rules & bot protection (17,800+ req/day at 100% uptime)",
      "Teaching PHP, Laravel, Web Dev & SEO through private tutoring",
      "NITA-certified electrical work: solar installation & industrial wiring",
    ],
  };

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left w-full lg:w-auto">
      <h3 className="text-[var(--white)] text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
        What I do?
      </h3>
      <ul className="space-y-2.5 md:space-y-3 text-base">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="lg:w-[380px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-3.5 md:p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between min-w-0">
                  <span className="block truncate text-[var(--white)] text-sm sm:text-base md:text-lg">
                    {category}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-5 h-5 md:w-6 md:h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[300px] pb-3.5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-1.5 text-[var(--white-icon)] text-xs sm:text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="pl-1">•</span>
                      <li className="pl-2.5">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
