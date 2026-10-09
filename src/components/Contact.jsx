import { useState } from "react";
import "./Contact.css";

const infoCards = [
  { label: "Timezone",      value: "EAT (UTC+3)",  sub: "East Africa Time"      },
  { label: "Response Time", value: "< 24 hours",   sub: "Usually same day"      },
  { label: "Availability",  value: "Open",          sub: "Freelance & full-time" },
];

const socials = [
  {
    name: "GitHub", handle: "@ibrahime-dev",
    href: "https://github.com/ibrahime-dev",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>,
  },
  {
    name: "LinkedIn", handle: "@ibrahimadem12", featured: true,
    href: "https://www.linkedin.com/in/ibrahimadem12",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M20.447 20.452H17.21v-5.569c0-1.327-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.984V9h3.104v1.561h.044c.433-.82 1.49-1.684 3.066-1.684 3.279 0 3.883 2.158 3.883 4.964v6.611zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm1.556 13.019H3.78V9h3.113v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    name: "Gmail", handle: "ibrahime8553@gmail.com",
    href: "mailto:ibrahime8553@gmail.com",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
];

const INITIAL = { name: "", email: "", subject: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim())                          errors.name    = "Name is required.";
  if (!form.email.trim())                         errors.email   = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email.";
  if (!form.subject.trim())                       errors.subject = "Subject is required.";
  if (!form.message.trim())                       errors.message = "Message is required.";
  else if (form.message.trim().length < 10)       errors.message = "Message must be at least 10 characters.";
  return errors;
}

export default function Contact() {
  const [form,    setForm]    = useState(INITIAL);
  const [errors,  setErrors]  = useState({});
  const [status,  setStatus]  = useState("idle"); // idle | sending | success | error

  const handle = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: "" }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("sending");

    /*
      Wire up to EmailJS:
      1. npm install @emailjs/browser
      2. Create account at emailjs.com
      3. Replace SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY below
      ---
      import emailjs from "@emailjs/browser";
      try {
        await emailjs.send("SERVICE_ID", "TEMPLATE_ID", {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        }, "PUBLIC_KEY");
        setStatus("success");
        setForm(INITIAL);
      } catch {
        setStatus("error");
      }
    */

    /* Simulated success for now — remove this block when EmailJS is wired up */
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setForm(INITIAL);
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        {/* HERO BANNER */}
        <div className="contact-hero">
          <div className="contact-hero-glow" aria-hidden="true" />
          <p className="contact-label">CONTACT</p>
          <h2 className="contact-title">Let's <span>Connect</span></h2>
          <p className="contact-subtitle">
            Have a project in mind or just want to chat? Fill out the form
            below or reach out through any of my social channels.
          </p>
        </div>

        {/* INFO CARDS */}
        <div className="info-cards-row">
          {infoCards.map((c) => (
            <div className="info-card" key={c.label}>
              <p className="info-card-label">{c.label}</p>
              <p className="info-card-value">{c.value}</p>
              <p className="info-card-sub">{c.sub}</p>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="contact-grid">
          {/* LEFT */}
          <div className="contact-left">
            <h2 className="contact-heading">Get in Touch</h2>
            <div className="contact-cards">
              <a href="mailto:ibrahime8553@gmail.com" className="contact-card">
                <div className="cc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <p className="cc-label">Email</p>
                  <p className="cc-value">ibrahime8553@gmail.com</p>
                </div>
              </a>
              <div className="contact-card contact-card-active">
                <div className="cc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="cc-label">Location</p>
                  <p className="cc-value cc-accent">Wollo, Ethiopia</p>
                </div>
              </div>
            </div>
            <div className="available-card">
              <div className="avail-dot" />
              <div>
                <p className="avail-title">Currently Available</p>
                <p className="avail-desc">Open to freelance projects and full-time opportunities. Response within 24 hours.</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-right">
            <h3 className="form-heading">Send a Message</h3>

            {status === "success" && (
              <div className="form-success">
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="form-error">
                ❌ Something went wrong. Please email me directly.
              </div>
            )}

            <form onSubmit={submit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input id="name" name="name" type="text" placeholder="John Doe"
                    value={form.name} onChange={handle} />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" placeholder="john@example.com"
                    value={form.email} onChange={handle} />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input id="subject" name="subject" type="text" placeholder="Project Inquiry"
                  value={form.subject} onChange={handle} />
                {errors.subject && <span className="field-error">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows={6}
                  placeholder="Tell me about your project..."
                  value={form.message} onChange={handle} />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="send-btn"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <><span className="spinner" /> Sending...</>
                ) : (
                  <>Send Message
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22,2 15,22 11,13 2,9"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* CONNECT ON SOCIAL */}
        <div className="social-section">
          <div className="social-section-head">
            <h3>Connect on Social</h3>
            <p>Follow me for updates, projects, and dev content.</p>
          </div>
          <div className="social-cards-grid">
            {socials.map((s) => (
              <a key={s.name} href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`social-card${s.featured ? " social-card-featured" : ""}`}
              >
                <div className="social-card-icon">{s.icon}</div>
                <div>
                  <p className="social-card-name">{s.name}</p>
                  <p className="social-card-handle">{s.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
