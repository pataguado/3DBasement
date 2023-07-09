
import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'



export default function Lights1() {
    const ref = useRef()
    const dir = useRef()
    const amb = useRef()
    const light = useRef()
    const { nodes,scene } = useGLTF('./models/scene.glb')

    return (
      <>
     <ambientLight
      ref={amb}
     intensity={0.1}
     />
     <directionalLight 
      ref={dir} 
      intensity={0.1}
      castShadow
      />
          <spotLight
            ref={light}
            castShadow
            angle='1.3'
            color="orange"
            intensity={0.7}
            position={[0, 20, 10]}
            penumbra={0.5}
            shadow-mapSize={[64, 64]}
            shadow-bias={-0.000001}
            target-position={[0, 0, 0]}
            onUpdate={(self) => self.target.updateMatrixWorld()}
          />
       
      </>
    )
  }