import { useEffect, useState } from "react";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);
  const images = project.images?.filter(Boolean) || [project.image];

  /* close on Escape key */
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        {/* header */}
        <div className="modal-header" style={{ "--card-color": project.color }}>
          <div className="modal-header-overlay" />
          <div className="modal-header-content">
            <div className="modal-meta">
              <span className="modal-category">{project.category}</span>
              <span className={`modal-status ${project.status === "Completed" ? "badge-done" : "badge-wip"}`}>
                {project.status}
              </span>
            </div>
            <h2>{project.title}</h2>
            <p>{project.tagline}</p>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* body */}
        <div className="modal-body">

          {/* screenshot gallery */}
          <div className="modal-screenshot">
            <img
              src={images[imgIndex]}
              alt={`${project.title} screenshot ${imgIndex + 1}`}
              onError={(e) => { e.currentTarget.parentElement.classList.add("no-img"); e.currentTarget.style.display = "none"; }}
            />
            <div className="modal-screenshot-fallback">
              <p>📸 Screenshot coming soon</p>
              <code>public/projects/{project.slug}.png</code>
            </div>
            {images.length > 1 && (
              <div className="modal-gallery-controls">
                <button
                  className="gallery-btn"
                  onClick={() => setImgIndex((i) => (i - 1 + images.length) % images.length)}
                  aria-label="Previous"
                >‹</button>
                <span className="gallery-dots">
                  {images.map((_, i) => (
                    <span
                      key={i}
                      className={`gallery-dot${i === imgIndex ? " active" : ""}`}
                      onClick={() => setImgIndex(i)}
                    />
                  ))}
                </span>
                <button
                  className="gallery-btn"
                  onClick={() => setImgIndex((i) => (i + 1) % images.length)}
                  aria-label="Next"
                >›</button>
              </div>
            )}
          </div>

          <div className="modal-cols">
            {/* left */}
            <div className="modal-main">
              <div className="modal-section">
                <h3>Overview</h3>
                <p>{project.desc}</p>
              </div>

              <div className="modal-section">
                <h3>Problem It Solves</h3>
                <p>{project.problem}</p>
              </div>

              <div className="modal-section">
                <h3>Key Features</h3>
                <ul>
                  {project.features.map((f, i) => (
                    <li key={i}><span className="feat-check">✓</span>{f}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* right */}
            <aside className="modal-side">
              <div className="modal-info-card">
                <h4>Technologies</h4>
                <div className="modal-tech">
                  {project.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>

              <div className="modal-info-card">
                <h4>My Role</h4>
                <p>{project.role}</p>
              </div>

              <div className="modal-info-card modal-links">
                <a href={project.repo} target="_blank" rel="noreferrer" className="modal-link-btn modal-github">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                  GitHub
                </a>
                {project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="modal-link-btn modal-demo">
                    🌐 Live Demo
                  </a>
                )}
              </div>
            </aside>
          </div>
        </div>

      </div>
    </div>
  );
}
