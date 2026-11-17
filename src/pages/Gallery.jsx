import React, { useState } from "react";
import { portfolioData as data } from "../data";

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", ...new Set(data.gallery.map((e) => e.category))];
  const filtered =
    activeFilter === "All"
      ? data.gallery
      : data.gallery.filter((e) => e.category === activeFilter);

  const openLightbox = (images, index) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox(null);
  const prevImage = () =>
    setLightbox((lb) => ({
      ...lb,
      index: (lb.index - 1 + lb.images.length) % lb.images.length,
    }));
  const nextImage = () =>
    setLightbox((lb) => ({
      ...lb,
      index: (lb.index + 1) % lb.images.length,
    }));

  return (
    <section
      id="gallery"
      className="py-12 border-t border-[#ffffff10] text-[var(--white)]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-lg text-[var(--sec)] mb-2 shiny-sec">
          Events &amp; Appearances
        </h2>
        <h3 className="text-4xl md:text-5xl font-medium mb-6">Gallery</h3>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  isActive
                    ? "border-[var(--sec)] bg-[#38bdf81f] text-white"
                    : "border-[var(--white-icon-tr)] bg-[#1414149c] text-[var(--white-icon)] hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((event, i) => (
            <div
              key={i}
              className="bg-[#1414149c] border border-[var(--white-icon-tr)] rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="grid grid-cols-2 gap-1 h-52 bg-[#0b0b0b]">
                  {event.images.map((img, j) => (
                    <div
                      key={j}
                      onClick={() => openLightbox(event.images, j)}
                      className="overflow-hidden cursor-pointer relative group"
                    >
                      <img
                        src={img}
                        alt={`${event.title} ${j + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-xs px-3 py-1 rounded-full bg-black/70 text-white border border-white/20">
                          View
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-medium text-[var(--sec)] uppercase tracking-wider">
                      {event.category}
                    </span>
                    <span className="text-xs text-[var(--white-icon)]">
                      {event.date} · {event.location}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-[var(--white)] mb-2">
                    {event.title}
                  </h4>
                  <p className="text-sm text-[var(--white-icon)] leading-relaxed mb-3">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5">
                <div className="text-xs text-[var(--white-icon)] p-3 rounded-xl bg-[var(--white-icon-tr)] border border-[var(--white-icon-tr)]">
                  <span className="text-[var(--sec)] font-semibold">
                    Highlight:{" "}
                  </span>
                  {event.achievements}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
        >
          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-6 right-6 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl"
          >
            ✕
          </button>

          {lightbox.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous"
              className="absolute left-6 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl"
            >
              ‹
            </button>
          )}

          <img
            src={lightbox.images[lightbox.index]}
            alt="Gallery preview"
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
          />

          {lightbox.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next"
              className="absolute right-6 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl"
            >
              ›
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default Gallery;
