import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { INavLink } from "./PrimaryMainNavigationBar";
import HoverTriggerButton from "./HoverTriggerButton";
import { CgMoreVertical } from "react-icons/cg";
import { CSSProperties } from "react";
import Link from "next/link";

const DropDownItem = ({
  navLink,
  isLast = false,
}: {
  navLink: INavLink;
  isLast?: boolean;
}) => (
  <>
    <Link
      className="hover:bg-[--focusShade]"
      href={navLink.link}
      style={{
        alignItems: "center",
        padding: "10px 15px",
        display: "flex",
        width: "100%",
        gap: "10px",
      }}
    >
      <span style={{ fontSize: "30px" }}>{navLink.icon}</span>
      <span style={{ fontSize: "25px" }}>{navLink.name}</span>
    </Link>
    <hr
      style={{
        display: isLast ? "none" : "block",
        backgroundColor: "var(--mg)",
        height: "2px",
        width: "100%",
      }}
    />
  </>
);

export default function DropDownMenuButton({
  dropDownNavLinks,
}: {
  dropDownNavLinks: Array<INavLink>;
}) {
  const commonButtonStyle: CSSProperties = {
    border: "2.5px solid var(--mg)",
    borderRadius: "10px",
    alignItems: "center",
    padding: "5px 10px",
    display: "flex",
    gap: "10px",
  };
  if (
    dropDownNavLinks.length == 1 &&
    dropDownNavLinks[0].link === "/api/auth/signin"
  ) {
    const x = dropDownNavLinks[0];
    return (
      <Link
        href={x.link}
        style={commonButtonStyle}
        className="hover:bg-[--focusShade]"
      >
        <span style={{ fontSize: "40px" }}>{x.icon}</span>
        <span className="hidden md:block" style={{ fontSize: "30px" }}>
          {x.name}
        </span>
      </Link>
    );
  }
  return (
    <div className="group" style={{ position: "relative" }}>
      <button className="hover:bg-[--focusShade]" style={commonButtonStyle}>
        <AiOutlineClose size={47} className="group-hover:block hidden" />
        <AiOutlineMenu size={47} className="group-hover:hidden block" />
        <span
          className="hidden md:block"
          style={{ fontSize: "clamp(26px,3vw,30px)", whiteSpace: "nowrap" }}
        >
          Menu
        </span>
      </button>
      <div
        className="hidden group-hover:block | lg:mr-[50px] | mr-[20px]"
        style={{
          border: "2px solid var(--mg)",
          backgroundColor: "var(--bg)",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "20px",
          width: "fit-content",
          overflow: "hidden",
          position: "fixed",
          right: 0,
          top: 69,
        }}
      >
        {dropDownNavLinks.map((val, idx) => (
          <DropDownItem navLink={val} key={idx} />
        ))}
        <HoverTriggerButton
          buttonStyle={{
            alignItems: "center",
            padding: "10px 15px",
            cursor: "pointer",
            display: "flex",
            width: "100%",
            gap: "10px",
          }}
          className="hover:bg-[--focusShade]"
          hoverContent="Welcome !!!"
          title={
            <>
              <CgMoreVertical size={30} />
              <span style={{ fontSize: "25px" }}>More</span>
            </>
          }
        />
      </div>
    </div>
  );
}
