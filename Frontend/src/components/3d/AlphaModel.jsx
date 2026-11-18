
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";

function AlphaModel() {
  const modelRef = useRef();

  const { scene } = useGLTF("/models/alpha-sculpture.glb");

  const clonedScene = useMemo(() => {
  const clone = scene.clone(true);

  clone.traverse((child) => {
    if (!child.isMesh) return;

    child.castShadow = true;
    child.receiveShadow = true;

    const updateMaterial = (material) => {
      const updatedMaterial = material.clone();

      if (
        updatedMaterial.isMeshStandardMaterial ||
        updatedMaterial.isMeshPhysicalMaterial
      ) {
        updatedMaterial.roughness = 0.3;
        updatedMaterial.metalness = 0.08;
        updatedMaterial.needsUpdate = true;
      }

      return updatedMaterial;
    };

    if (Array.isArray(child.material)) {
      child.material = child.material.map(updateMaterial);
    } else if (child.material) {
      child.material = updateMaterial(child.material);
    }
  });

  return clone;
}, [scene]);

  useFrame((state, delta) => {
    if (!modelRef.current) return;

    const model = modelRef.current;

    // Continuous rotation
    model.rotation.y += delta * 0.35;

    // Smooth cursor-responsive movement
    const targetX = -state.pointer.y * 0.12;
    const targetZ = -state.pointer.x * 0.06;

    const smoothness = 1 - Math.exp(-3 * delta);

    model.rotation.x +=
      (targetX - model.rotation.x) * smoothness;

    model.rotation.z +=
      (targetZ - model.rotation.z) * smoothness;
  });

  return (
    <Center>
      <primitive
        ref={modelRef}
        object={clonedScene}
        scale={1.8}
      />
    </Center>
  );
}

export default AlphaModel;

useGLTF.preload("/models/alpha-sculpture.glb");
