import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Mesh } from "three";

type BoxProps = {
  position: [x:number, y:number, z:number]
};

const Box : React.VFC<BoxProps>= (props) => {
  const mesh = useRef<Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // requestAnimationFrameでの記述ができ、１フレームごとのメッシュアニメーションを追加できる
  useFrame(() => (mesh.current.rotation.x += 0.01));
  
  return <>
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5:1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut ={() => setHover(false)}
    >
        <boxGeometry args={[1,1,1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  </>
}

export default Box;