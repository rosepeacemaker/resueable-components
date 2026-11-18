
import "./Hero.scss";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { heroEntrance } from "../../animations/gsap/entrance";
import AlphaModel from "../../components/3d/AlphaModel";
import { useRef, useLayoutEffect } from "react"
import gsap from "gsap";
import HalfReveal from "../../components/HalfReveal/HalfReveal";
import SparkleParticles from "../../components/3d/SparkleParticles/SparkleParticles";
import ModelRings from "../../components/3d/modelRings/ModelRings";


function Hero() {

const heroRef = useRef(null);

const modelVisualRef = useRef(null);
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
  const ctx = gsap.context(() => {
    gsap.fromTo(
      modelVisualRef.current,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, heroRef);

  return () => ctx.revert();
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

<HalfReveal
  className="hero__halftone"
  image="https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1200"
  alt="Abstract background"
/>
  <ModelRings layer="back" />

  <SparkleParticles />

  <div className="hero__floating-label">
    ALPHA UI
  </div>

  <div className="hero__canvas" ref={modelVisualRef}>
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45, near: 0.1, far: 100 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.8} />

      <directionalLight position={[5, 5, 5]} intensity={2.2} />

      <directionalLight
        position={[-5, 2, -5]}
        intensity={1.2}
        color="#A78BFA"
      />

      <pointLight
        position={[0, 2, 3]}
        intensity={1.5}
        color="#C4B5FD"
        distance={8}
      />

      <pointLight
        position={[-3, -2, -2]}
        intensity={0.8}
        color="#A78BFA"
        distance={7}
      />

      <pointLight
        position={[0, 0, -3]}
        intensity={1.2}
        color="#A78BFA"
        distance={6}
      />

      <Suspense fallback={null}>
        <AlphaModel />
      </Suspense>
    </Canvas>
  </div>

  <ModelRings layer="front" />

</div>



    </section>
  );
}

export default Hero;
