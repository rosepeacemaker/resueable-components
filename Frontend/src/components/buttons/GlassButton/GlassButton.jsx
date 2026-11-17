
import "./GlassButton.scss";

function GlassButton({
  children,
  variant = "primary",
  size = "medium",
  type = "button",
  onClick,
  disabled = false,
  loading = false,
  className = "",
  ...rest
}) {
  const buttonClasses = [
    "rose-button",
    variant,
    size,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={buttonClasses}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
      {...rest}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default GlassButton;
