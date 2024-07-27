import { ReactNode } from "react";

export default function ClassicMasterTitle({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      style={{
        fontFamily: "Times New Roman",
        marginBottom: "100px",
        lineHeight: "100%",
        fontSize: "100px",
      }}
    >
      {children}
    </div>
  );
}
