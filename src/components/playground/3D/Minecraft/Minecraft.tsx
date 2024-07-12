import React, {useState, Suspense} from 'react'

import { Canvas } from "react-three-fiber"
import { Loader } from '@react-three/drei'

import Box from "./Box"
import Floor from './Floor'
import Lights from './Lights'

function Minecraft() {
  const [open, setOpen] = useState(false)

  return (
  <div className='h-screen w-full flex items-center justify-center '>
      <Canvas
        shadows //updated from shadowmap
        camera={{position: [-5, 4, 4], fov: 40, zoom: .5}}
      >
        <Lights />
        <Suspense fallback={null}>
          <Box open={open} setOpen={setOpen} />
          <Floor />
        </Suspense> 
      </Canvas>
      <Loader />
    </div>
  )
}

export default Minecraft;