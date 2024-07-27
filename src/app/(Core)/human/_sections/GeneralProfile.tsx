import GeneralTextInfoTile from "../_components/InformationTiles/GeneralTextInfoTile";
import LocationInfoTile from "../_components/InformationTiles/LocationInfoTile";
import UsernameTile from "../_components/InformationTiles/UsernameTile";
import MyLoadingComponent from "@/app/_components/MyLoadingComponent";
import {
  EHumanRole,
  IHumanRoot,
} from "@/database/1_mongodb/Schemas/Core/1_HumanRoot";
// USER
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
// EMAIL
import { MdOutlineEmail } from "react-icons/md";
import { MdEmail } from "react-icons/md";
// ROLE
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";

export default function GeneralProfile({
  currentUserDetails,
}: {
  currentUserDetails: IHumanRoot | null;
}) {
  return (
    <section
      style={{
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "50vh",
        display: "flex",
        gap: "10px",
      }}
    >
      <MyLoadingComponent
        isLoading={!currentUserDetails}
        style={{
          backgroundColor: "#eee",
          borderRadius: "10px",
          height: "inherit",
          width: "100%",
        }}
      >
        <UsernameTile value={currentUserDetails?.userName} />
        <GeneralTextInfoTile
          title="Display Name"
          value={currentUserDetails?.displayName}
          IconOutline={FaRegUserCircle}
          IconFill={FaUserCircle}
        />
        <GeneralTextInfoTile
          title="Email"
          value={currentUserDetails?.email}
          IconOutline={MdOutlineEmail}
          IconFill={MdEmail}
        />
        {currentUserDetails?.role !== EHumanRole.HUMAN ? (
          <GeneralTextInfoTile
            IconOutline={MdOutlineAdminPanelSettings}
            value={currentUserDetails?.role}
            IconFill={MdAdminPanelSettings}
            title="Role"
          />
        ) : null}
        {currentUserDetails?.location ? (
          <LocationInfoTile location={currentUserDetails?.location} />
        ) : null}
      </MyLoadingComponent>
    </section>
  );
}
