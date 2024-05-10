// src/Components/ShareFolder/HyperlinkPreview.jsx
import React from "react";
import { Link,  } from "react-router-dom";
import style from "./Style/HyperlinkPreviewStyle"

export default function HyperlinkPreview({ title, itemPreview, url, isVisitKoreaItem }) {
  let target = "_blank"

  if(url == null){
    url = "/MapPage"
    target = "_self"
  }

  return (
    <div style={style.item}>
      <Link to={url} target={target} state={{ search: title }}>
        <h1 style={style.title}>{title}</h1>
      </Link>
      <p style={style.preview}>
        {isVisitKoreaItem ? itemPreview : itemPreview + "..."}
      </p>
    </div>
  );
}
