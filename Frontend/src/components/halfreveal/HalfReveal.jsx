
import { useState, useRef, useEffect } from "react";
import { useId } from "react";
import "./HalfReveal.scss";

function HalfReveal({ className = "" }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [deform, setDeform] = useState({
    angle: 0,
    x: 0,
    y: 0,
  });

  const svgRef = useRef(null);
  const animationRef = useRef(null);
  const dragRef = useRef(null);
  const patternId = useId().replace(/:/g, "");

  const generatePath = () => {
    const { angle, x, y } = deform;
    const points = 100;
    const radius = 300;
    const cx = 300;
    const cy = 300;
    const coords = [];

    for (let i = 0; i < points; i++) {
      const theta = (i / points) * Math.PI * 2;
      const difference = Math.atan2(
        Math.sin(theta - angle),
        Math.cos(theta - angle)
      );

      const influence = Math.exp(
        -(difference * difference) / 0.30
      );

      const px = cx + Math.cos(theta) * radius + x * influence;
      const py = cy + Math.sin(theta) * radius + y * influence;

      coords.push(`${px},${py}`);
    }

    return `M ${coords.join(" L ")} Z`;
  };

  const handlePointerDown = (e) => {
    e.preventDefault();

    const rect = svgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 600;
    const y = ((e.clientY - rect.top) / rect.height) * 600;

    const angle = Math.atan2(y - 300, x - 300);

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    dragRef.current = {
      pointerX: e.clientX,
      pointerY: e.clientY,
      angle,
    };

    svgRef.current.setPointerCapture(e.pointerId);
    setIsDragging(true);
    setIsAnimating(false);
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current) return;

    const dx = (e.clientX - dragRef.current.pointerX) *
      (600 / svgRef.current.getBoundingClientRect().width);

    const dy = (e.clientY - dragRef.current.pointerY) *
      (600 / svgRef.current.getBoundingClientRect().height);

    setDeform({
      angle: dragRef.current.angle,
      x: Math.max(-180, Math.min(180, dx * 1.8)),
      y: Math.max(-180, Math.min(180, dy * 1.8)),
    });
  };

  const handlePointerUp = () => {
    if (!dragRef.current) return;

    dragRef.current = null;
    setIsDragging(false);
    setIsAnimating(true);

    let x = deform.x;
    let y = deform.y;
    let vx = 0;
    let vy = 0;

    const spring = () => {
     vx += -x * 0.09;
vy += -y * 0.09;

vx *= 0.84;
vy *= 0.84;

      x += vx;
      y += vy;

      setDeform((prev) => ({
        ...prev,
        x,
        y,
      }));

      if (
        Math.abs(x) < 0.3 &&
        Math.abs(y) < 0.3 &&
        Math.abs(vx) < 0.3 &&
        Math.abs(vy) < 0.3
      ) {
        setDeform({ angle: 0, x: 0, y: 0 });
        setIsAnimating(false);
        return;
      }

      animationRef.current = requestAnimationFrame(spring);
    };

    animationRef.current = requestAnimationFrame(spring);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const revealed = isHovered && !isDragging && !isAnimating;

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 600 600"
      className={`half-reveal ${className} ${
        revealed ? "is-revealed" : ""
      }`}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <defs>
       <pattern
  id={patternId}
  width="5"
  height="5"
  patternUnits="userSpaceOnUse"
>
  <circle
    cx="2.5"
    cy="2.5"
    r="1.5"
    fill="var(--rose-text)"
  />
</pattern>
      </defs>

      <path
        d={generatePath()}
        fill={`url(#${patternId})`}
      />
    </svg>
  );
}

export default HalfReveal;
