import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { portfolioData as data } from "../data";

const PROMPT = "colloceo@portfolio";

const ROUTES = {
    "": "/",
    "~": "/",
    home: "/",
    projects: "/projects",
    experience: "/experience",
    education: "/education",
    gallery: "/gallery",
    contact: "/contact",
};

const JOKES = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "There are 10 types of people in the world: those who understand binary and those who don't.",
    "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
    "I would tell you a UDP joke, but you might not get it.",
    "!false. It's funny because it's true.",
];

const HELP_ROWS = [
    ["help", "show this list of commands"],
    ["about / whoami", "who I am"],
    ["skills", "tech stack and what I do"],
    ["projects", "things I've built"],
    ["experience", "work and teaching history"],
    ["education", "school and training"],
    ["certifications", "certs I've earned"],
    ["contact", "how to reach me"],
    ["social", "social links"],
    ["resume", "open my resume"],
    ["ls", "list site sections"],
    ["cd <section>", "jump to a page, e.g. cd projects"],
    ["banner", "show the intro banner again"],
    ["neofetch", "system info, portfolio edition"],
    ["clear", "clear the screen"],
];

const Line = ({ className, children }) => (
    <div className={className}>{children}</div>
);

const LinkLine = ({ href, children, className }) => (
    <div className={className}>
        <a href={href} target="_blank" rel="noreferrer" className="terminal-link">
            {children}
        </a>
    </div>
);

const banner = () => [
    <Line key="b1" className="terminal-banner-name">COLLINS OTIENO</Line>,
    <Line key="b2" className="terminal-muted">
        {data.title} · {data.location}
    </Line>,
    <Line key="b3" className="terminal-muted">
        Type <span className="terminal-accent">help</span> to see what this terminal can do.
    </Line>,
];

const buildOutput = (cmd, args, navigate) => {
    const argStr = args.join(" ");

    switch (cmd) {
        case "help":
            return [
                <Line key="h0" className="terminal-muted">Available commands:</Line>,
                ...HELP_ROWS.map(([name, desc], i) => (
                    <Line key={`h${i}`}>
                        <span className="terminal-accent">{name.padEnd(18, " ")}</span>
                        <span className="terminal-muted">{desc}</span>
                    </Line>
                )),
            ];

        case "about":
        case "whoami":
            return [
                <Line key="a0">{data.name} ({data.nickname})</Line>,
                <Line key="a1" className="terminal-muted">{data.title}, based in {data.location}</Line>,
                <Line key="a2" />,
                <Line key="a3">{data.bio}</Line>,
            ];

        case "skills":
            return [
                <Line key="s0" className="terminal-muted">Core stack:</Line>,
                <Line key="s1">{data.skills.softwareSkills.map(s => s.skillName).join(", ")}</Line>,
                <Line key="s2" />,
                ...data.skills.skills.map((s, i) => (
                    <Line key={`s3${i}`}><span className="terminal-accent">{"> "}</span>{s}</Line>
                )),
            ];

        case "projects":
            return data.projects.data.flatMap((p, i) => [
                <Line key={`p${i}0`}><span className="terminal-accent">{p.name}</span> <span className="terminal-muted">({p.createdAt})</span></Line>,
                <Line key={`p${i}1`} className="terminal-muted">  {p.description}</Line>,
                <LinkLine key={`p${i}2`} href={p.url} className="terminal-indent">{p.url}</LinkLine>,
                <Line key={`p${i}3`} />,
            ]);

        case "experience":
            return data.experience.sections.flatMap((section, si) =>
                section.experiences.map((e, i) => (
                    <Line key={`e${si}${i}`}>
                        <span className="terminal-accent">{e.title}</span> at {e.company}
                        <span className="terminal-muted"> · {e.duration}</span>
                    </Line>
                ))
            );

        case "education":
            return data.degrees.map((d, i) => (
                <Line key={`ed${i}`}>
                    <span className="terminal-accent">{d.subtitle}</span>
                    <span className="terminal-muted"> · {d.title} ({d.duration})</span>
                </Line>
            ));

        case "certifications":
            return data.certifications.map((c, i) => (
                <Line key={`c${i}`}>
                    <span className="terminal-accent">{c.title}</span>
                    <span className="terminal-muted"> · {c.subtitle}</span>
                </Line>
            ));

        case "contact":
            return [
                <Line key="ct0">Email: {data.email}</Line>,
                <Line key="ct1">Phone: {data.phone}</Line>,
                <Line key="ct2">Location: {data.location}</Line>,
                <Line key="ct3" className="terminal-muted">Type 'social' for social links.</Line>,
            ];

        case "social":
            return Object.entries(data.socials).map(([name, url], i) => (
                <LinkLine key={`so${i}`} href={url}>{name}: {url}</LinkLine>
            ));

        case "resume":
            window.open(data.resumeUrl, "_blank", "noopener,noreferrer");
            return [<Line key="r0" className="terminal-muted">Opening resume in a new tab...</Line>];

        case "ls":
            return [
                <Line key="l0">
                    {Object.keys(ROUTES).filter(k => k && k !== "~" && k !== "home").map(k => (
                        <span key={k} className="terminal-accent" style={{ marginRight: 18 }}>{k}</span>
                    ))}
                </Line>,
            ];

        case "cd": {
            const target = (args[0] || "").replace(/^\.?\/+/, "").toLowerCase();
            if (target in ROUTES) {
                navigate(ROUTES[target]);
                return [<Line key="cd0" className="terminal-muted">Navigating to {target || "home"}...</Line>];
            }
            return [
                <Line key="cd1" className="terminal-error">cd: no such file or directory: {args[0] || ""}</Line>,
                <Line key="cd2" className="terminal-muted">Type 'ls' to see available sections.</Line>,
            ];
        }

        case "date":
            return [<Line key="d0">{new Date().toString()}</Line>];

        case "echo":
            return [<Line key="ec0">{argStr}</Line>];

        case "sudo":
            return [<Line key="su0" className="terminal-error">Permission denied: colloceo is not in the sudoers file. This incident will be reported.</Line>];

        case "banner":
            return banner();

        case "neofetch":
            return [
                <Line key="n0" className="terminal-banner-name">colloceo@portfolio</Line>,
                <Line key="n1" className="terminal-muted">{"─".repeat(22)}</Line>,
                <Line key="n2"><span className="terminal-accent">OS</span>: Nairobi, Kenya</Line>,
                <Line key="n3"><span className="terminal-accent">Host</span>: colloceo.dev</Line>,
                <Line key="n4"><span className="terminal-accent">Shell</span>: React + Vite</Line>,
                <Line key="n5"><span className="terminal-accent">Uptime</span>: 3+ years</Line>,
                <Line key="n6"><span className="terminal-accent">Packages</span>: {data.projects.data.length} projects</Line>,
                <Line key="n7"><span className="terminal-accent">CPU</span>: Problem Solver (human)</Line>,
                <Line key="n8"><span className="terminal-accent">Memory</span>: always learning</Line>,
            ];

        case "coffee":
            return [<Line key="cf0">Here's your coffee ☕ Fuel for the next commit.</Line>];

        case "joke":
            return [<Line key="j0">{JOKES[Math.floor(Math.random() * JOKES.length)]}</Line>];

        default:
            return [
                <Line key="u0" className="terminal-error">bash: {cmd}: command not found</Line>,
                <Line key="u1" className="terminal-muted">Type 'help' to see available commands.</Line>,
            ];
    }
};

const Terminal = () => {
    const [entries, setEntries] = useState(() => [{ id: 0, cmd: null, output: banner() }]);
    const [input, setInput] = useState("");
    const [cmdHistory, setCmdHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const bodyRef = useRef(null);
    const inputRef = useRef(null);
    const navigate = useNavigate();
    const idRef = useRef(1);

    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
    }, [entries]);

    const focusInput = () => inputRef.current && inputRef.current.focus();

    const submit = () => {
        const raw = input;
        const trimmed = raw.trim();
        setInput("");
        setHistoryIndex(-1);

        if (!trimmed) {
            setEntries(prev => [...prev, { id: idRef.current++, cmd: "", output: [] }]);
            return;
        }

        if (trimmed.toLowerCase() === "clear") {
            setEntries([]);
            return;
        }

        setCmdHistory(prev => [...prev, trimmed]);
        const [cmd, ...args] = trimmed.split(/\s+/);
        const output = buildOutput(cmd.toLowerCase(), args, navigate);
        setEntries(prev => [...prev, { id: idRef.current++, cmd: raw, output }]);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            submit();
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (!cmdHistory.length) return;
            const nextIndex = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
            setHistoryIndex(nextIndex);
            setInput(cmdHistory[nextIndex]);
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex === -1) return;
            const nextIndex = historyIndex + 1;
            if (nextIndex >= cmdHistory.length) {
                setHistoryIndex(-1);
                setInput("");
            } else {
                setHistoryIndex(nextIndex);
                setInput(cmdHistory[nextIndex]);
            }
        }
    };

    return (
        <div className="terminal-window" onClick={focusInput}>
            <div className="terminal-titlebar">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
                <span className="terminal-titlebar-label">colloceo@portfolio: ~</span>
            </div>
            <div className="terminal-body" ref={bodyRef}>
                {entries.map(entry => (
                    <div key={entry.id}>
                        {entry.cmd !== null && (
                            <Line>
                                <span className="terminal-accent">{PROMPT}</span>
                                <span className="terminal-muted">:~$ </span>
                                {entry.cmd}
                            </Line>
                        )}
                        {entry.output}
                    </div>
                ))}
                <div className="terminal-input-row">
                    <span className="terminal-accent">{PROMPT}</span>
                    <span className="terminal-muted">:~$&nbsp;</span>
                    <input
                        ref={inputRef}
                        className="terminal-input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoCapitalize="off"
                        autoCorrect="off"
                        spellCheck="false"
                        aria-label="Terminal input"
                    />
                </div>
            </div>
        </div>
    );
};

export default Terminal;
