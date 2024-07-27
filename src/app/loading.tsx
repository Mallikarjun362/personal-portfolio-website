import { Caveat as FontStyle } from "next/font/google";
// import { CgSpinnerTwoAlt as LS } from "react-icons/cg";
// import { GiSpinningBlades as LS} from "react-icons/gi";
// import { TbFidgetSpinner as LS} from "react-icons/tb";
// import { ImSpinner2  as LS} from "react-icons/im";
import { ImSpinner9 as LS } from "react-icons/im";
import { CSSProperties } from "react";

const fontStyle = FontStyle({ subsets: ["latin"] });

export default function Loading({ style = {} }: { style?: CSSProperties }) {
  return (
    <div
      className={`${fontStyle.className} animate-pulse`}
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: "80px",
        gap: "20px",
        display: "flex",
        ...(Object.keys(style).length > 0
          ? style
          : {
              height: "90vh",
            }),
      }}
    >
      <LS className="animate-spin" />
      Loading...
    </div>
  );
}
