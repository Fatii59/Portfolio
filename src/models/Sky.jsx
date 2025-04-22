import React from 'react';
import { Sky as DreiSky } from '@react-three/drei';

const Sky = () => {
  return (
    <DreiSky
      distance={450000}
      sunPosition={[0, 1, 0]}
      inclination={0}
      azimuth={0.25}
    />
  );
};

export default Sky;
