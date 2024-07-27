import { authOptions } from "../api/auth/[...nextauth]/options";
import { IoGameControllerOutline } from "react-icons/io5";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import DropDownMenuButton from "./DropDownMenuButton";
import { IoSchoolOutline } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import { MdOutlineFeed } from "react-icons/md";
import { getServerSession } from "next-auth";
import { CgProfile } from "react-icons/cg";
import { LuLogIn } from "react-icons/lu";
import { IconType } from "react-icons";
import BrandLogo from "./BrandLogo";

export interface INavLink {
  icon: ReturnType<IconType>;
  name: string;
  link: string;
}

export default async function PrimaryMainNavigationBar() {
  const session = await getServerSession(authOptions);
  const dropDownNavLinks: Array<INavLink> = [
    ...(session
      ? [
          ...(session.user.email === "pmallikarjun307@gmail.com"
            ? [
                {
                  icon: <RiMoneyRupeeCircleLine />,
                  name: "* Ecomonics",
                  link: "/econ",
                },
                {
                  icon: <IoSchoolOutline />,
                  name: "* Education",
                  link: "/edu",
                },
                {
                  icon: <IoGameControllerOutline />,
                  name: "* Personal",
                  link: "/mrj3",
                },
              ]
            : []),
          {
            icon: <MdOutlineFeed />,
            link: "/boring-blog",
            name: "Boring Blog",
          },
          { name: "Profile", link: "/human", icon: <CgProfile /> },
          {
            link: "/api/auth/signout",
            icon: <PiSignOutBold />,
            name: "Sign out",
          },
        ]
      : [{ icon: <LuLogIn />, name: "Sign in", link: "/api/auth/signin" }]),
  ];
  return (
    <header
      className="lg:pl-[50px] lg:pr-[50px] | pl-[20px] pr-[20px] bg-[--bg]"
      style={{
        borderBottom: "2px solid var(--mg)",
        justifyContent: "space-between",
        backdropFilter: "blur(20px)",
        paddingBottom: "10px",
        alignItems: "center",
        paddingTop: "10px",
        color: "var(--fg)",
        userSelect: "none",
        display: "flex",
        width: "100vw",
      }}
    >
      <BrandLogo />
      <DropDownMenuButton {...{ dropDownNavLinks }} />
    </header>
  );
}
