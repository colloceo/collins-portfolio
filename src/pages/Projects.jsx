import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { portfolioData as data } from "../data";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
    }),
};

const Projects = () => {
    return (
        <div>
            {/* Page Banner */}
            <div className="page-banner">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-label">Portfolio</span>
                    <h1>Projects</h1>
                    <p>A selection of things I've built — from web apps to full-stack platforms.</p>
                </motion.div>
            </div>

            <div className="main-container" style={{ paddingTop: "3rem" }}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                >
                    <motion.div className="section-heading-row" variants={fadeUp}>
                        <div>
                            <span className="section-label">Work</span>
                            <h1>Featured Projects</h1>
                        </div>
                        <p className="section-desc">
                            I use a wide variety of modern tech tools. My strength is full-stack web development
                            with real-world integrations like M-Pesa payments and AI assistants.
                        </p>
                    </motion.div>

                    <div className="repo-cards-div-main">
                        {data.projects.data.map((repo, i) => (
                            <motion.div
                                key={repo.id}
                                className="repo-card-div"
                                variants={fadeUp}
                                custom={i}
                                whileHover={{ y: -6 }}
                            >
                                {/* Card top */}
                                <div>
                                    <div className="repo-name-div" style={{ marginBottom: "0.75rem" }}>
                                        <Icon
                                            icon="lucide:folder-open"
                                            width={22}
                                            style={{ color: "var(--accent)" }}
                                        />
                                        <h3 className="repo-name-div">{repo.name}</h3>
                                        <span
                                            style={{
                                                marginLeft: "auto",
                                                fontSize: "0.75rem",
                                                color: "var(--text-dim)",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {repo.createdAt}
                                        </span>
                                    </div>
                                    <p className="repo-description">{repo.description}</p>
                                </div>

                                {/* Card bottom */}
                                <div className="repo-details">
                                    <div className="repo-langs">
                                        {repo.languages.map((lang, j) => (
                                            <span
                                                key={j}
                                                title={lang.name}
                                                style={{ display: "flex", alignItems: "center" }}
                                            >
                                                <Icon
                                                    icon={lang.iconifyClass}
                                                    width={18}
                                                    style={{ color: "var(--text-muted)" }}
                                                />
                                            </span>
                                        ))}
                                    </div>
                                    <div className="repo-links">
                                        <a
                                            href={repo.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="GitHub"
                                        >
                                            <Icon icon="simple-icons:github" width={18} />
                                        </a>
                                        <a
                                            href={repo.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="Live site"
                                        >
                                            <Icon icon="lucide:external-link" width={18} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    style={{ textAlign: "center", marginTop: "4rem" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <a
                        href={data.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                    >
                        <Icon icon="simple-icons:github" width={18} />
                        More on GitHub
                        <Icon icon="lucide:arrow-right" width={16} />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
