
import "./GlassButton.scss";

function GlassButton({
  children,
  variant = "primary",
  size = "medium",
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <button
      className={`rose-button ${variant} ${size}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default GlassButton;
