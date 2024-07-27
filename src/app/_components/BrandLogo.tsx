import { BsFlower1 } from "react-icons/bs";
import { IconType } from "react-icons";
import Link from "next/link";

export const BusinessBrandIcon: IconType = BsFlower1;

export default function BrandLogo() {
  return (
    <Link
      href={"/"}
      style={{
        fontFamily: "'Times New Roman', serif",
        fontSize:"clamp(29px,3vw,35px)",
        whiteSpace: "nowrap",
        alignItems: "center",
        display: "flex",
        gap: "10px",
      }}
    >
      <BusinessBrandIcon />
      <span>Indus Network</span>
    </Link>
  );
}
