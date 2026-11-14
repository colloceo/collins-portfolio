import React, { useEffect, useRef, useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "#home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path>
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "#projects",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z"></path>
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z"></path>
      </svg>
    ),
  },
];

const Nav = () => {
  const navRef = useRef(null);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const maxScroll = 1000;
    let rafId = null;

    const updateNav = () => {
      const nav = navRef.current;
      if (!nav) return;

      if (window.scrollY > 0) {
        nav.classList.add("scrolling");

        const scrollProgress = Math.min(window.scrollY / maxScroll, 1);
        const easeProgress = 1 - Math.pow(1 - scrollProgress, 4);

        const minWidth = Math.min(480, window.innerWidth * 0.75);
        const maxWidth = window.innerWidth * 0.8;
        const currentWidth = maxWidth - (maxWidth - minWidth) * easeProgress;

        if (window.innerWidth >= 768) {
          nav.style.setProperty("width", `${currentWidth}px`);
        } else {
          nav.style.removeProperty("width");
        }
      } else {
        nav.classList.remove("scrolling");
        if (window.innerWidth >= 768) {
          nav.style.setProperty("width", "80%");
        } else {
          nav.style.removeProperty("width");
        }
      }
      rafId = null;
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateNav);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateNav, { passive: true });

    const sections = document.querySelectorAll("section[id]");
    const observerOptions = { threshold: 0.35 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) setActiveId(id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateNav);
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setActiveId(targetId);
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex justify-center w-full">
      <nav
        id="main-nav"
        ref={navRef}
        className="fixed left-1/2 -translate-x-1/2 z-[100] bg-[var(--background)] border border-1 border-transparent backdrop-blur-xl transition-all duration-500 ease-in-out md:top-4 md:bottom-auto bottom-0 w-full md:w-[80%]"
      >
        <div className="container mx-auto flex justify-center items-center py-2 px-4 md:p-2.5">
          <ul className="flex w-full justify-around md:justify-center md:space-x-6 md:gap-12 gap-2">
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeId === id;
              return (
                <li key={item.href} className="flex-1 md:flex-none">
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`flex flex-col items-center gap-0.5 text-[var(--white-icon)] transition-colors text-[11px] md:text-sm relative group py-0.5 ${
                      isActive ? "active" : ""
                    }`}
                  >
                    <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 scale-0 opacity-0 bg-[#A9FF5B] nav-indicator hidden md:block" />
                    <span className="md:hidden flex items-center justify-center w-5 h-5">
                      {item.icon}
                    </span>
                    <span className="hidden md:inline-block">{item.label}</span>
                    <span className="md:hidden">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
