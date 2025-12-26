import { useSnapshot } from "valtio";

import state from "@/store";
import { getContrastingColor } from "@/config/helpers";

const Button = ({ type = "", title = "", className = "", handleClick }) => {
  const { color } = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: color,
        color: getContrastingColor(color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: color,
        color: color,
      };
    }
  };

  return (
    <button
      className={`flex-1 cursor-pointer rounded-md px-2 py-1.5 ${className}`.trim()}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
