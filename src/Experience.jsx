import { OrbitControls, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from "react";

export default function Experience() {
  const aburasobaya = useGLTF("./model/aburasobaya.glb");
  const aburasobayaRef = useRef();

  const { position, rotation, scale } = useControls("Model Position", {
    position: {
      value: { x: 1, y: -2.5, z: 1 },
      step: 0.1,
    },
    rotation: {
      value: { x: 0, y: -1.5, z: 0 },
      step: 0.01,
    },
    scale: {
      value: { x: 1.5, y: 1.5, z: 1.5 },
      step: 0.1,
    },
  });

  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 2, 2]} intensity={4.5} castShadow />
      <primitive
        receiveShadow
        ref={aburasobayaRef}
        object={aburasobaya.scene}
        position={[position.x, position.y, position.z]}
        rotation={[rotation.x, rotation.y, rotation.z]}
        scale={[scale.x, scale.y, scale.z]}
      />
    </>
  );
}
