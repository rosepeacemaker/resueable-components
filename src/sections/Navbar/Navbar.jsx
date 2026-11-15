import "./Navbar.scss";

function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="rose-navbar__logo">
        ALPHA<span> UI</span>
      </a>

      <nav className="navbar__links">
        <a href="#components">Components</a>
        <a href="#features">Features</a>
        <a href="#docs">Documentation</a>
        <a href="#ai">ROSE AI</a>
      </nav>

      <a
        href="https://github.com/rosepeacemaker"
        target="_blank"
        rel="noreferrer"
        className="navbar__github"
      >
        GitHub ↗
      </a>
    </header>
  );
}

export default Navbar;