
import { useState } from "react";
import "./HalfReveal.scss";

function HalfReveal({ className = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`half-reveal ${className} ${
        isHovered ? "is-revealed" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}

export default HalfReveal;
