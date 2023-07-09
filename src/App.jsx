import { Suspense , useState, useRef, useLayoutEffect} from "react";
import  Lights  from './Lights';
import  Lights1  from './Lights1';
import { Canvas, useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import { Environment, Center, PresentationControls, SoftShadows  } from '@react-three/drei'
import Basement from './Basement'
import Model from './Model'
import Controls from './Animation/Controls'
const vec = new Vector3()

//this function is used to create a smooth camera movement in response to mouse movement
//Lerp
// function Rig() {
//   return useFrame(({ camera, mouse }) => {
//     vec.set(mouse.x * 2, mouse.y * 2, camera.position.z)
//     camera.position.lerp(vec, 0.025)
//     camera.lookAt(0, 0, 0)
//   })
// }

export default function App() {
  const canvasRef = useRef();
 

  return (
    <Canvas
      ref={canvasRef} 
      shadowmap = 'true'
      shadows
      camera={{ type: 'PerspectiveCamera',
      position: [30, 30, 30],  // set the camera position
      }}
    >
      <Suspense fallback={null}>
        <Lights1 />
        <color attach="background" args={['black']} />
        <PresentationControls snap global zoom={true} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
        <Center>
          <Model key='base01'/>
        </Center>
        </PresentationControls>
      </Suspense>
    </Canvas>
  )
}
