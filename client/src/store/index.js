import { threejsIcon } from "@/assets";
import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: threejsIcon,
  fullDecal: threejsIcon,
});

export default state;
