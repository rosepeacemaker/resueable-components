
import { useState } from "react";
import "./HalfReveal.scss";

function HalfReveal({
  image,
  alt = "Reveal image",
  className = "",
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`half-reveal ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={alt}
        className="half-reveal__image"
      />

     <div
  className={`half-reveal__overlay ${
    isHovered ? "is-revealed" : ""
  }`}
/>
    </div>
  );
}

export default HalfReveal;
