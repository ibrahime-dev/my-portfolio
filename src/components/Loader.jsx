import { useEffect, useState } from "react";
import "./Loader.css";
import myPhoto from "../assets/myphoto.png";

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [dotIndex, setDotIndex] = useState(0);

  /* progress bar fills over ~2.8s */
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 1.2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  /* animate dots */
  useEffect(() => {
    const interval = setInterval(() => {
      setDotIndex((d) => (d + 1) % 4);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  /* call onDone after animation finishes */
  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(onDone, 600);
      return () => clearTimeout(t);
    }
  }, [progress, onDone]);

  return (
    <div className={`loader${progress >= 100 ? " loader-exit" : ""}`}>
      {/* background glow */}
      <div className="loader-glow" aria-hidden="true" />

      <div className="loader-content">
        {/* avatar */}
        <div className="loader-avatar-wrap">
          <div className="loader-avatar-ring" />
          <div className="loader-avatar">
            <img
              src={myPhoto}
              alt="Ibrahim Adem"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <span className="loader-initials">IA</span>
          </div>
        </div>

        {/* name & role */}
        <h1 className="loader-name">Ibrahim Adem</h1>
        <p className="loader-role">Full-Stack Developer</p>

        {/* dots */}
        <div className="loader-dots">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`loader-dot${i === dotIndex ? " active" : ""}`}
            />
          ))}
        </div>

        {/* progress bar */}
        <div className="loader-bar-track">
          <div
            className="loader-bar-fill"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
