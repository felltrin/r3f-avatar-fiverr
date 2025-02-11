import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <Avatar />
        <mesh
          scale={[0.8, 0.5, 0.8]}
          position-y={0.25}
          rotation-y={Math.PI / 4}
        >
          <boxGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh scale={5} rotation-x={-Math.PI / 2} rotation-z={Math.PI / 4}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </>
  );
};
