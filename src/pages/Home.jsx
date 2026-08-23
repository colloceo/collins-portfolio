import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { portfolioData as data } from "../data";
import Terminal from "../components/Terminal";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
    }),
};

const skillsCarouselImages = [
    "/skills-carousel-1.jpg",
    "/skills-carousel-2.jpg",
    "/skills-carousel-3.jpg",
    "/skills-carousel-4.jpg",
    "/skills-carousel-5.jpg",
    "/skills-carousel-6.jpg",
];

const Home = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % skillsCarouselImages.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="main-container">

            {/* ── Hero ── */}
            <section className="section-hero">
                <motion.div
                    className="hero-text"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                    <motion.span className="section-label" variants={fadeUp}>
                        React · Python FastAPI · Flutter
                    </motion.span>

                    <motion.h1 variants={fadeUp}>
                        Hi, I'm <mark>Collins Otieno</mark> and I Build Scalable Digital Products
                    </motion.h1>

                    <motion.p variants={fadeUp}>
                        {data.greeting.subTitle}
                    </motion.p>

                    <motion.div variants={fadeUp}>
                        <div className="social-media-div">
                            {Object.entries(data.socials).map(([name, url]) => (
                                <a
                                    key={name}
                                    href={url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-icon"
                                    aria-label={name}
                                >
                                    <Icon icon={`simple-icons:${name}`} width={16} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="hero-actions">
                        <a href={data.socials.github} target="_blank" rel="noreferrer" className="btn">
                            <Icon icon="simple-icons:github" width={16} />
                            GitHub
                        </a>
                    </motion.div>

                    <motion.div className="stats-row" variants={fadeUp}>
                        <div className="stat-item">
                            <div className="stat-num">3+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">10+</div>
                            <div className="stat-label">Projects Built</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">4</div>
                            <div className="stat-label">Certifications</div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-img"
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <img src="/hero.png" alt={`${data.name} hero illustration`} />
                </motion.div>
            </section>

            {/* ── Terminal ── */}
            <motion.section
                className="terminal-section"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <span className="section-label">Poke Around</span>
                <h1 style={{ marginBottom: "1.5rem" }}>Try the Terminal</h1>
                <Terminal />
            </motion.section>

            {/* ── Skills ── */}
            <motion.section
                className="skills-main-div"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <div className="skills-image-div">
                    <div className="skills-photo-wrap">
                        <div className="skills-photo-ring" />
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeSlide}
                                src={skillsCarouselImages[activeSlide]}
                                alt={`${data.name} photo ${activeSlide + 1}`}
                                className="skills-photo"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                        </AnimatePresence>
                        <div className="skills-photo-dots">
                            {skillsCarouselImages.map((_, i) => (
                                <button
                                    key={i}
                                    className={`skills-photo-dot${i === activeSlide ? " active" : ""}`}
                                    onClick={() => setActiveSlide(i)}
                                    aria-label={`Show photo ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="skills-text-div">
                    <span className="section-label">What I Do</span>
                    <h1>{data.skills.title}</h1>

                    <div className="software-skills-main-div">
                        {data.skills.softwareSkills.map((skill, i) => (
                            <div key={i} className="software-skill-inline" title={skill.skillName}>
                                <Icon
                                    icon={skill.fontAwesomeClassname}
                                    width={36}
                                    height={36}
                                    style={skill.style}
                                />
                                <span>{skill.skillName}</span>
                            </div>
                        ))}
                    </div>

                    <ul className="skill-list">
                        {data.skills.skills.map((skill, i) => (
                            <li key={i}>
                                <Icon
                                    icon="lucide:zap"
                                    width={16}
                                    style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}
                                />
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.section>
        </div>
    );
};

export default Home;
