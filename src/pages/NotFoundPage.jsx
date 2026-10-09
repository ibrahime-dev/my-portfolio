import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <div className="nf-page">
      <div className="nf-glow" aria-hidden="true" />
      <div className="nf-content">
        <p className="nf-code">404</p>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="nf-btn">← Back Home</Link>
      </div>
    </div>
  );
}
