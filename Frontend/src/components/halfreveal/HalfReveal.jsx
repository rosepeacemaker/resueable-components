
import "./HalfReveal.scss";

function HalfReveal({
  image,
  alt = "Reveal image",
  className = "",
}) {
  return (
    <div className={`half-reveal ${className}`}>
      <img
        src={image}
        alt={alt}
        className="half-reveal__image"
      />

      <div className="half-reveal__overlay" />
    </div>
  );
}

export default HalfReveal;
