import React from "react";
import { portfolioData as data } from "../data";

const Education = () => {
  return (
    <section
      id="education"
      className="py-12 border-t border-[#ffffff10] text-[var(--white)]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-lg text-[var(--sec)] mb-2 shiny-sec">
          Background
        </h2>
        <h3 className="text-4xl md:text-5xl font-medium mb-8">
          Education &amp; Certifications
        </h3>

        {/* Degrees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {data.degrees.map((degree, i) => (
            <div
              key={i}
              className="bg-[#1414149c] border border-[var(--white-icon-tr)] hover:border-[#ffffff25] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-[var(--white)]">
                      {degree.title}
                    </h4>
                    <p className="text-[var(--sec)] text-sm font-medium mt-1">
                      {degree.subtitle}
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-[var(--white-icon-tr)] text-[var(--white-icon)] whitespace-nowrap">
                    {degree.duration}
                  </span>
                </div>

                <ul className="space-y-2 text-sm text-[var(--white-icon)] mt-4">
                  {degree.descriptions.map((desc, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-[var(--sec)]">•</span>
                      <span>{desc.replace(/^⚡\s*/, "")}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ffffff10] flex justify-end">
                <a
                  href={degree.website_link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--white-icon)] hover:text-white transition duration-300 border border-[var(--white-icon-tr)] px-4 py-2 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"
                >
                  <span>Visit Institution</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h4 className="text-2xl font-medium text-[var(--white)] mb-4">
          Certifications
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.certificate_link !== "#" ? cert.certificate_link : undefined}
              target={cert.certificate_link !== "#" ? "_blank" : undefined}
              rel="noreferrer"
              className="group bg-[#1414149c] border border-[var(--white-icon-tr)] hover:border-[var(--sec)] rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--sec)]">
                    {cert.alt_name}
                  </span>
                  {cert.certificate_link !== "#" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-[var(--white-icon)] group-hover:text-white"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                  )}
                </div>
                <h5 className="text-lg font-semibold text-[var(--white)] mb-1">
                  {cert.title}
                </h5>
                <p className="text-xs text-[var(--white-icon)] mb-2">
                  {cert.subtitle}
                </p>
              </div>
              {cert.detail && (
                <p className="text-xs text-[var(--white-icon)] pt-2 border-t border-[#ffffff10] leading-relaxed">
                  {cert.detail}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
