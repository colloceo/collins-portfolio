import React from "react";
import { Link } from "react-router-dom";
import { portfolioData } from "../data";
import { Icon } from "@iconify/react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer-div">
            <div className="footer-inner">
                <Link to="/" className="footer-logo">
                    &lt;{portfolioData.nickname}/&gt;
                </Link>

                <div className="social-media-div" style={{ marginTop: "0.5rem" }}>
                    {Object.entries(portfolioData.socials).map(([name, url]) => (
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

                <p className="footer-text">
                    &copy; {year} {portfolioData.name} &mdash; Built with React &amp; Framer Motion
                </p>
            </div>
        </footer>
    );
};

export default Footer;
