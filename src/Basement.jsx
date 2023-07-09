import { useLoader } from "@react-three/fiber";
import {  useGLTF } from '@react-three/drei'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import * as THREE from 'three';
function Basement(props) { 
    const gltf = useLoader(GLTFLoader, "./models/scene.glb");
    console.log(gltf.scene.children)
    const { nodes } = useGLTF('./models/scene.glb')
    console.log(nodes)
    gltf.scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });
    // Rotate the model 90 degrees on the z-axis
    gltf.scene.rotation.y = -0.8;
    gltf.scene.position.y = 0;
    gltf.scene.scale.set(2, 2, 2); 
    return (
    <>
     <primitive object={gltf.scene} castShadow receiveShadow />
    </>
  )
}

export default Basement
