import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef } from "react";

function Orb() {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.3;
    meshRef.current.rotation.x += delta * 0.15;
  });

  return (
    <Float speed={2} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 5]} />

        <MeshTransmissionMaterial
          color="#a78bfa"
          thickness={0.8}
          roughness={0.1}
          transmission={1}
          ior={1.4}
          chromaticAberration={0.05}
        />
      </mesh>
    </Float>
  );
}

export default function GlassOrb() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={2} />

      <pointLight position={[3, 3, 3]} intensity={20} />

      <Orb />
    </Canvas>
  );
}