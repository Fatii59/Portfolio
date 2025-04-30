import { useRef, useEffect, useState } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import birdScene from '../assets/3d/bird.glb';

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  // Set your fly range (FARTHER from island)
  const startX = -400;   // Start far left
  const endX = 400;      // End far right
  const flightHeight = 30; // Bird flying height ABOVE the island
  const zOffset = -50;   // Slight z offset for 3D feeling (optional)

  useEffect(() => {
    actions['Take 001'].play();
  }, [actions]);

  useEffect(() => {
    if (birdRef.current) {
      birdRef.current.position.set(startX, flightHeight, zOffset);
    }
  }, []);

  useFrame(({ clock }) => {
    if (!birdRef.current) return;

    // Smooth bobbing up and down in flight
    birdRef.current.position.y = flightHeight + Math.sin(clock.elapsedTime * 2) * 2;

    // Move bird along X axis
    birdRef.current.position.x += direction * 0.7; // << much faster than before (0.5 instead of 0.05)

    // Change direction when reaching the edges
    if (birdRef.current.position.x > endX) {
      setDirection(-1);
      birdRef.current.rotation.y = Math.PI; // Turn back
    } else if (birdRef.current.position.x < startX) {
      setDirection(1);
      birdRef.current.rotation.y = 0; // Face forward
    }
  });

  return (
    <mesh scale={[0.1, 0.1, 0.1]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
