import Button from "./Button";
import { useSnapshot } from "valtio";
import state from "@/store";
import React from "react";

const FilePicker = ({ file, setActiveEditorTab, setFile, readFile }) => {
  const { intro } = useSnapshot(state);
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
    <div ref={ref} className="filepicker-container">
      <div className="flex flex-1 flex-col">
        <input
          type="file"
          accept="image/*"
          id="file-upload"
          onChange={(e) => setFile(e.target.files[0])}
          className="hidden"
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 truncate text-xs text-black/80">
          {file === "" ? "No file selected!" : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button variant="outline" onClick={() => readFile("logo")} className="text-xs">
          Logo
        </Button>
        <Button variant="filled" onClick={() => readFile("full")} className="text-xs">
          Full
        </Button>
      </div>
    </div>
  );
};

export default FilePicker;
