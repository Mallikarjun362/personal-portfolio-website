import { FaRegCircle, FaCircle } from "react-icons/fa";
import { IconType } from "react-icons";

export default function GeneralTextInfoTile({
  title,
  value,
  IconOutline = FaRegCircle,
  IconFill = FaCircle,
}: {
  title: string;
  value: string | number | undefined | null;
  IconOutline?: IconType;
  IconFill?: IconType;
}) {
  return (
    <div
      className="group hover:bg-[--focusShade] bg-[--bg]"
      style={{
        border: "4px solid var(--mg)",
        flexDirection: "column",
        borderRadius: "10px",
        userSelect: "none",
        overflow: "hidden",
        maxWidth: "80vw",
        padding: "15px",
        display: "flex",
        width: "100%",
      }}
    >
      <div
        style={{
          justifyContent: "space-between",
          paddingRight: "10px",
          alignItems: "center",
          fontSize: "30px",
          display: "flex",
        }}
      >
        <span>{title}:</span>
        <div style={{ fontSize: "30px" }}>
          <IconOutline className="group-hover:hidden block" />
          <IconFill className="group-hover:block hidden" />
        </div>
      </div>
      <div
        style={{
          fontSize: "clamp(26px,4vw,50px)",
          textOverflow: "ellipsis",
          overflow: "hidden",
        }}
      >
        {value}
      </div>
    </div>
  );
}
