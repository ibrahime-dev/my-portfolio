
import { useEffect, useState } from "react";
import "./Hero.css";
import myPhoto from "../assets/myphoto.png";

const roles = [
  "Junior Full-Stack Developer",
  "MERN Stack Developer",
  "PERN Stack Developer",
];

const stats = [
  { value: "5",   label: "Portfolio Projects" },
  { value: "MERN", label: "Document Database Stack" },
  { value: "PERN", label: "SQL Database Stack" },
  { value: "IT",  label: "Wollo University" },
];

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting,  setDeleting]  = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex)); setCharIndex(i => i + 1); }, 80);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex)); setCharIndex(i => i - 1); }, 45);
    } else {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <div className="home-page">

      {/* ── HERO ── */}
      <section id="home" className="hero">
        <div className="hero-bg-glow"  aria-hidden="true" />
        <div className="hero-bg-glow2" aria-hidden="true" />

        <div className="hero-layout">
          <div className="hero-content">
            <div className="hero-available">
              <span className="avail-pulse" />
              Open to collaboration
            </div>

            <p className="hero-eyebrow">JUNIOR FULL-STACK DEVELOPER</p>
            <h1 className="hero-name">Hi, I'm <span>Ibrahim Adem</span></h1>

            <div className="hero-role" aria-live="polite">
              <span className="role-text">{displayed}</span>
              <span className="role-cursor">|</span>
            </div>

            <p className="hero-tagline">
              I’m a Junior Full-Stack Developer specializing in MERN and PERN
              stack development, building responsive applications from the
              interface to the database.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="hero-btn-primary">View My Projects <span aria-hidden="true">→</span></a>
              <a href="#contact" className="hero-btn-ghost">Contact Me</a>
            </div>

            <div className="hero-find">
              <span>Find me on</span>
              <a href="https://github.com/ibrahime-dev" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/ibrahimadem12" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452H17.21v-5.569c0-1.327-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.984V9h3.104v1.561h.044c.433-.82 1.49-1.684 3.066-1.684 3.279 0 3.883 2.158 3.883 4.964v6.611zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm1.556 13.019H3.78V9h3.113v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Portrait of Ibrahim Adem">
            <div className="hero-shape hero-shape-back" aria-hidden="true" />
            <div className="hero-shape hero-shape-front" aria-hidden="true" />
            <div className="hero-photo-frame">
              <img src={myPhoto} alt="Ibrahim Adem" />
            </div>
            <div className="hero-code-badge" aria-hidden="true">&lt; / &gt;</div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="home-stats">
        {stats.map((s, i) => (
          <div className="home-stat" key={s.label}>
            <span className="home-stat-value">{s.value}</span>
            <span className="home-stat-label">{s.label}</span>
            {i < stats.length - 1 && <div className="home-stat-divider" />}
          </div>
        ))}
      </div>

      {/* ── PROFILE ── */}
      <section className="home-profile">
        <div className="home-profile-bg-glow" aria-hidden="true" />

        <div className="home-about-text">
          <div className="home-about-label">
            <span className="label-dot" />
            ABOUT ME
          </div>

          <h2 className="home-about-title">I'm <span>Ibrahim Adem</span></h2>

          <p className="home-about-desc">
            I’m an IT student at Wollo University and a Junior Full-Stack
            Developer from Gondar, Ethiopia.
          </p>
          <p className="home-about-desc">
            I focus on MERN and PERN stack development, building responsive,
            user-friendly applications while continuing to grow through
            hands-on projects.
          </p>

          <div className="home-info-grid">
            <div className="home-info-tile">
              <p className="home-info-label">LOCATION</p>
              <p className="home-info-value">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Gondar, Ethiopia
              </p>
            </div>
            <div className="home-info-tile">
              <p className="home-info-label">ROLE</p>
              <p className="home-info-value">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
                Junior Full-Stack Developer
              </p>
            </div>
            <div className="home-info-tile">
              <p className="home-info-label">CORE STACK</p>
              <p className="home-info-value">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                MERN & PERN Stack Development
              </p>
            </div>
            <div className="home-info-tile">
              <p className="home-info-label">AVAILABILITY</p>
              <p className="home-info-value home-info-accent">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                Open to Collaboration
              </p>
            </div>
          </div>

          <div className="home-about-buttons">
            <a href="#about"    className="hero-btn-primary">Read More →</a>
            <a href="#projects" className="hero-btn-ghost">View Projects</a>
          </div>
        </div>
      </section>

    </div>
  );
}
