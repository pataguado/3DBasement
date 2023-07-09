import {  useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring, animated,config } from '@react-spring/three'

export default function Chair(props) {
  const {  nodes } = useGLTF('./models/scene.glb')
  const [active, setActive] = useState(false)
  const { rotationChair } = useSpring({
    rotationChair: active ? -0.5 : 0,
    config: config.wobbly,
  })
  const handleOut = () => {
    nodes.chair.rotation.y = 0
  }

  return (
      <animated.primitive object={nodes.chair} castShadow  scale={[3, 3, 3]} rotation-y={rotationChair} onPointerOver={e=>setActive(true)} onPointerOut={e=>setActive(false)}/> 
  )
}
