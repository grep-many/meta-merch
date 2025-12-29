import React from "react";
import Button from "./Button";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex flex-1 flex-col">
        <input
          type="file"
          accept="image/*"
          id="file-upload"
          onChange={(e) => setFile(e.target.files[0])}
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
