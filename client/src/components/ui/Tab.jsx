import state from "@/store";
import { useSnapshot } from "valtio";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick, className = "" }) => {
  const { color } = useSnapshot(state);
  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };

  return (
    <div
      className={`tab-btn duration-200 hover:-rotate-20 even:hover:rotate-20 ${isFilterTab ? "glassmorphism rounded-full" : "rounded-4xl"} ${className}`.trim()}
      onClick={handleClick}
      style={activeStyles}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={isFilterTab ? "size-2/3" : "size-11/12 object-contain"}
      />
    </div>
  );
};

export default Tab;
