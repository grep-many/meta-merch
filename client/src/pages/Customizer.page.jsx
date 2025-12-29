import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSnapshot } from "valtio";
import config from "@/config/config";
import state from "@/store";
import { download, logoShirt, stylishShirt } from "@/assets";
import { downloadCanvasToImage, reader } from "@/config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "@/config/constants";
import { fadeAnimation, slideAnimation } from "@/config/motion";
import { AIPicker, ColorPicker, Button, FilePicker, Tab } from "@/components";

const Customizer = () => {
  const { intro } = useSnapshot(state);
  const [file, setFile] = React.useState("");
  const [prompt, setPrompt] = React.useState("");
  const [generatingImg, setGeneratingImg] = React.useState(false);
  const [activeEditorTab, setActiveEditorTab] = React.useState("");
  const [activeFilterTab, setActiveFilterTab] = React.useState({
    logoShirt: true,
    stylishShirt: false,
  });

  // show tab content depending on the active tab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker />;
      case "aipicker":
        return <AIPicker />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {!intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex min-h-screen items-center">
              <div className="editortabs-container">
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handleClick={() => setActiveEditorTab(tab.name)} />
                ))}
                {generateTabContent()}
              </div>
            </div>
          </motion.div>
          <motion.div className="absolute top-5 right-5 z-10" {...fadeAnimation}>
            <Button
              variant="filled"
              onClick={() => (state.intro = true)}
              className="w-fit px-4 py-2.5 text-sm font-bold"
            >
              Go Back
            </Button>
          </motion.div>
          <motion.div className="filtertabs-container" {...slideAnimation("up")}>
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={false}
                handleClick={() => null}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
