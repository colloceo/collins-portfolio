import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { portfolioData } from "../data";
import { Icon } from "@iconify/react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const navItems = [
        { to: "/", label: "Home" },
        { to: "/education", label: "Education" },
        { to: "/experience", label: "Experience" },
        { to: "/projects", label: "Projects" },
        { to: "/gallery", label: "Gallery" },
        { to: "/contact", label: "Contact" },
    ];

    return (
        <header className={`header${scrolled ? " header-scrolled" : ""}`}>
            <div className="nav-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    &lt;{portfolioData.nickname}/&gt;
                </Link>

                {/* hamburger */}
                <div
                    className="menu-icon"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    style={{ display: "none" }}
                >
                    <Icon icon={menuOpen ? "lucide:x" : "lucide:menu"} width={24} />
                </div>

                <nav className={`nav-links${menuOpen ? " mobile-active" : ""}`}>
                    {navItems.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === "/"}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `nav-link${isActive ? " active" : ""}`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                    <a
                        href={portfolioData.resumeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="nav-cta"
                        onClick={closeMenu}
                    >
                        Hire Me
                        <Icon icon="lucide:arrow-right" width={14} />
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
