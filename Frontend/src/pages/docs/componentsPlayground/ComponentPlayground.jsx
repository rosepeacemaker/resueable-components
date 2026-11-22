
import { useState } from "react";
import "./ComponentPlayground.scss";

function ComponentPlayground() {
  const [activeTab, setActiveTab] = useState("Preview");
  const [variant, setVariant] = useState("primary");
  const [buttonColor, setButtonColor] = useState("#7155A8");
  const [radius, setRadius] = useState(10);
  const [size, setSize] = useState("medium");
  const [label, setLabel] = useState("Get Started");

  const sizes = {
    small: { padding: "8px 16px", fontSize: "13px" },
    medium: { padding: "12px 24px", fontSize: "15px" },
    large: { padding: "15px 30px", fontSize: "17px" },
  };

  const buttonStyle = {
    ...sizes[size],
    borderRadius: `${radius}px`,
    background: variant === "primary" ? buttonColor : "transparent",
    color: variant === "primary" ? "#ffffff" : buttonColor,
    border: `1px solid ${buttonColor}`,
    cursor: "pointer",
    fontWeight: 600,
    transition: "all 0.25s ease",
  };

  const generatedCode = `<button
  style={{
    background: "${variant === "primary" ? buttonColor : "transparent"}",
    color: "${variant === "primary" ? "#ffffff" : buttonColor}",
    border: "1px solid ${buttonColor}",
    borderRadius: "${radius}px",
    padding: "${sizes[size].padding}",
    fontSize: "${sizes[size].fontSize}"
  }}
>
  ${label}
</button>`;

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      alert("Code copied!");
    } catch {
      alert("Unable to copy code.");
    }
  };

  return (
    <div className="component-playground">
      <div className="playground__header">
        <div>
          <span className="playground__eyebrow">INTERACTIVE PLAYGROUND</span>
          <h2>Button Component</h2>
          <p>Customize your button and explore its variations.</p>
        </div>
      </div>

      <div className="playground__tabs">
        {["Preview", "Customize", "Code"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="playground__workspace">
        {activeTab === "Preview" && (
          <div className="playground__preview">
            <button style={buttonStyle}>{label}</button>
          </div>
        )}

        {activeTab === "Customize" && (
          <div className="playground__controls">
            <label>
              Button Label
              <input
                value={label}
                onChange={(e) => setLabel(e.target.value)}
              />
            </label>

            <label>
              Variant
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
              >
                <option value="primary">Primary</option>
                <option value="outline">Outline</option>
              </select>
            </label>

            <label>
              Button Color
              <input
                type="color"
                value={buttonColor}
                onChange={(e) => setButtonColor(e.target.value)}
              />
            </label>

            <label>
              Size
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </label>

            <label>
              Border Radius: {radius}px
              <input
                type="range"
                min="0"
                max="40"
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
              />
            </label>
          </div>
        )}

        {activeTab === "Code" && (
          <div className="playground__code">
            <button onClick={copyCode}>Copy Code</button>
            <pre>
              <code>{generatedCode}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default ComponentPlayground;
