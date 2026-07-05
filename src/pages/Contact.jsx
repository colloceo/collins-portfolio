import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";
import { portfolioData as data } from "../data";

// ─────────────────────────────────────────────
// Replace these three values with your own from
// https://www.emailjs.com  (free, 200 emails/mo)
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_jeiwi3x";
const EMAILJS_TEMPLATE_ID = "template_d5fu38e";
const EMAILJS_PUBLIC_KEY  = "3g6JOAoH4lxlKgZMp";
// ─────────────────────────────────────────────

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            setStatus("success");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus("error");
        }
    };

    return (
        <div>
            {/* Page Banner */}
            <div className="page-banner">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-label">Get In Touch</span>
                    <h1>Contact Me</h1>
                    <p>Let's collaborate — my inbox is always open.</p>
                </motion.div>
            </div>

            <div className="main-container" style={{ paddingTop: "3rem" }}>
                <motion.div
                    className="contact-wrapper"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* ── Left ── */}
                    <div className="contact-left">
                        <span className="section-label">Let's Talk</span>
                        <h1>{data.contact.title}</h1>
                        <p>{data.contact.subtitle}</p>

                        <ul className="contact-info-list">
                            <li>
                                <Icon icon="lucide:phone" width={20} style={{ color: "var(--accent)" }} />
                                <a href={`tel:${data.contact.number}`} style={{ color: "inherit", textDecoration: "none" }}>
                                    {data.contact.number}
                                </a>
                            </li>
                            <li>
                                <Icon icon="lucide:mail" width={20} style={{ color: "var(--accent)" }} />
                                <a href={`mailto:${data.contact.email_address}`} style={{ color: "inherit", textDecoration: "none" }}>
                                    {data.contact.email_address}
                                </a>
                            </li>
                            <li>
                                <Icon icon="lucide:map-pin" width={20} style={{ color: "var(--accent)" }} />
                                {data.location}
                            </li>
                        </ul>

                        <div className="social-media-div">
                            {Object.entries(data.socials).map(([name, url]) => (
                                <a key={name} href={url} target="_blank" rel="noreferrer" className="social-icon" aria-label={name}>
                                    <Icon icon={`simple-icons:${name}`} width={16} />
                                </a>
                            ))}
                        </div>

                        <div style={{ marginTop: "2.5rem" }}>
                            <a href={data.resumeUrl} target="_blank" rel="noreferrer" className="btn">
                                <Icon icon="lucide:file-text" width={16} />
                                Download Resume
                                <Icon icon="lucide:arrow-right" width={14} />
                            </a>
                        </div>
                    </div>

                    {/* ── Right — form ── */}
                    <motion.div
                        className="contact-right"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2>Send a Message</h2>

                        {/* Success state */}
                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{
                                    textAlign: "center",
                                    padding: "3rem 1rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "1rem",
                                }}
                            >
                                <div style={{
                                    width: 64, height: 64, borderRadius: "50%",
                                    background: "rgba(253,83,32,0.1)",
                                    border: "2px solid var(--accent)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                }}>
                                    <Icon icon="lucide:check" width={28} style={{ color: "var(--accent)" }} />
                                </div>
                                <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>Message Sent!</h3>
                                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                                    Thanks for reaching out. I'll get back to you as soon as possible.
                                </p>
                                <button className="btn-outline" onClick={() => setStatus("idle")} style={{ marginTop: "0.5rem" }}>
                                    Send Another
                                </button>
                            </motion.div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit}>
                                <div className="contact-form-field">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Jane Doe"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        disabled={status === "sending"}
                                    />
                                </div>

                                <div className="contact-form-field">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        disabled={status === "sending"}
                                    />
                                </div>

                                <div className="contact-form-field">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="Tell me about your project…"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        disabled={status === "sending"}
                                    />
                                </div>

                                {/* Error message */}
                                {status === "error" && (
                                    <div style={{
                                        display: "flex", alignItems: "center", gap: "8px",
                                        padding: "10px 14px", marginBottom: "1rem",
                                        background: "rgba(255,60,60,0.08)",
                                        border: "1px solid rgba(255,60,60,0.25)",
                                        borderRadius: "var(--radius-sm)",
                                        color: "#ff6b6b", fontSize: "0.88rem",
                                    }}>
                                        <Icon icon="lucide:alert-circle" width={16} />
                                        Something went wrong. Please try again or email me directly.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn"
                                    disabled={status === "sending"}
                                    style={{ width: "100%", justifyContent: "center", opacity: status === "sending" ? 0.7 : 1 }}
                                >
                                    {status === "sending" ? (
                                        <>
                                            <Icon icon="lucide:loader" width={16} style={{ animation: "spin 1s linear infinite" }} />
                                            Sending…
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Icon icon="lucide:send" width={16} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            </div>

            <style>{`
                @keyframes spin { to { transform: rotate(360deg); } }
            `}</style>
        </div>
    );
};

export default Contact;
