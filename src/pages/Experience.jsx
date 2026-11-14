import React from "react";
import { portfolioData as data } from "../data";

const Experience = () => {
  const experiences = data.experience.sections.flatMap((s) => s.experiences);

  return (
    <section
      id="experience"
      className="py-12 border-t border-[#ffffff10] text-[var(--white)]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-lg text-[var(--sec)] mb-2 shiny-sec">
          {data.experience.subtitle}
        </h2>
        <h3 className="text-4xl md:text-5xl font-medium mb-4">
          {data.experience.title}
        </h3>
        <p className="text-[var(--white-icon)] max-w-2xl mb-8 text-base md:text-lg">
          {data.experience.description}
        </p>

        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#1414149c] border border-[var(--white-icon-tr)] hover:border-[#ffffff25] rounded-2xl p-6 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold text-[var(--white)]">
                    {exp.title}
                  </h4>
                  <p className="text-[var(--sec)] font-medium text-base">
                    {exp.company}
                  </p>
                </div>
                <div className="md:text-right text-sm text-[var(--white-icon)]">
                  <div className="font-medium text-[var(--white)]">
                    {exp.duration}
                  </div>
                  <div>{exp.location}</div>
                </div>
              </div>
              <p className="text-[var(--white-icon)] text-sm md:text-base leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
