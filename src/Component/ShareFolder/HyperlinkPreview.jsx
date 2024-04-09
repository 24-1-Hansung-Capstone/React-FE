import React from "react";
import { Link } from "react-router-dom";

export default function HyperlinkPreview({ title, itemPreview, url }) {
  return (
    <div style={{ marginBottom: "80px" }}>
      <Link to={url}>
        <h1 style={{ fontSize: "25px", marginTop: "10px" }}>{title}</h1>
      </Link>
      <p style={{ fontSize: "15px", marginBottom: "20px" }}>
        {itemPreview + "..."}
      </p>
    </div>
  );
}
