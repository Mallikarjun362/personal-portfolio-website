"use client";
import CurrentPageGlobalColorTheme from "./CurrentPageGlobalColorTheme";
import { useGlobalContext } from "../_context/store";
import { useEffect } from "react";

export default function OnPageLoadLogic() {
  const { setHoverContent } = useGlobalContext();
  useEffect(() => {
    const handle_Escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setHoverContent(null);
      }
    };
    window.addEventListener("keydown", handle_Escape);
    return () => {
      window.removeEventListener("keydown", handle_Escape);
    };
  });
  return <></>;
}
