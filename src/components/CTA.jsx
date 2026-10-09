import "./CTA.css";

export default function CTA() {
  return (
    <div className="cta-section">
      <div className="cta-glow" aria-hidden="true" />
      <div className="cta-inner">
        <h2 className="cta-title">
          Let's Build Something<br />
          <span>Amazing</span> Together
        </h2>
        <p className="cta-subtitle">
          Have a project in mind? I'm always open to discussing new
          opportunities, creative ideas, or potential collaborations.
        </p>
        <div className="cta-actions">
          <a href="#contact" className="cta-btn-primary">Start a Conversation →</a>
          <a href="mailto:ibrahime8553@gmail.com" className="cta-btn-ghost">ibrahime8553@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
