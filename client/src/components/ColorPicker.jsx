import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "@/store";

const ColorPicker = ({ setActiveEditorTab }) => {
  const { color, intro } = useSnapshot(state);

  if (intro) return;

  const ref = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setActiveEditorTab(""); // close picker
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="absolute left-full ml-3">
      <SketchPicker
        color={color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
        presetColors={[
          "#ccc",
          "#EFBD4E",
          "#80C670",
          "#726DE8",
          "#353934",
          "#2CCCE4",
          "#ff8a65",
          "#7098DA",
          "#C19277",
          "#FF96AD",
          "#512314",
          "#5F123D",
        ]}
      />
    </div>
  );
};

export default ColorPicker;
