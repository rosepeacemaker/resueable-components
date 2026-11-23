
import { useState } from "react";
import "./Docs.scss";
import DocsScene from "../../components/3d/DocsScene/DocsScene";
import { navigation } from "../../config/docsNavigation";
import ComponentPlayground from "./componentsPlayground/ComponentPlayground";

function Docs() {
  const [activeItem, setActiveItem] = useState("Introduction");

  const features = [
    {
      icon: "✧",
      title: "Modern Design",
      description: "Clean and elegant UI",
      color: "violet",
    },
    {
      icon: "◉",
      title: "Fully Customizable",
      description: "Make it your own",
      color: "aqua",
    },
    {
      icon: "⬡",
      title: "3D Components",
      description: "Next-level interactions",
      color: "purple",
    },
    {
      icon: "✦",
      title: "Developer Friendly",
      description: "Easy to integrate",
      color: "blue",
    },
  ];

  return (
    <main className="docs">
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
            <kbd>Ctrl K</kbd>
          </button>

          <button className="docs__icon-btn" aria-label="Theme">
            ☼
          </button>

          <button className="docs__github">
            GitHub ↗
          </button>
        </div>
      </header>

      <div className="docs__layout">
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

          <div className="docs__sidebar-card">
            <span className="docs__sidebar-star">✦</span>
            <strong>Build Something Amazing</strong>
            <p>With ALPHA UI</p>
            <button onClick={() => setActiveItem("Buttons")}>
              Get Started →
            </button>
          </div>
        </aside>

        <section className="docs__content">
          <div className="docs__breadcrumb">
            ALPHA UI <span>/</span> DOCUMENTATION <span>/</span>{" "}
            {activeItem.toUpperCase()}
          </div>

          <section className="docs__hero">
            <DocsScene />

            <div className="docs__hero-copy">
              <span className="docs__eyebrow">
                ✦ &nbsp; WELCOME TO <span>ALPHA UI</span>
              </span>

              <h1>
                {activeItem === "Introduction" ? (
                  <>
                    Introduction to
                    <br />
                    ALPHA <span>UI</span>
                  </>
                ) : (
                  activeItem
                )}
              </h1>

              <p>
                A modern, flexible and beautifully designed UI library
                for your next project. Build faster, create better.
              </p>

              <div className="docs__hero-actions">
                <button
                  className="docs__primary-btn"
                  onClick={() => setActiveItem("Installation")}
                >
                  Get Started <span>→</span>
                </button>

                <button
                  className="docs__secondary-btn"
                  onClick={() => setActiveItem("3D Components")}
                >
                  <span>▶</span> Watch Demo
                </button>
              </div>
            </div>
          </section>

          <section className="docs__overview-card" id="overview">
            <div className="docs__overview-copy">
              <h2><span>✦</span> What is ALPHA UI?</h2>
              <p>
                ALPHA UI is a modern React component library, designed
                to help you build stunning web applications with ease.
                From beautiful components to smooth animations, ALPHA UI
                brings your ideas to life.
              </p>
            </div>

            <div className="docs__overview-art">
              <div className="docs__wave docs__wave-one" />
              <div className="docs__wave docs__wave-two" />
              <div className="docs__wave docs__wave-three" />
            </div>
          </section>

          <section className="docs__features">
            <h2><span>⬡</span> Key Features</h2>

            <div className="docs__feature-grid">
              {features.map((feature) => (
                <article
                  className={`docs__feature-card ${feature.color}`}
                  key={feature.title}
                >
                  <span className="docs__feature-icon">
                    {feature.icon}
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="docs__playground-section" id="preview">
            <div className="docs__section-heading">
              <span>INTERACTIVE PLAYGROUND</span>
              <h2>Explore the components</h2>
              <p>
                Customize components, preview your changes and
                generate code for your project.
              </p>
            </div>

            <ComponentPlayground />
          </section>

          <section className="docs__section" id="usage">
            <h2>Usage</h2>

            <p>
              Import reusable components into your React application
              and start building.
            </p>

            <div className="docs__code">
              <div className="docs__code-header">
                <span>Example.jsx</span>
                <span>JSX</span>
              </div>

              <pre>
                <code>{`import { Component } from "alpha-ui";

function App() {
  return <Component />;
}

export default App;`}</code>
              </pre>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default Docs;
