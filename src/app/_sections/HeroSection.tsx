import riverCircle from "../../assets/river-circle.png";
import Image from "next/image";
import {
  Cedarville_Cursive as TaglineFont,
  Monoton as HeroFont,
} from "next/font/google";

const heroFontStyle = HeroFont({ weight: "400", subsets: ["latin"] });
const taglineFontStyle = TaglineFont({ weight: "400", subsets: ["latin"] });

const FlagBrandTitle = () => (
  <div>
    <span className="selectSafron">In</span>
    <span className="selectBlue">d</span>
    <span className="selectGreen">us </span>
    <span className="selectSafron">Net</span>
    <span className="selectBlue">w</span>
    <span className="selectGreen">ork</span>
  </div>
);

export default function HeroSection() {
  return (
    <section
      className="lg:flex-row lg:gap-[30px] lg:pt-[80px] | pl-[7%] pr-[7%] flex-col-reverse pt-[40px] gap-[40px]"
      style={{
        alignItems: "center",
        minHeight: "60vh",
        display: "flex",
      }}
    >
      {/* LEFT */}
      <div
        className={heroFontStyle.className}
        style={{
          // fontSize: "clamp(70px,7vw + 35px,180px)",
          fontSize: "calc(7vw + 30px)",
          lineHeight: "120%",
          flex: 4,
        }}
      >
        <FlagBrandTitle />
        <div
          style={{
            fontSize: "clamp(30px,2vw + 25px,60px)",
            gap: "7px 20px",
            lineHeight: "150%",
            padding: "20px 0",
            flexWrap: "wrap",
            display: "flex",
          }}
          className={`selection:text-cyan-400 selection:bg-[#0000] ${taglineFontStyle.className}`}
        >
          <div>Explore</div>
          <div>your</div>
          <div>hidden</div>
          <div>creativity</div>
          <div>! ! !</div>
        </div>
      </div>
      {/* RIGHT */}
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          display: "flex",
          flex: 3,
        }}
      >
        <Image src={riverCircle} alt="River" style={{ objectFit: "contain" }} />
      </div>
    </section>
  );
}
