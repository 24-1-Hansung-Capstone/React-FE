import SmallLogoMid from "../ShareFolder/SmallLogoMid";
import MapSearchInput from "./MapSearchInput";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";
 
export default function MapPageLeftBox() {
  return (
    <div style={ShareStyles.LeftPageDetailStyle}>
      <SmallLogoMid />
      <MapSearchInput />
    </div>
  );
}