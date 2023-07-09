
import { useRef, useEffect } from 'react'
import { Environment, Center,AccumulativeShadows,RandomizedLight } from '@react-three/drei'
import * as THREE from 'three';
export default function Lights() {
    const ambientRef = useRef()
    const directionalRef = useRef()
    const directional2Ref = useRef()
    const pointRef = useRef()
    const spotRef = useRef()

    useEffect(() => {
      
        console.log(ambientRef.current);
        const ambient = ambientRef.current
        ambient.intensity = 0
        

        //Directional light from above
        console.log(directionalRef.current);
        const dir1 = directionalRef.current
        dir1.position.set(0, 20, 0); // set position to upward direction
        dir1.intensity = 0.7
        dir1.shadow.camera.near = 1
        dir1.shadow.camera.far = 100
        dir1.shadow.camera.left = -20
        dir1.shadow.camera.right = 20
        dir1.shadow.camera.top = 20
        dir1.shadow.camera.bottom = -20
        dir1.shadow.mapSize.width = 1024
        dir1.shadow.mapSize.height = 1024
        

    

        //Point light from behind facing down
          const point1 = pointRef.current;
    point1.position.set(0, 0, -50); // set position to behind and below the scene
     point1.intensity = 1; // adjust intensity as desired
    point1.color = new THREE.Color('blue'); // set color to blue
    console.log(pointRef.current);

    //spotLight
        // const spot = ambientRef.current
        // spot.position.set(-20, 50, 20);
        
      }, []);


    return(
        <>
    
        <ambientLight ref={ambientRef}  /> 
        <directionalLight ref={directionalRef} castShadow />
        <pointLight ref={pointRef} castShadow /> 
        </>
    )
  }