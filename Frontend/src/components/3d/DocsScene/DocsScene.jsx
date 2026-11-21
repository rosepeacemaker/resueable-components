
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Sparkles,
} from "@react-three/drei";

import "./DocsScene.scss";

function OrbitalModel() {
  const modelRef = useRef();
  const ringsRef = useRef();

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.12;
      modelRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    }

    if (ringsRef.current) {
      ringsRef.current.rotation.y += delta * 0.08;
      ringsRef.current.rotation.z += delta * 0.035;
    }
  });

  return (
    <group>
      {/* Main glass sphere */}
      <Float
        speed={0.7}
        rotationIntensity={0.15}
        floatIntensity={0.2}
      >
        <group ref={modelRef}>
          <mesh>
            <sphereGeometry args={[1.15, 96, 96]} />
            <meshPhysicalMaterial
              color="#c8baff"
              metalness={0.12}
              roughness={0.08}
              transmission={0.92}
              thickness={1.8}
              ior={1.3}
              clearcoat={1}
              clearcoatRoughness={0.05}
              transparent
              opacity={0.95}
            />
          </mesh>

          {/* Inner glowing core */}
          <mesh scale={0.48}>
            <icosahedronGeometry args={[1, 5]} />
            <meshPhysicalMaterial
              color="#a78bfa"
              emissive="#7155c8"
              emissiveIntensity={0.5}
              roughness={0.25}
              metalness={0.35}
            />
          </mesh>
        </group>
      </Float>

      {/* Metallic orbital rings */}
      <group ref={ringsRef}>
        <mesh rotation={[1.15, 0.25, 0.35]}>
          <torusGeometry args={[1.65, 0.012, 16, 180]} />
          <meshStandardMaterial
            color="#b9a7ff"
            metalness={0.9}
            roughness={0.22}
            emissive="#7659d5"
            emissiveIntensity={0.35}
          />
        </mesh>

        <mesh rotation={[0.5, 1.1, -0.45]}>
          <torusGeometry args={[1.85, 0.008, 16, 180]} />
          <meshStandardMaterial
            color="#78dce8"
            metalness={0.85}
            roughness={0.25}
            emissive="#42aab8"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* Floating particles */}
      <Sparkles
        count={100}
        scale={6}
        size={2}
        speed={0.25}
        opacity={0.55}
        color="#b9a7ff"
      />

      <Environment preset="studio" />
    </group>
  );
}

function DocsScene() {
  return (
    <div className="docs-scene">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.8} />

        <directionalLight
          position={[3, 4, 5]}
          intensity={2}
        />

        <pointLight
          position={[-3, 2, 2]}
          color="#a78bfa"
          intensity={12}
        />

        <pointLight
          position={[3, -2, -2]}
          color="#67c9d8"
          intensity={10}
        />

        <OrbitalModel />
      </Canvas>
    </div>
  );
}

export default DocsScene;
