import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import state from "@/store";
import { shirtBaked } from "@/assets";

const Shirt = () => {
  const { color, logoDecal, fullDecal, logo, isFullTexture, isLogoTexture } = useSnapshot(state);
  const { nodes, materials } = useGLTF(shirtBaked);
  const logoTexture = useTexture(logoDecal);
  const fullTexture = useTexture(fullDecal);

  useFrame((state, delta) => easing.dampC(materials.lambert1.color, color, 0.25, delta));

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        materialRoughness={1}
        dispose={null}
      >
        {isFullTexture && (
          <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} map={fullTexture} />
        )}
        {isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            mapAnistrophy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
