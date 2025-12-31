import { useSnapshot } from "valtio";
import Button from "./ui/Button";
import state from "@/store";
import React from "react";

const AIPicker = ({ prompt, setPrompt, setActiveEditorTab, generatingImg, handleSubmit }) => {
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
    <div ref={ref} className="aipicker-container">
      <textarea
        placeholder="Ask AI..."
        className="aipicker-textarea resize-none"
        rows={5}
        value={prompt}
        onChange={({ target }) => setPrompt(target.value)}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <Button variant="outline" className="text-xs">
            Asking AI...
          </Button>
        ) : (
          <>
            <Button variant="outline" className="text-xs" onClick={() => handleSubmit("logo")}>
              AI Logo
            </Button>
            <Button variant="filled" className="text-xs" onClick={() => handleSubmit("full")}>
              AI Full
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
