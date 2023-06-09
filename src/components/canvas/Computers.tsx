import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

interface ComputerProps {
  isMobile: boolean;
}

const Computer = ({ isMobile }:ComputerProps) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]} 
        angle={0.2}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -1.5, -2.2] : [0, -2.75, -1.5]}
        rotation={[0, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)")
    setIsMobile(mediaQuery.matches)
    
    const handleMediaQueryChange = (e: { matches: boolean | ((prevState: boolean) => boolean) }): void => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }

  }, [])

  return  (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Computer isMobile={isMobile} />
      </Suspense>
      
      <Preload all/>
    </Canvas>
  )
}

export default ComputerCanvas;