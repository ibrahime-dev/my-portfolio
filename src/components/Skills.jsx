import { useState } from "react";
import "./Skills.css";

const categories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "🖥️",
    color: "#087ea4",
    glow: "rgba(8,126,164,0.12)",
    skills: [
      { name: "HTML5",             icon: "🌐", level: "Advanced",     pct: 92 },
      { name: "CSS3",              icon: "🎨", level: "Advanced",     pct: 90 },
      { name: "JavaScript",        icon: "⚡", level: "Advanced",     pct: 85 },
      { name: "React.js",          icon: "⚛️", level: "Intermediate", pct: 75 },
      { name: "Tailwind CSS",      icon: "🌊", level: "Intermediate", pct: 72 },
      { name: "Responsive Design", icon: "📱", level: "Advanced",     pct: 88 },
    ],
  },
  {
    id: "backend",
    title: "Backend & Frameworks",
    icon: "⚙️",
    color: "#7054b8",
    glow: "rgba(112,84,184,0.12)",
    skills: [
      { name: "Laravel",     icon: "🔴", level: "Advanced",     pct: 85 },
      { name: "Express.js",  icon: "🚀", level: "Intermediate", pct: 72 },
      { name: "Node.js",     icon: "🟢", level: "Intermediate", pct: 70 },
      { name: "ASP.NET MVC", icon: "🔷", level: "Intermediate", pct: 65 },
      { name: "PHP",         icon: "🐘", level: "Advanced",     pct: 88 },
      { name: "REST APIs",   icon: "🔗", level: "Advanced",     pct: 82 },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "🗄️",
    color: "#168453",
    glow: "rgba(22,132,83,0.12)",
    skills: [
      { name: "MySQL",      icon: "🐬", level: "Advanced",     pct: 85 },
      { name: "MongoDB",    icon: "🍃", level: "Intermediate", pct: 68 },
      { name: "PostgreSQL", icon: "🐘", level: "Intermediate", pct: 62 },
      { name: "SQL Server", icon: "🗄️", level: "Intermediate", pct: 65 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Design",
    icon: "🛠️",
    color: "#b45309",
    glow: "rgba(180,83,9,0.12)",
    skills: [
      { name: "Git",             icon: "🌿", level: "Advanced",     pct: 88 },
      { name: "GitHub",          icon: "🐙", level: "Advanced",     pct: 90 },
      { name: "VS Code",         icon: "💻", level: "Advanced",     pct: 95 },
      { name: "Postman",         icon: "📮", level: "Intermediate", pct: 72 },
      { name: "MongoDB Compass", icon: "🧭", level: "Intermediate", pct: 65 },
      { name: "Figma",           icon: "🎭", level: "Intermediate", pct: 60 },
    ],
  },
];

const levelColors = {
  Advanced:     { bg: "rgba(52,211,153,0.12)", text: "#34d399", border: "rgba(52,211,153,0.3)" },
  Intermediate: { bg: "rgba(8,126,164,0.08)",  text: "#087ea4", border: "rgba(8,126,164,0.22)" },
};

const allTech = [
  "HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Responsive Design",
  "Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL",
  "Git", "GitHub", "VS Code", "Postman",
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const current = categories.find((c) => c.id === activeTab);

  return (
    <div className="skills-page">
      <section id="skills" className="skills-section">

        {/* ── BACKGROUND DECORATION ── */}
        <div className="skills-bg-grid"    aria-hidden="true" />
        <div className="skills-bg-orb-1"   aria-hidden="true" />
        <div className="skills-bg-orb-2"   aria-hidden="true" />

        <div className="container">

          {/* ── HEADING ── */}
          <div className="skills-heading">
            <div className="skills-heading-badge">
              <span className="badge-line" />
              <span>TECHNICAL SKILLS</span>
              <span className="badge-line" />
            </div>
            <h2 className="skills-title">
              Skills &amp; <span>Technologies</span>
            </h2>
            <p className="skills-subtitle">
              Technologies I’m learning and using in projects, with a focus on MERN and PERN stack development.
            </p>
          </div>

          {/* ── CATEGORY TABS ── */}
          <div className="skills-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`skills-tab${activeTab === cat.id ? " active" : ""}`}
                style={activeTab === cat.id ? { "--tab-color": cat.color, "--tab-glow": cat.glow } : {}}
                onClick={() => setActiveTab(cat.id)}
              >
                <span className="tab-icon">{cat.icon}</span>
                {cat.title}
              </button>
            ))}
          </div>

          {/* ── SKILL CARDS ── */}
          <div
            className="skills-cards"
            style={{ "--cat-color": current.color, "--cat-glow": current.glow }}
          >
            {current.skills.map((skill) => {
              const lvl = levelColors[skill.level];
              const isHovered = hoveredSkill === `${current.id}-${skill.name}`;
              return (
                <div
                  key={skill.name}
                  className={`skill-card${isHovered ? " hovered" : ""}`}
                  onMouseEnter={() => setHoveredSkill(`${current.id}-${skill.name}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{ "--cat-color": current.color, "--cat-glow": current.glow }}
                >
                  {/* animated border gradient */}
                  <div className="skill-card-border" />

                  {/* icon */}
                  <div className="skill-icon-wrap">
                    <span className="skill-icon">{skill.icon}</span>
                    <div className="skill-icon-glow" />
                  </div>

                  {/* info */}
                  <div className="skill-info">
                    <div className="skill-name-row">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.pct}%</span>
                    </div>

                    {/* progress bar */}
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ "--w": `${skill.pct}%`, "--color": current.color }}
                      />
                    </div>

                    {/* level badge */}
                    <span
                      className="skill-level"
                      style={{ background: lvl.bg, color: lvl.text, border: `1px solid ${lvl.border}` }}
                    >
                      {skill.level}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── TECH CLOUD ── */}
          <div className="skills-cloud">
            <p className="cloud-label">Technologies I Work With</p>
            <div className="cloud-pills">
              {allTech.map((t) => (
                <span className="cloud-pill" key={t}>{t}</span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
