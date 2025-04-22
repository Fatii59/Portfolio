import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -2.5, 0];
    let rotation = [0, 0.6, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.1, 0.1, 0.1]
    } else {
      screenScale = [0.07, 0.07, 0.07];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{
          position: [0, 0, 275],
          fov: 45,
          near: 0.1,
          far: 400,
        }}
      >
        {/* Add orbit controls with zoom constraints */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={100} // Keeps you from zooming too close
          maxDistance={280} // Increased maxDistance to allow for more zooming out
        />

        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={2} />
          <ambientLight intensity ={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={0.5} />

          <Sky/>
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
