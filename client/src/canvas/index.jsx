import { Canvas } from "@react-three/fiber";
import { Center, Environment } from "@react-three/drei";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import { useSnapshot } from "valtio";
import state from "@/store";

const CanvasModel = () => {
  const { intro } = useSnapshot(state);
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className={`lg h-screen! w-full transition-all ease-in ${intro ? "top-[50vh] lg:top-0 lg:left-60" : " left-0"}`}
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
