import "./styles.css";
import { Canvas, useFrame } from "@react-three/fiber";
import Box from "./ThreeObj/Box";
import Pin from "./ThreeObj/Pin";
import { Vector3 } from "three";
import { Text } from "@react-three/drei";

export default function App() {
  const Rig = ({ v = new Vector3() }) => {
    return useFrame((state) => {
      state.camera.position.lerp(
        v.set(state.mouse.x / 2, state.mouse.y / 1, 10),
        0.05
      );
    });
  };
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* CanvasはThree.jsを描画する領域を定義する */}
      <Canvas>
        <Rig />
        <ambientLight />
        <fog attach="fog" color="#fff" near={1} far={20} />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[0, 1, -10]} />
        <Box position={[1.2, 0, 0]} />
        <Text
          position={[0, 1, 0]}
          font="/Robot-Black.ttf"
          fontSize={2}
          color="#222"
        >
          Hello world
        </Text>
        <Text
          position={[0, 0, 2]}
          font="/Robot-Black.ttf"
          fontSize={2}
          color="#222"
        >
          Front End
        </Text>
        {/* <Pin /> */}
      </Canvas>
    </div>
  );
}
