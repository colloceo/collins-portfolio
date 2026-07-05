import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { portfolioData as data } from "../data";

const Gallery = () => {
    const [lightbox, setLightbox] = useState(null);
    const [activeFilter, setActiveFilter] = useState("All");

    const categories = ["All", ...new Set(data.gallery.map((e) => e.category))];
    const filtered = activeFilter === "All"
        ? data.gallery
        : data.gallery.filter((e) => e.category === activeFilter);

    const openLightbox = (images, index) => setLightbox({ images, index });
    const closeLightbox = () => setLightbox(null);
    const prevImage = () => setLightbox((lb) => ({ ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length }));
    const nextImage = () => setLightbox((lb) => ({ ...lb, index: (lb.index + 1) % lb.images.length }));

    return (
        <div>
            <div className="page-banner">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <span className="section-label">Events &amp; Appearances</span>
                    <h1>Gallery</h1>
                    <p>Hackathons, conferences, and tech expos across Kenya</p>
                </motion.div>
            </div>

            <div className="main-container" style={{ paddingTop: "3rem" }}>

                {/* Filter pills */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "3rem" }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            style={{
                                padding: "8px 20px",
                                borderRadius: "50px",
                                border: `1px solid ${activeFilter === cat ? "var(--accent)" : "var(--border)"}`,
                                background: activeFilter === cat ? "var(--accent)" : "transparent",
                                color: activeFilter === cat ? "#fff" : "var(--text-muted)",
                                fontWeight: 600,
                                fontSize: "0.85rem",
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Event cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                    {filtered.map((event, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            style={{
                                background: "var(--bg-card)",
                                border: "1px solid var(--border)",
                                borderRadius: "var(--radius-lg)",
                                overflow: "hidden",
                            }}
                        >
                            {/* Images */}
                            <div
                                className="gallery-grid-2"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: `repeat(${event.images.length}, 1fr)`,
                                    gap: "2px",
                                    height: "300px",
                                }}
                            >
                                {event.images.map((img, j) => (
                                    <div
                                        key={j}
                                        onClick={() => openLightbox(event.images, j)}
                                        className="gallery-thumb"
                                        style={{ overflow: "hidden", cursor: "zoom-in", position: "relative" }}
                                    >
                                        <img
                                            src={img}
                                            alt={`${event.title} photo ${j + 1}`}
                                            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease", display: "block" }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.06)"}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                                        />
                                        <div style={{
                                            position: "absolute", inset: 0,
                                            background: "rgba(253,83,32,0.12)",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            opacity: 0, transition: "opacity 0.3s ease",
                                        }}
                                            onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
                                            onMouseLeave={(e) => e.currentTarget.style.opacity = "0"}
                                        >
                                            <Icon icon="lucide:zoom-in" width={32} color="#fff" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Info */}
                            <div className="gallery-info">
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1rem" }}>
                                    <div>
                                        <span className="section-label">{event.category}</span>
                                        <h2 style={{ fontSize: "1.3rem", fontWeight: 700 }}>{event.title}</h2>
                                    </div>
                                    <div style={{ textAlign: "right" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "4px", justifyContent: "flex-end" }}>
                                            <Icon icon="lucide:calendar" width={13} />
                                            {event.date}
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--text-muted)", fontSize: "0.85rem", justifyContent: "flex-end" }}>
                                            <Icon icon="lucide:map-pin" width={13} />
                                            {event.location}
                                        </div>
                                    </div>
                                </div>

                                <p style={{ color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                                    {event.description}
                                </p>

                                <div style={{
                                    display: "flex", alignItems: "flex-start", gap: "10px",
                                    padding: "12px 16px",
                                    background: "rgba(253,83,32,0.06)",
                                    border: "1px solid rgba(253,83,32,0.2)",
                                    borderRadius: "var(--radius-sm)",
                                }}>
                                    <Icon icon="lucide:trophy" width={15} style={{ color: "var(--accent)", marginTop: 2, flexShrink: 0 }} />
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.5" }}>
                                        {event.achievements}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                        style={{
                            position: "fixed", inset: 0,
                            background: "rgba(0,0,0,0.93)",
                            zIndex: 9999,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            padding: "2rem",
                        }}
                    >
                        {/* Close */}
                        <button onClick={closeLightbox} style={lbBtnStyle({ top: "1.5rem", right: "1.5rem" })}>
                            <Icon icon="lucide:x" width={20} />
                        </button>

                        {/* Prev */}
                        {lightbox.images.length > 1 && (
                            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} style={lbBtnStyle({ left: "1.5rem" })}>
                                <Icon icon="lucide:chevron-left" width={22} />
                            </button>
                        )}

                        {/* Image */}
                        <motion.img
                            key={lightbox.index}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            src={lightbox.images[lightbox.index]}
                            alt="Gallery"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                maxWidth: "90vw", maxHeight: "85vh",
                                objectFit: "contain",
                                borderRadius: "var(--radius-md)",
                                boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
                            }}
                        />

                        {/* Next */}
                        {lightbox.images.length > 1 && (
                            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} style={lbBtnStyle({ right: "1.5rem" })}>
                                <Icon icon="lucide:chevron-right" width={22} />
                            </button>
                        )}

                        {/* Counter */}
                        <div style={{
                            position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)",
                            color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", fontWeight: 600,
                        }}>
                            {lightbox.index + 1} / {lightbox.images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const lbBtnStyle = (pos) => ({
    position: "absolute",
    ...pos,
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "50%",
    width: 44, height: 44,
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", color: "#fff",
    transition: "background 0.2s ease",
});

export default Gallery;
