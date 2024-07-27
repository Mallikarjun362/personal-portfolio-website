"use client";
import { getCurrentUserDetails } from "../_functionality/ServerActions";
import GeneralProfile from "../_sections/GeneralProfile";
import { useGlobalContext } from "@/app/_context/store";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { IconType } from "react-icons";
import { useEffect } from "react";
import Link from "next/link";
import { FaRegSmileBeam } from "react-icons/fa";
import { FaSmileBeam } from "react-icons/fa";
const QuickAccessTile = ({
  OutlineIcon,
  FillIcon,
  title,
  link,
}: {
  OutlineIcon: IconType;
  FillIcon: IconType;
  title: string;
  link: string;
}) => (
  <div
    style={{
      justifyContent: "right",
      alignItems: "center",
      display: "flex",
    }}
  >
    <Link
      className="group bg-[--bg] | hover:bg-[--focusShade]"
      href={link}
      style={{
        border: "2px solid var(--mg)",
        alignItems: "center",
        borderRadius: "10px",
        padding: "5px 10px",
        fontSize: "30px",
        display: "flex",
        gap: "10px",
      }}
    >
      <FillIcon className="group-hover:block hidden" />
      <OutlineIcon className="group-hover:hidden block" />
      {title}
    </Link>
  </div>
);

export default function Base_HumanProfilePage() {
  const { currentUserDetails, setCurrentUserDetails } = useGlobalContext();
  useEffect(() => {
    (async () => {
      if (!currentUserDetails) {
        const a = await getCurrentUserDetails();
        console.log(a);

        setCurrentUserDetails(a);
      }
    })();
  }, []);
  return (
    <main
      className="pl-[10%] pr-[10%] | lg:pl-[20%] lg:pr-[20%]"
      style={{
        flexDirection: "column",
        paddingBottom: "80px",
        minHeight: "100vh",
        paddingTop: "80px",
        display: "flex",
        gap: "20px",
      }}
    >
      <div
        style={{
          justifyContent: "right",
          flexWrap: "wrap",
          display: "flex",
          width: "100%",
          gap: "10px",
        }}
      >
        {currentUserDetails ? (
          <QuickAccessTile
            OutlineIcon={IoSettingsOutline}
            FillIcon={IoSettingsSharp}
            link="/human/settings"
            title="Settings"
          />
        ) : null}
        {currentUserDetails?.userName ? (
          <QuickAccessTile
            link={`/human/public/${currentUserDetails?.userName}`}
            OutlineIcon={FaRegSmileBeam}
            FillIcon={FaSmileBeam}
            title="Public Profile"
          />
        ) : null}
      </div>
      <br />
      <GeneralProfile currentUserDetails={currentUserDetails} />
    </main>
  );
}
