
import "./Hero.scss";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import AlphaModel from "../../components/3d/AlphaModel";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">

        <span className="hero__badge">
          ✦ THE NEXT GENERATION OF REACT UI
        </span>

        <h1 className="hero__title">
          Build Beyond
          <span> The Ordinary.</span>
        </h1>

        <p className="hero__description">
          Create beautiful digital experiences with reusable
          React components, smooth animations and immersive 3D.
        </p>

        <div className="hero__actions">
          <a href="#components" className="hero__button hero__button--primary">
            Explore Components ↗
          </a>

          <a href="#docs" className="hero__button hero__button--secondary">
            View Documentation
          </a>
        </div>

        <div className="hero__stats">
          <div>
            <strong>30+</strong>
            <span>Components</span>
          </div>

          <div>
            <strong>3D</strong>
            <span>Experiences</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Possibilities</span>
          </div>
        </div>

      </div>

      
<div className="hero__visual">
  <div className="hero__canvas">
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <directionalLight
        position={[-5, 2, -5]}
        intensity={1}
      />

      <Suspense fallback={null}>
        <AlphaModel />
      </Suspense>
    </Canvas>
  </div>
</div>

    </section>
  );
}

export default Hero;
