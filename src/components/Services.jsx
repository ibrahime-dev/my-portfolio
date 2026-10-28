import "./Services.css";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Frontend Development",
    desc: "Creating responsive, user-friendly interfaces with React, JavaScript, HTML, and CSS, with an emphasis on clear layouts and maintainable components.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <rect x="2" y="7" width="20" height="5" rx="1"/><rect x="2" y="14" width="20" height="5" rx="1"/>
      </svg>
    ),
    title: "Backend Development",
    desc: "Building server-side features and REST APIs with Node.js and Express as part of my MERN and PERN stack projects.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: "Database Design",
    desc: "Practicing data modeling and database integration with MongoDB and PostgreSQL for full-stack applications.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Full-Stack Web Apps",
    desc: "Developing practical web applications across the frontend, API, and database layers, with a focus on the MERN and PERN stacks.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
      </svg>
    ),
    title: "REST API Development",
    desc: "Learning and applying REST API patterns with Express.js, connecting backend routes to frontend applications and databases.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Learning & Collaboration",
    desc: "Continuously improving through hands-on projects, exploring new technologies, and collaborating with other developers.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">

        <div className="services-header">
          <h2>Learning by building.<br />Growing through collaboration.</h2>
          <p>I’m developing my full-stack skills by turning ideas into practical, user-friendly web applications.</p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* ── PROCESS ── */}
        <div className="process-section">
          <h3 className="process-title">How I Work</h3>
          <div className="process-steps">
            {[
              { num: "01", title: "Discovery",    desc: "Understand your goals, requirements, and target audience." },
              { num: "02", title: "Planning",     desc: "Define architecture, tech stack, and project milestones." },
              { num: "03", title: "Development",  desc: "Build clean, maintainable code with regular updates." },
              { num: "04", title: "Review",       desc: "Test the work, learn from feedback, and make improvements." },
            ].map((step, i, arr) => (
              <div className="process-step" key={step.num}>
                <div className="step-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                {i < arr.length - 1 && <div className="step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
