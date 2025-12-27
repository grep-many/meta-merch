import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import Shirt from "./Shirt";

const Canvas3D = () => (
  <Canvas>
    <ambientLight intensity={0.5} />
    <Environment preset="city" />
    {/* <CameraRig> */}
    {/* <Backdrop /> */}
    <Center>
      <Shirt />
    </Center>
    {/* </CameraRig> */}
  </Canvas>
);

export default Canvas3D;
