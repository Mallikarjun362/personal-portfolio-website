"use client";
import { CSSProperties, ReactNode } from "react";
import { useGlobalContext } from "../_context/store";

export default function HoverTriggerButton({
  hoverContent = "CONTENT",
  buttonStyle = {},
  className,
  title,
}: {
  buttonStyle?: CSSProperties;
  hoverContent?: ReactNode;
  className: string;
  title: ReactNode;
}) {
  const { setHoverContent } = useGlobalContext();
  return (
    <button
      onClick={() => setHoverContent(hoverContent)}
      style={{ ...buttonStyle }}
      className={className}
    >
      {title}
    </button>
  );
}
