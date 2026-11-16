
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
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <Center>
      <primitive
        ref={modelRef}
        object={clonedScene}
        scale={1.5}
      />
    </Center>
  );
}

export default AlphaModel;
