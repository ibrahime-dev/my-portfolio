import "./CTA.css";

export default function CTA() {
  return (
    <div className="cta-section">
      <div className="cta-glow" aria-hidden="true" />
      <div className="cta-inner">
        <h2 className="cta-title">
          Let’s Learn and<br />
          <span>Build</span> Together
        </h2>
        <p className="cta-subtitle">
          I’m looking to grow as a full-stack developer, connect with other
          developers, and work together on useful web applications.
        </p>
        <div className="cta-actions">
          <a href="#contact" className="cta-btn-primary">Start a Conversation →</a>
          <a href="mailto:ibrahime8553@gmail.com" className="cta-btn-ghost">ibrahime8553@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
