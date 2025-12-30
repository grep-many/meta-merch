import { useSnapshot } from "valtio";

import state from "@/store";
import { getContrastingColor } from "@/config/helpers";

const Button = ({ variant = "", children, className = "", ...props }) => {
  const { color } = useSnapshot(state);

  const generateStyle = (variant) => {
    if (variant === "filled") {
      return {
        backgroundColor: color,
        color: getContrastingColor(color),
      };
    } else if (variant === "outline") {
      return {
        borderWidth: "1px",
        borderColor: color,
        color: color,
      };
    }
  };

  return (
    <button
      className={`z-11 flex-1 cursor-pointer rounded-md px-2 py-1.5 ${className}`.trim()}
      style={generateStyle(variant)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
