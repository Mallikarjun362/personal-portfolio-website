"use client";
import { useGlobalContext } from "../_context/store";
import { RxCross2 } from "react-icons/rx";

export default function GlobalHoverComponent() {
  const { hoverContent, setHoverContent } = useGlobalContext();
  if (!hoverContent) return null;
  return (
    <div
      style={{
        backdropFilter:"blur(15px)",
        backgroundColor: "#0002",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "fixed",
        display: "flex",
        height: "100vh",
        width: "100vw",
        bottom: 0,
        right: 0,
        left: 0,
        top: 0,
      }}
    >
      <div
        style={{
          boxShadow: "0px 0px 20px #0007",
          backgroundColor: "var(--bg)",
          width: "min-content",
          borderRadius: "5px",
          overflowX: "hidden",
          overflowY: "scroll",
          minHeight: "400px",
          maxHeight: "80%",
          minWidth: "40vw",
          maxWidth: "90vw",
          padding: "5px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "end" }}>
          <button
            onClick={() => setHoverContent(null)}
            style={{ margin: "20px" }}
          >
            <RxCross2
              className="hover:bg-[--focusShade]"
              style={{
                border: "2px solid var(--mg)",
                borderRadius: "5px",
                fontSize: "40px",
                color: "var(--mg)",
              }}
            />
          </button>
        </div>
        <div style={{ padding: "10px" }}>{hoverContent}</div>
      </div>
    </div>
  );
}
