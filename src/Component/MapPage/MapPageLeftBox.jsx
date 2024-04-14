// src\Component\MapPage\MapPageLeftBox.jsx
import SmallLogoMid from "../ShareFolder/SmallLogoMid";
import MapSearchInput from "./MapSearchInput";
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";
 
export default function MapPageLeftBox() {
  return (
    <div style={{...PageStyles.CommonLeftPage, ...ComponentStyles.CommonLeftPage}}>
      <SmallLogoMid />
      <MapSearchInput />
    </div>
  );
}