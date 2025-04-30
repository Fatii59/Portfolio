import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky.glb";

function Sky({ isRotating }) {
  const { scene } = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (skyRef.current) {
      // Always rotate slowly like a drifting sky
      skyRef.current.rotation.y += 0.02 * delta;

      // If island is rotating, add extra rotation
      if (isRotating) {
        skyRef.current.rotation.y += 0.25 * delta;
      }
    }
  });

  return (
    <primitive
      object={scene}
      ref={skyRef}
      scale={[0.8, 0.8, 0.8]} //adjust here to change speed
      position={[0, 0, 0]}    // Adjust here for postion 
    />
  );
}

export default Sky;
