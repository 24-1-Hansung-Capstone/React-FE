// src/Components/ShareFolder/HyperlinkPreview.jsx
import React from "react";
import { Link } from "react-router-dom";
import style from "./Style/HyperlinkPreviewStyle"

export default function HyperlinkPreview({ title, itemPreview, url }) {
  return (
    <div style={style.item}>
      <Link to={url} target="_blank">
        <h1 style={style.title}>{title}</h1>
      </Link>
      <p style={style.preview}>
        {itemPreview + "..."}
      </p>
    </div>
  );
}
