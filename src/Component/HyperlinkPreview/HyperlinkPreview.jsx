import React from "react";

export default function HyperlinkPreview({ title, itemPreview, url }) {
  return (
    <div>
      <a href = {url}><h1 style={{ fontSize: "30px" }}>{title}</h1></a>
      <p style={{ fontSize: "20px" }}>{itemPreview}</p>
    </div>
  );
}
