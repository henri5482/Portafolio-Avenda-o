import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Suspense } from "react";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Room } from "./Room";

const HeroExperience = () => {
  // These media queries are no longer strictly necessary if you're disabling zoom entirely
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      {/* Configure OrbitControls to disable panning and ALL zoom */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={false} // <--- Set this to false to disable zoom for all devices
        maxDistance={20} // These will still apply to initial camera setup but not user interaction
        minDistance={5}  // These will still apply to initial camera setup but not user interaction
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={100} />
        <group
          // You might still use isMobile for scaling the Room model, if needed
          // scale={isMobile ? 0.7 : 1} // Uncomment and keep isMobile if scaling is desired
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;