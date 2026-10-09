import "./Services.css";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Frontend Development",
    desc: "Building responsive, high-performance web applications using HTML, CSS, JavaScript, and React.js. I focus on clean component architecture, smooth interactions, and pixel-perfect UIs that work across all devices and screen sizes.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <rect x="2" y="7" width="20" height="5" rx="1"/><rect x="2" y="14" width="20" height="5" rx="1"/>
      </svg>
    ),
    title: "Backend Development",
    desc: "Developing robust server-side applications and RESTful APIs using Node.js, Express.js, PHP, and Laravel. I handle authentication, middleware, error handling, and business logic to power your full-stack applications reliably and securely.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: "Database Design",
    desc: "Designing and managing relational and non-relational databases including MySQL, PostgreSQL, SQL Server, and MongoDB. I structure data efficiently with proper schemas, relationships, and query optimisation for scalable applications.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Full-Stack Web Apps",
    desc: "End-to-end development of complete web applications — from UI design to database architecture. I deliver fully functional, deployed projects using the MERN stack, PHP/Laravel, or ASP.NET MVC depending on project requirements.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
      </svg>
    ),
    title: "REST API Development",
    desc: "Designing and building clean, well-documented RESTful APIs with proper authentication (JWT/sessions), validation, and error handling. I ensure APIs are secure, scalable, and easy to integrate with any frontend or mobile client.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "ASP.NET MVC Applications",
    desc: "Building structured, maintainable web applications using ASP.NET MVC and C#. I implement the Model-View-Controller pattern for clean separation of concerns, with SQL Server integration and secure user management.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">

        <div className="services-header">
          <h2>Built for innovation.<br />Designed for results.</h2>
          <p>Comprehensive solutions to transform your ideas into exceptional digital experiences.</p>
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
              { num: "04", title: "Delivery",     desc: "Test, review, deploy, and hand over with documentation." },
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
