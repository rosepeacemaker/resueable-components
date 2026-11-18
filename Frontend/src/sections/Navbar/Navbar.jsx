
import { useState, useEffect } from "react";
import "./Navbar.scss";
import { MoonStar, Sun } from "lucide-react";
import AlphaEmblem from "../../components/3d/Aplhaemblem/AlphaEmblem";




function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  const closeMenu = () => setMenuOpen(false);

  const [theme, setTheme] = useState(
  () => localStorage.getItem("alpha-theme") || "light"
);

useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("alpha-theme", theme);
}, [theme]);

const toggleTheme = () => {
  setTheme((prev) => (prev === "light" ? "dark" : "light"));
};

  return (
    <header className="rose-navbar">
      
    <a href="/" className="rose-navbar__logo" onClick={closeMenu}>
 
<AlphaEmblem />
  <span className="rose-navbar__brand">
    <span className="rose-navbar__alpha">ALPHA</span>
    <span className="rose-navbar__ui">UI</span>
  </span>
</a>
      <button
        className={`rose-navbar__toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`rose-navbar__links ${menuOpen ? "open" : ""}`}>
        <a href="#components" onClick={closeMenu}>Components</a>
        <a href="#features" onClick={closeMenu}>Features</a>
        <a href="#docs" onClick={closeMenu}>Documentation</a>
        <a href="#ai" onClick={closeMenu}>Alpha AI</a>
      </nav>
      <button
  className="rose-navbar__theme"
  onClick={toggleTheme}
  aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
>
 {theme === "dark" ? (
  <MoonStar className="theme-icon moon-icon" />
) : (
  <Sun className="theme-icon sun-icon" />
)}
</button>

      <a
        href="https://github.com/rosepeacemaker"
        target="_blank"
        rel="noreferrer"
        className="rose-navbar__github"
      >
        GitHub ↗
      </a>
    </header>
  );
}

export default Navbar;
