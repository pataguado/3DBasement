import { useRef, useLayoutEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { Color, MeshStandardMaterial } from 'three'
import { texture } from './assets/textureFlame.jsx'
import Chair from './Animation/Chair.jsx'
import Map from './Animation/Map.jsx'
export default function Model(props) {
  const { scene, nodes, materials } = useGLTF('./models/scene.glb')

  const [isTextureLoaded, setIsTextureLoaded] = useState(false)

  useLayoutEffect(() => {
    materials.dagger.emissive = new Color('#bfd3d4'),
    materials.dagger.emissiveIntensity = '0.3'
    materials.punyo.emissive = new Color('#405d5e'),
    materials.punyo.emissiveIntensity = '0.2'
    scene.scale.set(3, 3, 3)
    console.log(useGLTF('./models/scene.glb'))
  }, [scene])

  const gradientMaterial = useRef()
  const swordMaterial = useRef()
  useLayoutEffect(() => {
    gradientMaterial.current = new MeshStandardMaterial({
      map: texture,
      emissive: new Color('#ff0000'),
      emissiveIntensity: 1,
      
    })
   
   setIsTextureLoaded(true)
  }, [])

  if (!isTextureLoaded) {
    return null
  }
  const handleOut = () => {
    nodes.chair.rotation.y = 0
  }



  return (
    <group {...props}>
      <mesh
        material={gradientMaterial.current}
        geometry={nodes.flameLeft.geometry}
        scale={[3, 3, 3]}
        
      />
      <mesh
        material={gradientMaterial.current}
        geometry={nodes.flameRight.geometry}
        scale={[3, 3, 3]}
      />
     
      <mesh
        material={nodes.planks.material}
        geometry={nodes.planks.geometry}
        receiveShadow
        scale={[3, 3, 3]}
      />

       <mesh
        castShadow
        geometry={nodes.torchLeft.geometry}
        material={nodes.torchLeft.material}
       
        scale={[3, 3, 3]}
      />
       <mesh
        
        geometry={nodes.torchRight.geometry}
        material={nodes.torchRight.material}
        castShadow
        scale={[3, 3, 3]}
      />
       <mesh
        
        geometry={nodes.brickRight.geometry}
        material={nodes.brickRight.material}
        receiveShadow
        scale={[3, 3, 3]}
      />
          <mesh
        geometry={nodes.brickLeft.geometry}
        material={nodes.brickLeft.material}
        receiveShadow
        scale={[3, 3, 3]}
      />
          <mesh
          castShadow
        geometry={nodes.table.geometry}
        material={nodes.table.material}
        
        scale={[3, 3, 3]}
      />
           {/* <mesh
        geometry={nodes.map.geometry}
        material={nodes.map.material}
        scale={[3, 3, 3]}
      /> */}
      
      <primitive castShadow object={nodes.bigBarrel}  scale={[3, 3, 3]}/>
      <primitive castShadow object={nodes.smallBarrel}  scale={[3, 3, 3]}/>  
      <primitive castShadow object={nodes.Chest}  scale={[3, 3, 3]}/> 
      <primitive  object={nodes.sword}   scale={[3, 3, 3]} />
      <Chair/>
      <primitive object={nodes.DirectionalLight_2}  castShadow scale={[3, 3, 3]}/>
      <Map/>
    </group>
  )
}
