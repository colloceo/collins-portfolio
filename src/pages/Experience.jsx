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

const Experience = () => {
    return (
        <div>
            {/* Page Banner */}
            <div className="page-banner">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-label">Work History</span>
                    <h1>{data.experience.title}</h1>
                    <p>{data.experience.subtitle}</p>
                </motion.div>
            </div>

            <div className="main-container page-content">
                {data.experience.sections.map((section, si) => (
                    <motion.div
                        key={si}
                        style={{ marginBottom: "3rem" }}
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                    >
                        <motion.div className="section-heading-row" variants={fadeUp}>
                            <div>
                                <span className="section-label">Category</span>
                                <h1>{section.title}</h1>
                            </div>
                        </motion.div>

                        {section.experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                className="experience-card"
                                variants={fadeUp}
                                custom={i}
                                style={{ borderLeft: `3px solid ${exp.color}` }}
                            >
                                <div className="card-header">
                                    <div
                                        className="card-icon"
                                        style={{ borderColor: exp.color, color: exp.color }}
                                    >
                                        <Icon icon="fa-solid:briefcase" width={20} />
                                    </div>
                                    <div className="card-title">
                                        <h2>{exp.title}</h2>
                                        <h3 style={{ color: exp.color }}>{exp.company}</h3>
                                    </div>
                                    <div className="card-date">
                                        <p>{exp.duration}</p>
                                        <p style={{ marginTop: "2px" }}>{exp.location}</p>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <p>{exp.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ))}

                {/* Description blurb */}
                <motion.div
                    className="exp-blurb"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p>{data.experience.description}</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;
