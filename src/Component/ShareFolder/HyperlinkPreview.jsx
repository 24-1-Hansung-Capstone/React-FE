// src/Components/ShareFolder/HyperlinkPreview.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function HyperlinkPreview({ title, itemPreview, url }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <Link to={url}>
        <h1 style={{ fontSize: "20px", marginBottom: "15px" }}>{title}</h1>
      </Link>
      <p style={{ fontSize: "12px" }}>
        {itemPreview + "..."}
      </p>
    </div>
  );
}
