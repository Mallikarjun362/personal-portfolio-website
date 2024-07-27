import { ILocation } from "@/database/1_mongodb/Schemas/Core/1_HumanRoot";
import { FaRegCircle, FaCircle } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

const humanReadableText = (text: string) =>
  text[0].toUpperCase() + text.slice(1).toLowerCase();

const LocationElement = ({
  name,
  value,
}: {
  name: string;
  value: string | number;
}) => (
  <div
    className="hover:bg-[#0001]"
    style={{
      border: "2px solid gray",
      borderRadius: "10px",
      padding: "10px",
      flex: 1,
    }}
  >
    <div style={{ fontSize: "20px" }}>{name}:</div>
    <div style={{ fontSize: "30px" }}>
      {humanReadableText(value.toString())}
    </div>
  </div>
);

export default function LocationInfoTile({
  location,
}: {
  location: ILocation;
}) {
  return (
    <div
      className="group hover:bg-[--focusShade] bg-[--bg]"
      style={{
        border: "4px solid gray",
        flexDirection: "column",
        borderRadius: "10px",
        userSelect: "none",
        overflow: "hidden",
        maxWidth: "80vw",
        padding: "15px",
        display: "flex",
        width: "100%",
        gap: "15px",
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
        <span>Location:</span>
        <div>
          <IoLocationOutline className="group-hover:hidden block" />
          <IoLocationSharp className="group-hover:block hidden" />
        </div>
      </div>
      <div
        style={{
          fontSize: "clamp(26px,4vw,50px)",
          textOverflow: "ellipsis",
          overflow: "hidden",
          flexWrap: "wrap",
          display: "flex",
          width: "100%",
          gap: "20px",
        }}
      >
        <LocationElement name="Planet" value={location.l0Planet} />
        <LocationElement name="Country" value={location.l1Country} />
        <LocationElement name="State" value={location.l2State} />
        <LocationElement name="District" value={location.l3District} />
        <LocationElement name="Mandal" value={location.l4Mandal} />
        <LocationElement name="City" value={location.lInfCity} />
        <LocationElement name="Latitude" value={location.lat} />
        <LocationElement name="Logitude" value={location.long} />
      </div>
    </div>
  );
}
