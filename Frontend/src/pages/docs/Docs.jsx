
import { useState } from "react";
import "./Docs.scss";
import { navigation } from "../../config/docsNavigation";




function Docs() {
  const [activeItem, setActiveItem] = useState("Introduction");

  return (
    <main className="docs">

      {/* TOP HEADER */}
      <header className="docs__header">
        <div className="docs__brand">
          <span className="docs__brand-icon">A</span>
          <span>ALPHA UI</span>
          <span className="docs__version">DOCS</span>
        </div>

        <div className="docs__header-actions">
          <button className="docs__search">
            <span>⌕</span>
            Search documentation...
            <kbd>⌘ K</kbd>
          </button>

          <button className="docs__icon-btn">☼</button>
          <button className="docs__github">GitHub ↗</button>
        </div>
      </header>

      {/* MAIN DOCUMENTATION AREA */}
      <div className="docs__layout">

        {/* LEFT SIDEBAR */}
        <aside className="docs__sidebar">
          <div className="docs__sidebar-heading">
            DOCUMENTATION
          </div>

          {navigation.map((group) => (
            <div className="docs__nav-group" key={group.title}>
              <h3>{group.title}</h3>

              {group.items.map((item) => {
  const Icon = item.icon;

  return (
    <button
      key={item.label}
      className={`docs__nav-item ${
        activeItem === item.label ? "active" : ""
      }`}
      onClick={() => setActiveItem(item.label)}
    >
      <Icon size={17} strokeWidth={1.8} />
      <span>{item.label}</span>
    </button>
  );
})}
            </div>
          ))}
        </aside>

        {/* CENTER CONTENT */}
        <section className="docs__content">
          <div className="docs__breadcrumb">
            ALPHA UI / DOCUMENTATION / {activeItem.toUpperCase()}
          </div>

          <div className="docs__intro">
            <span className="docs__eyebrow">ALPHA UI LIBRARY</span>

            <h1>{activeItem}</h1>

            <p>
              Explore, understand and customize reusable UI
              elements built for modern web applications.
            </p>
          </div>

          <div className="docs__content-divider" />

          <section className="docs__section">
            <h2>Overview</h2>

            <p>
              Welcome to ALPHA UI. This documentation helps you
              explore reusable components, understand their
              functionality and integrate them into your projects.
            </p>
          </section>

          <section className="docs__section">
            <h2>Live Preview</h2>

            <div className="docs__preview">
              <div className="docs__preview-label">
                COMPONENT PREVIEW
              </div>

              <button className="docs__demo-button">
                Explore Component
              </button>
            </div>
          </section>

          <section className="docs__section">
            <h2>Usage</h2>

            <div className="docs__code">
              <div className="docs__code-header">
                <span>Example.jsx</span>
                <button>Copy</button>
              </div>

              <pre>
                <code>{`import { Component } from "alpha-ui";

function App() {
  return <Component />;
}`}</code>
              </pre>
            </div>
          </section>
        </section>

        {/* RIGHT PANEL */}
        <aside className="docs__right-panel">

          <div className="docs__panel-heading">
            <span>ON THIS PAGE</span>
          </div>

          <nav className="docs__page-links">
            <a href="#overview">Overview</a>
            <a href="#preview">Live Preview</a>
            <a href="#usage">Usage</a>
          </nav>

          <div className="docs__ai-card">
            <div className="docs__ai-title">
              <span className="docs__ai-icon">✦</span>
              <span>AI Assistant</span>
              <span className="docs__ai-status" />
            </div>

            <p>
              Need help with {activeItem.toLowerCase()}?
              Ask AI for guidance and code explanations.
            </p>

            <button className="docs__ai-suggestion">
              Explain this page <span>↗</span>
            </button>

            <div className="docs__ai-input">
              <span>Ask anything...</span>
              <button>↑</button>
            </div>

            <span className="docs__ai-note">
              AI assistance coming soon
            </span>
          </div>

        </aside>
      </div>
    </main>
  );
}

export default Docs;
