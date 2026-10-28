import { useEffect, useState } from "react";
import "./App.css";

import Navbar    from "./components/Navbar";
import Hero      from "./components/Hero";
import About     from "./components/About";
import Skills    from "./components/Skills";
import Projects  from "./components/Projects";
import Services  from "./components/Services";
import Contact   from "./components/Contact";
import CTA       from "./components/CTA";
import Footer    from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => current === "dark" ? "light" : "dark");

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
