
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";

function AlphaModel() {
  const modelRef = useRef();

  const { scene } = useGLTF("/models/alpha-sculpture.glb");

  const clonedScene = useMemo(
    () => scene.clone(true),
    [scene]
  );

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
