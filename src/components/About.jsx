import "./About.css";

const stats = [
  { value: "5",   label: "Portfolio Projects" },
  { value: "MERN", label: "Document Database Stack" },
  { value: "PERN", label: "SQL Database Stack" },
  { value: "IT",  label: "Wollo University" },
];

const whatIDo = [
  { icon: "🖥️", title: "Frontend", desc: "Creating responsive, user-friendly interfaces with React, JavaScript, HTML, and CSS." },
  { icon: "⚙️", title: "Backend", desc: "Building REST APIs and server-side features with Node.js and Express." },
  { icon: "🗄️", title: "Databases", desc: "Working with MongoDB and PostgreSQL as part of MERN and PERN applications." },
  { icon: "🛠️", title: "Learning by Building", desc: "Growing my skills through hands-on projects, clean code, and collaboration." },
];

export default function About() {
  return (
    <div className="about-page">

      {/* ── ABOUT INTRO ── */}
      <section id="about" className="about-section">
        <div className="about-content-side">
          <div className="about-inner">
            <p className="about-label">ABOUT ME</p>

            <h2 className="about-title">
              I'm <span>Ibrahim</span><br />Adem
            </h2>

            <div className="about-meta">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Gondar, Ethiopia
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                IT Student — Wollo University
              </span>
            </div>

            <p className="about-desc">
              Hello! I'm a Junior Full-Stack Developer and Information Technology
              student at Wollo University, Ethiopia, originally from Gondar.
            </p>

            <p className="about-desc">
              I specialize in MERN and PERN stack technologies, with an interest in
              building modern, responsive, and user-friendly web applications. I
              enjoy working on both frontend and backend development, from creating
              interactive user interfaces to developing REST APIs and managing
              databases.
            </p>

            <p className="about-desc">
              I'm continuously improving my skills through hands-on projects,
              exploring new technologies, and solving real-world problems with code.
              I'm passionate about learning, writing clean and maintainable code,
              and turning ideas into practical digital solutions.
            </p>

            <p className="about-desc">
              My goal is to grow as a full-stack developer, collaborate with other
              developers, and build impactful web applications that deliver great
              user experiences.
            </p>

            <div className="about-socials">
              <a href="https://github.com/ibrahime-dev" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ibrahimadem12" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M20.447 20.452H17.21v-5.569c0-1.327-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.984V9h3.104v1.561h.044c.433-.82 1.49-1.684 3.066-1.684 3.279 0 3.883 2.158 3.883 4.964v6.611zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm1.556 13.019H3.78V9h3.113v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:ibrahime8553@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>

            <div className="about-actions">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact"  className="btn-ghost">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <div className="about-stats">
        {stats.map((s) => (
          <div className="about-stat" key={s.label}>
            <span className="about-stat-value">{s.value}</span>
            <span className="about-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── WHAT I DO ── */}
      <section className="about-whatido">
        <div className="container">
          <div className="about-whatido-header">
            <p className="about-label">EXPERTISE</p>
            <h2>What I <span>Do</span></h2>
            <p className="about-whatido-sub">The areas I focus on as I grow as a full-stack developer.</p>
          </div>
          <div className="about-whatido-grid">
            {whatIDo.map((w) => (
              <div className="whatido-card" key={w.title}>
                <span className="whatido-icon">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
