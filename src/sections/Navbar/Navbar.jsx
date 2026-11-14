import "./Navbar.scss";

function Navbar() {
  return (
    <header className="rose-navbar">
      <a href="/" className="rose-navbar__logo">
        ROSE<span> UI</span>
      </a>

      <nav className="rose-navbar__links">
        <a href="#components">Components</a>
        <a href="#features">Features</a>
        <a href="#docs">Documentation</a>
        <a href="#ai">ROSE AI</a>
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