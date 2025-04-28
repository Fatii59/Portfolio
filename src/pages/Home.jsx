import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import HomeInfo from '../components/HomeInfo'
/*import Plane from '../models/Plane'*/

const Home = () => {

    const[isRotating, setIsRotating] =useState(false);
    const [currentStage, setCurrentStage] = useState(1);
  
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
  }

  /*const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
  
    if (window.innerWidth < 768) {
      screenScale = [100, 100, 100]         // Dramatisk forøgelse
      screenPosition = [0, -1.5, 0]           // Justeret så den ikke forsvinder under øen
    } else {
      screenScale = [50, 50, 50]         // Stor nok til at se sammen med fugl og ø
      screenPosition = [1,10, 100]         // Sæt lidt længere tilbage i scenen
    }
  
    return [screenScale, screenPosition];

    skal være efter islan::

        <Plane
            isRotating ={isRotating}
            planePosition={planePosition}
            planeScale={planeScale}
            rotation={[0,20,0]}
          />
  }*/
  

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  /*const[planeScale, planePosition] = adjustPlaneForScreenSize();*/

  return (
    <section className="w-full h-screen relative">

      <div className="absolute top-10 left-3 right-0 z-10 flex items-center justify-center">
        {currentStage === 1 && <HomeInfo currentStage={currentStage}/>}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
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

          <Bird/>
          <Sky/>
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          

        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
