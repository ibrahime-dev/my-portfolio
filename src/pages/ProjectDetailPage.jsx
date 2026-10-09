import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectDetailPage.css";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project  = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="not-found">
        <h2>Project not found</h2>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="pd-page">

      {/* HERO */}
      <div className="pd-hero" style={{ "--card-color": project.color }}>
        <div className="pd-hero-glow" aria-hidden="true" />
        <div className="pd-hero-inner">
          <Link to="/projects" className="pd-back">← Back to Projects</Link>
          <div className="pd-meta-row">
            <span className="pd-category">{project.category}</span>
            <span className={`pd-status ${project.status === "Completed" ? "badge-done" : "badge-wip"}`}>
              {project.status}
            </span>
          </div>
          <h1>{project.title}</h1>
          <p className="pd-tagline">{project.tagline}</p>
          <div className="pd-hero-actions">
            {project.demo !== "#" && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="proj-btn proj-btn-primary">
                Live Demo →
              </a>
            )}
            <a href={project.repo} target="_blank" rel="noreferrer" className="proj-btn proj-btn-ghost">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container pd-content">
        <div className="pd-grid">

          {/* LEFT — main content */}
          <div className="pd-main">

            {/* screenshot */}
            <div className="pd-screenshot">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                onError={(e) => {
                  e.currentTarget.parentElement.classList.add("pd-screenshot-fallback");
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="pd-screenshot-placeholder">
                <p>Screenshot coming soon</p>
                <p>Add image to <code>public/projects/{project.slug}.png</code></p>
              </div>
            </div>

            {/* overview */}
            <div className="pd-section">
              <h2>Project Overview</h2>
              <p>{project.desc}</p>
            </div>

            {/* problem */}
            <div className="pd-section">
              <h2>Problem It Solves</h2>
              <p>{project.problem}</p>
            </div>

            {/* features */}
            <div className="pd-section">
              <h2>Key Features</h2>
              <ul className="pd-features">
                {project.features.map((f, i) => (
                  <li key={i}>
                    <span className="feat-dot">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* RIGHT — sidebar */}
          <aside className="pd-sidebar">

            <div className="pd-info-card">
              <h3>Technologies</h3>
              <div className="pd-tech-list">
                {project.tech.map((t) => (
                  <span key={t} className="pd-tech-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="pd-info-card">
              <h3>My Role</h3>
              <p>{project.role}</p>
            </div>

            <div className="pd-info-card">
              <h3>Project Status</h3>
              <span className={`pd-status-pill ${project.status === "Completed" ? "badge-done" : "badge-wip"}`}>
                {project.status}
              </span>
            </div>

            <div className="pd-info-card">
              <h3>Links</h3>
              <div className="pd-links">
                <a href={project.repo} target="_blank" rel="noreferrer" className="pd-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  GitHub Repository
                </a>
                {project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="pd-link">
                    🌐 Live Demo
                  </a>
                )}
              </div>
            </div>

          </aside>
        </div>

        {/* OTHER PROJECTS */}
        <div className="pd-other">
          <h3>Other Projects</h3>
          <div className="pd-other-grid">
            {projects
              .filter((p) => p.slug !== project.slug)
              .map((p) => (
                <Link to={`/projects/${p.slug}`} key={p.slug} className="pd-other-card">
                  <div className="pd-other-color" style={{ background: p.color }} />
                  <div>
                    <p className="pd-other-title">{p.title}</p>
                    <p className="pd-other-tech">{p.tech.join(" · ")}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
}
