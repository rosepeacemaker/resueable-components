
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Sparkles,
  Lightformer,
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
  ringsRef.current.rotation.y += delta * 0.055;
  ringsRef.current.rotation.z += delta * 0.025;
  ringsRef.current.rotation.x =
    Math.sin(state.clock.elapsedTime * 0.18) * 0.12;
}
  });

  return (
    <group>
      {/* Main glass sphere */}
    <Float
  speed={0.35}
  rotationIntensity={0.3}
  floatIntensity={0.45}
>
        <group ref={modelRef}>
          <mesh>
            <sphereGeometry args={[1.15, 96, 96]} />
  <meshPhysicalMaterial
  color="#d8c8ff"
  metalness={0.05}
  roughness={0.045}
  transmission={0.95}
  thickness={1.4}
  ior={1.25}
  clearcoat={1}
  clearcoatRoughness={0.04}
  attenuationColor="#cbb8ff"
  attenuationDistance={2.5}
  transparent
  opacity={1}
/>
          </mesh>

          {/* Inner glowing core */}
 <mesh scale={0.48}>
  <icosahedronGeometry args={[1, 5]} />
 <meshPhysicalMaterial
  color="#e5dcff"
  emissive="#b9a8e8"
  emissiveIntensity={0.08}
  roughness={0.32}
  metalness={0.12}
  clearcoat={1}
  clearcoatRoughness={0.12}
/>
</mesh>
        </group>
      </Float>

      {/* Metallic orbital rings */}
      <group ref={ringsRef}>
        <mesh rotation={[1.15, 0.25, 0.35]}>
          <torusGeometry args={[1.65, 0.012, 16, 180]} />
          <meshStandardMaterial
  color="#c8c1e8"
  metalness={0.95}
  roughness={0.3}
  emissive="#8b78c8"
  emissiveIntensity={0.12}
/>
        </mesh>

        <mesh rotation={[0.5, 1.1, -0.45]}>
          <torusGeometry args={[1.85, 0.008, 16, 180]} />
          <meshStandardMaterial
  color="#a7dce0"
  metalness={0.95}
  roughness={0.32}
  emissive="#67c9d8"
  emissiveIntensity={0.1}
/>
        </mesh>
      </group>

      {/* Floating particles */}
   {/* Foreground particles */}
<Sparkles
  count={65}
  scale={6}
  size={1.4}
  speed={0.18}
  opacity={0.35}
  color="#c4b5fd"
/>

{/* Deep background particles */}
<Sparkles
  count={90}
  scale={[8, 6, 10]}
  size={1}
  speed={0.08}
  opacity={0.2}
  color="#79dce8"
  position={[0, 0, -2]}
/>

     <Environment resolution={256}>
  <Lightformer
    form="rect"
    intensity={3}
    position={[-4, 2, 4]}
    scale={[5, 3, 1]}
    color="#c9baff"
  />

  <Lightformer
    form="rect"
    intensity={2.5}
    position={[4, 1, -3]}
    scale={[4, 5, 1]}
    color="#79e4ed"
  />

  <Lightformer
    form="ring"
    intensity={2}
    position={[0, 5, 0]}
    scale={3}
    color="#ffffff"
  />
</Environment>
    </group>
  );
}

function DocsScene() {
  return (
    <div className="docs-scene">
      <Canvas
       camera={{ position: [0, 0, 7.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
       <fog attach="fog" args={["#171426", 7, 16]} />
        <ambientLight intensity={0.45} />

<hemisphereLight
  skyColor="#d9d0ff"
  groundColor="#26334a"
  intensity={0.55}
/>

<directionalLight
  position={[3, 4, 5]}
  intensity={1.2}
/>

<pointLight
  position={[-3, 2, 2]}
  color="#b9a7ff"
  intensity={5}
/>

<pointLight
  position={[3, -2, -2]}
  color="#79dce8"
  intensity={4}
/>

 <group scale={0.72} position={[0, 0, -0.6]}>
  <OrbitalModel />
</group>
      </Canvas>
    </div>
  );
}

export default DocsScene;
