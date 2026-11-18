
import "./Hero.scss";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { heroEntrance } from "../../animations/gsap/entrance";
import AlphaModel from "../../components/3d/AlphaModel";
import { useRef, useLayoutEffect } from "react"
import ModelRings from "../../components/3d/modelRings/ModelRings";
import AlphaEmblem from "../../components/3d/Aplhaemblem/AlphaEmblem";


function Hero() {

const heroRef = useRef(null);


const badgeRef = useRef(null);
const titleRef = useRef(null);
const descriptionRef = useRef(null);
const actionsRef = useRef(null);
const statsRef = useRef(null);

useLayoutEffect(() => {
  const timeline = heroEntrance({
    badge: badgeRef.current,
    title: titleRef.current,
    description: descriptionRef.current,
    actions: actionsRef.current,
    stats: statsRef.current,
  });

  return () => timeline?.revert();
}, []);

useLayoutEffect(() => {
  const ctx = heroEntrance(heroRef.current);
  return () => ctx?.revert?.();
}, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero__content">

       <span className="hero__badge" ref={badgeRef}>
          ✦ THE NEXT GENERATION OF REACT UI
        </span>

      <h1 className="hero__title" ref={titleRef}>
          Build Beyond
          <span> The Ordinary.</span>
        </h1>

        <p className="hero__description" ref={descriptionRef}>
          Create beautiful digital experiences with reusable
          React components, smooth animations and immersive 3D.
        </p>

        <div className="hero__actions" ref={actionsRef}>
          <a href="#components" className="hero__button hero__button--primary">
            Explore Components ↗
          </a>
  
          <a href="#docs" className="hero__button hero__button--secondary">
            View Documentation
          </a>
        </div>

        <div className="hero__stats" ref={statsRef}>
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
  <ModelRings />
    <AlphaEmblem />
  <div className="hero__canvas">
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45, near: 0.1, far: 100 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <directionalLight position={[-5, 2, -5]} intensity={1} />

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
