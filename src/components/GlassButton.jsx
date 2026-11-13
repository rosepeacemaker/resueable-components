import "./GlassButton.css";

function GlassButton({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false
}) {
  return (
    <button
      className={`rose-button ${variant} ${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default GlassButton;