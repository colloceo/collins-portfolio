import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { portfolioData as data } from "../data";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
};

const Education = () => {
    return (
        <div>
            {/* Page Banner */}
            <div className="page-banner">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-label">Background</span>
                    <h1>Education</h1>
                    <p>Academic degrees and professional certifications</p>
                </motion.div>
            </div>

            <div className="main-container page-content">

                {/* Degrees */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                >
                    <motion.div className="section-heading-row" variants={fadeUp}>
                        <div>
                            <span className="section-label">Formal Education</span>
                            <h1>Degrees Received</h1>
                        </div>
                    </motion.div>

                    {data.degrees.map((degree, i) => (
                        <motion.div
                            key={i}
                            className="degree-card"
                            variants={fadeUp}
                            custom={i}
                        >
                            <div className="card-header">
                                <div className="card-icon">
                                    <Icon icon="fa-solid:university" width={22} />
                                </div>
                                <div className="card-title">
                                    <h2>{degree.title}</h2>
                                    <h3>{degree.subtitle}</h3>
                                </div>
                                <div className="card-date">
                                    <p>{degree.duration}</p>
                                </div>
                            </div>

                            <div className="card-body">
                                {degree.descriptions.map((desc, j) => (
                                    <p key={j}>
                                        {desc.replace(/^⚡\s*/, "")}
                                    </p>
                                ))}
                            </div>

                            <div style={{ marginTop: "1.25rem" }}>
                                <a
                                    href={degree.website_link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-outline"
                                >
                                    <Icon icon="lucide:external-link" width={14} />
                                    Visit Website
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Certifications */}
                <motion.div
                    style={{ marginTop: "4rem" }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-heading-row">
                        <div>
                            <span className="section-label">Achievements</span>
                            <h1>Certifications</h1>
                        </div>
                    </div>

                    <div className="cert-grid">
                        {data.certifications.map((cert, i) => (
                            <a
                                key={i}
                                href={cert.certificate_link}
                                target="_blank"
                                rel="noreferrer"
                                className="cert-card"
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                                    <Icon icon="lucide:award" width={20} style={{ color: "var(--accent)" }} />
                                    <h3>{cert.title}</h3>
                                </div>
                                <p>{cert.subtitle}</p>
                            </a>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Education;
