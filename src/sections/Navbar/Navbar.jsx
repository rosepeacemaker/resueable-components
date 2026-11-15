
import { useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="rose-navbar">
      <a href="/" className="rose-navbar__logo" onClick={closeMenu}>
        ALPHA<span> UI</span>
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
