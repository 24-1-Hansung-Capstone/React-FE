import React from "react";

export default function HyperlinkPreview({ title, itemPreview, url }) {
  return (
    <div style={{marginBottom:"80px"}}>
      <a href = {url}><h1 style={{ fontSize: "25px", marginTop: "10px" }}>{title}</h1></a>
      <p style={{ fontSize: "15px", marginBottom: "20px" }}>{itemPreview + "..."}</p>
    </div>
  );
}
