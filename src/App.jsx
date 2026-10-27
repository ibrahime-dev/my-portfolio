import { useState, useEffect } from "react";
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
  const [theme,   setTheme]   = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

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
