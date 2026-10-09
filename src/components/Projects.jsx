import { useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";
import "./Projects.css";

const filters = ["All", "Full-Stack", "Backend", "Frontend", "Desktop"];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

export default function Projects() {
  const [active,   setActive]   = useState("All");
  const [selected, setSelected] = useState(null);
  const [toast,    setToast]    = useState(false);

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  const showToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  return (
    <section id="projects" className="projects-section">
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}

      {/* TOAST */}
      {toast && (
        <div className="demo-toast">
          🚀 Live demo coming soon! Deployment in progress.
        </div>
      )}

      {/* HERO BANNER */}
      <div className="projects-hero">
        <div className="projects-hero-glow" aria-hidden="true" />
        <p className="projects-label">PORTFOLIO</p>
        <h2 className="projects-title">My <span>Projects</span></h2>
        <p className="projects-subtitle">
          Full-stack projects built with PHP, ASP.NET MVC, React, and more.
          Click View Details to explore each project in depth.
        </p>
      </div>

      <div className="container">

        {/* FILTER BAR */}
        <div className="filter-bar">
          <div className="filter-tabs">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-tab${active === f ? " active" : ""}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <span className="project-count">{filtered.length} project{filtered.length !== 1 ? "s" : ""}</span>
        </div>

        {/* CARDS */}
        <div className="projects-grid">
          {filtered.map((p) => (
            <article className="project-card" key={p.slug}>

              {/* image / preview */}
              <div className="project-preview" style={{ "--card-color": p.color }}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="project-img"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                {/* fallback mock */}
                <div className="preview-mock">
                  <div className="mock-bar"><span /><span /><span /></div>
                  <div className="mock-content">
                    <div className="mock-title">{p.title}</div>
                    <div className="mock-lines"><div /><div /><div /></div>
                  </div>
                </div>

                {/* status badge */}
                <span className={`status-badge ${p.status === "Completed" ? "badge-done" : "badge-wip"}`}>
                  {p.status}
                </span>
              </div>

              {/* body */}
              <div className="project-body">
                <div className="project-body-top">
                  <h3>{p.title}</h3>
                  <span className="project-category">{p.category}</span>
                </div>

                <p className="project-tagline">{p.tagline}</p>

                <div className="project-tech">
                  {p.tech.map((t) => <span key={t}>{t}</span>)}
                </div>

                <div className="project-links">
                  <button
                    className="proj-btn proj-btn-primary"
                    onClick={() => setSelected(p)}
                  >
                    View Details
                  </button>

                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-btn proj-btn-ghost"
                  >
                    <GitHubIcon /> GitHub
                  </a>

                  {p.demo !== "#" ? (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="proj-btn proj-btn-ghost">
                      🌐 Live Demo
                    </a>
                  ) : (
                    <button className="proj-btn proj-btn-ghost" onClick={showToast}>
                      🌐 Live Demo
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
